const MedHealth = artifacts.require("MedHealth");

module.exports = function (deployer) {
    deployer.deploy(MedHealth);
};
