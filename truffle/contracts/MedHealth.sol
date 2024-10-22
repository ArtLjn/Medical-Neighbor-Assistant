pragma solidity ^0.4.25;

contract MedHealth {
    //用户
    struct Account {
        address accountAddress;
        string role; //患者、医师、社区医院监管人员
        string uuid; //系统用户唯一标识
    }

    //问诊
    struct Inquiry {
        uint id;
        address patientAddress; //登记患者地址
        address physicianAddress; //登记医师地址
        address supervisorAddress; //登记监管人员地址
        string inquiryType; //问诊类型: 在加就医/社区就医
        string medicalHash; //病例ipfs保存cid
        string videoHash; //视频ipfs保存cid
        uint8 isDis; // 是否已分配医师
        uint8 isReception; // 是否已接诊
        uint8 isDiagnosis; //是否已诊断
        uint8 isReview; //是否审核
    }

    //药品
    struct DrugDelivery {
        uint id;
        uint bindInquiryId; //绑定问诊信息
        address patientAddress; //登记患者地址
        address physicianAddress; //登记医师地址
        address supervisorAddress; //登记监管人员地址
        string certiHash; //派送凭证ipfs保存cid
        uint8 isAccept; //是否接单
        uint8 isdelivery; //否否派送
        uint8 isReview; //是否审核
    }
    address owner;

    mapping(address => Account) accountMapping;

    mapping(uint => Inquiry) inquiryMapping;

    mapping(uint => DrugDelivery) drugDeliveryMapping;

    // 用户注册
    function registerAccount(address accountAddress, string role, string uuid) public {
        require(accountMapping[accountAddress].accountAddress == 0x0, "账户已注册");
        accountMapping[accountAddress] = Account(accountAddress, role, uuid);
    }
    // 用户信息查询
    function getAccount(address accountAddress) public view returns(address, string, string) {
        require(accountMapping[accountAddress].accountAddress != 0x0, "账户不存在");
        Account storage account = accountMapping[accountAddress];
        return (account.accountAddress, account.role, account.uuid);
    }

    constructor() public {
        owner = msg.sender;
    }

    //问诊操作
    //患者提交问诊
    function patientRegistrationInquiry(uint id, string inquiryType) public {
        require(accountMapping[msg.sender].accountAddress != 0x0, "账户不存在");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("患者")), "此操作(登记问诊)只能患者使用");
        require(inquiryMapping[id].id == 0, "问诊信息已存在");
        inquiryMapping[id] = Inquiry(id, msg.sender, 0x0, 0x0, inquiryType, "","", 0,0,0,0);
    }

    //医院分配医师
    function hospitalDisInquiry(uint id, address physicianAddress) public {
        require(inquiryMapping[id].id != 0, "问诊信息不存在");
        require(msg.sender == owner, "只有医院管理人员可以分配医师");
        Inquiry storage inquiry = inquiryMapping[id];
        inquiry.physicianAddress = physicianAddress;
        inquiry.supervisorAddress = msg.sender;
        inquiry.isDis = 1;
    }

    //医师接诊
    function physicianRecInquiry(uint id) public {
        require(inquiryMapping[id].id != 0, "问诊信息不存在");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("医师")), "此操作(接诊)只能医师使用");
        Inquiry storage inquiry = inquiryMapping[id];
        inquiry.isReception = 1;
    }

    //医师诊断
    function physicianDiagnosisInquiry(uint id, string medicalHash, string videoHash) public {
        require(inquiryMapping[id].id != 0, "问诊信息不存在");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("医师")), "此操作(接诊)只能医师使用");
        Inquiry storage inquiry = inquiryMapping[id];
        inquiry.medicalHash = medicalHash;
        inquiry.videoHash = videoHash;
        inquiry.isDiagnosis = 1;
    }

    // 医院审核问诊
    function hospitalReviewInquiry(uint id) public {
        require(inquiryMapping[id].id != 0, "问诊信息不存在");
        require(msg.sender == owner, "只有医院管理人员可以审核问诊");
        Inquiry storage inquiry = inquiryMapping[id];
        inquiry.isReview = 1;
    }

    //查询问诊
    function getInquiry(uint id)public view returns(uint, address, address, address, string, string, string, uint8, uint8, uint8,uint8){
        require(inquiryMapping[id].id != 0, "问诊信息不存在");
        Inquiry storage inquiry = inquiryMapping[id];
        return (inquiry.id, inquiry.patientAddress, inquiry.physicianAddress, inquiry.supervisorAddress, inquiry.inquiryType, inquiry.medicalHash, inquiry. videoHash, inquiry.isDis, inquiry.isReception, inquiry.isDiagnosis, inquiry.isReview);
    }

    //药品代买业务
    //患者登记药品代买信息
    function patientRegDrugDelivery(uint id, uint inquiryId)public {
        require(drugDeliveryMapping[id].id == 0, "药品代买信息已存在，不能登记");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("患者")), "此操作(登记药品代买)只能患者使用");
        Inquiry storage inquiry = inquiryMapping[id];
        drugDeliveryMapping[id] = DrugDelivery(id, inquiryId, msg.sender, inquiry.physicianAddress, inquiry.supervisorAddress, "", 0,0,0);
    }

    //医师接单
    function physicianAcceptDrugDelivery(uint id) public {
        require(drugDeliveryMapping[id].id != 0, "药品代买信息不存在");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("医师")), "此操作(登记药品代买)只能患者使用");
        DrugDelivery storage drugDelivery = drugDeliveryMapping[id];
        drugDelivery.isAccept = 1;
    }

    //医师派送订单
    function physicianDeliveryDrug(uint id, string certiHash) public {
        require(drugDeliveryMapping[id].id != 0, "药品代买信息不存在");
        require(keccak256(abi.encodePacked(accountMapping[msg.sender].role)) == keccak256(abi.encodePacked("医师")), "此操作(登记药品代买)只能患者使用");
        DrugDelivery storage drugDelivery = drugDeliveryMapping[id];
        drugDelivery.certiHash = certiHash;
        drugDelivery.isdelivery = 1;
    }

    //医院审核药品代买情况
    function hospitalReviewDrugDelivery(uint id) public {
        require(drugDeliveryMapping[id].id != 0, "药品代买信息不存在");
        require(msg.sender == owner, "只有医院管理人员可以审核药品代买情况");
        DrugDelivery storage drugDelivery = drugDeliveryMapping[id];
        drugDelivery.isReview = 1;
    }

    // 获取药品代买信息
    function getDrugDelivery(uint id) public view returns(uint, uint, address, address, address, string, uint8, uint8, uint8) {
        require(drugDeliveryMapping[id].id != 0, "药品代买信息不存在");
        DrugDelivery storage drugDelivery = drugDeliveryMapping[id];
        return (drugDelivery.id, drugDelivery.bindInquiryId, drugDelivery.patientAddress, drugDelivery.physicianAddress, drugDelivery.supervisorAddress,drugDelivery.certiHash, drugDelivery.isAccept, drugDelivery.isdelivery, drugDelivery.isReview);
    }
    // 删除药品代买记录
    function removeInquiryRecord(uint id) public {
        require(msg.sender == owner,"必须是管理员用户调用");
        delete(inquiryMapping[id]);
    }

    function removeDrugRecord(uint id) public {
        require(msg.sender == owner,"必须是管理员用户调用");
        delete(drugDeliveryMapping[id]);
    }
}
