const MedHealth = artifacts.require("MedHealth");

contract("MedHealth", accounts => {
    let medHealth;

    // 在每个测试之前部署新的合约实例
    beforeEach(async () => {
        medHealth = await MedHealth.new();
    });

    // 测试注册账户功能
    it("应成功注册账户", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        const { 0: accountAddress, 1: role, 2: uuid } = await medHealth.getAccount(accounts[1]);

        assert.strictEqual(accountAddress, accounts[1], "账户地址不匹配");
        assert.strictEqual(role, "患者", "角色不匹配");
        assert.strictEqual(uuid, "uuid1", "UUID不匹配");
    });

    // 测试患者提交问诊
    it("应允许患者提交问诊", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        const inquiry = await medHealth.getInquiry(1);

        assert.strictEqual(inquiry[0].toString(), "1", "问诊ID不匹配");
    });

    // 测试医院分配医师
    it("应允许医院分配医师", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });

        const inquiry = await medHealth.getInquiry(1);
        assert.strictEqual(inquiry[2], accounts[2], "医师地址不匹配");
    });

    // 测试医师接诊
    it("应允许医师接诊", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });

        const inquiry = await medHealth.getInquiry(1);
        assert.strictEqual(inquiry[8].toString(), "1", "接诊状态不正确");
    });

    // 测试医师诊断
    it("应允许医师进行诊断", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });
        await medHealth.physicianDiagnosisInquiry(1, "medicalHashExample", "videoHashExample", { from: accounts[2] });

        const inquiry = await medHealth.getInquiry(1);
        assert.strictEqual(inquiry[5], "medicalHashExample", "病例哈希不匹配");
        assert.strictEqual(inquiry[6], "videoHashExample", "视频哈希不匹配");
        assert.strictEqual(inquiry[9].toString(), "1", "诊断状态不正确");
    });

    // 测试医院审核问诊
    it("应允许医院审核问诊", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });
        await medHealth.physicianDiagnosisInquiry(1, "medicalHashExample", "videoHashExample", { from: accounts[2] });
        await medHealth.hospitalReviewInquiry(1, { from: accounts[0] });

        const inquiry = await medHealth.getInquiry(1);
        assert.strictEqual(inquiry[10].toString(), "1", "审核状态不正确");
    });

    // 测试患者登记药品代买信息
    it("应允许患者登记药品代买信息", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.patientRegDrugDelivery(1, 1, { from: accounts[1] });

        const drugDelivery = await medHealth.getDrugDelivery(1);
        assert.strictEqual(drugDelivery[0].toString(), "1", "药品代买ID不匹配");
    });

    // 测试医师接单
    it("应允许医师接单", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });
        await medHealth.patientRegDrugDelivery(1, 1, { from: accounts[1] });
        await medHealth.physicianAcceptDrugDelivery(1, { from: accounts[2] });

        const drugDelivery = await medHealth.getDrugDelivery(1);
        assert.strictEqual(drugDelivery[6].toString(), "1", "接单状态不正确");
    });

    // 测试医师派送订单
    it("应允许医师派送订单", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });
        await medHealth.patientRegDrugDelivery(1, 1, { from: accounts[1] });
        await medHealth.physicianAcceptDrugDelivery(1, { from: accounts[2] });
        await medHealth.physicianDeliveryDrug(1, "certiHashExample", { from: accounts[2] });

        const drugDelivery = await medHealth.getDrugDelivery(1);
        assert.strictEqual(drugDelivery[5], "certiHashExample", "派送凭证哈希不匹配");
        assert.strictEqual(drugDelivery[7].toString(), "1", "派送状态不正确");
    });

    // 测试医院审核药品代买情况
    it("应允许医院审核药品代买情况", async () => {
        await medHealth.registerAccount(accounts[1], "患者", "uuid1");
        await medHealth.patientRegistrationInquiry(1, "在加就医", { from: accounts[1] });
        await medHealth.registerAccount(accounts[2], "医师", "uuid2");
        await medHealth.hospitalDisInquiry(1, accounts[2], { from: accounts[0] });
        await medHealth.physicianRecInquiry(1, { from: accounts[2] });
        await medHealth.patientRegDrugDelivery(1, 1, { from: accounts[1] });
        await medHealth.physicianAcceptDrugDelivery(1, { from: accounts[2] });
        await medHealth.physicianDeliveryDrug(1, "certiHashExample", { from: accounts[2] });
        await medHealth.hospitalReviewDrugDelivery(1, { from: accounts[0] });

        const drugDelivery = await medHealth.getDrugDelivery(1);
        assert.strictEqual(drugDelivery[8].toString(), "1", "药品审核状态不正确");
    });
});
