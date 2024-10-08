# ************************************************************
# Sequel Ace SQL dump
# 版本号： 20074
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# 主机: localhost (MySQL 8.0.39)
# 数据库: med_health
# 生成时间: 2024-10-08 01:32:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# 转储表 account
# ------------------------------------------------------------

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `role` varchar(20) DEFAULT NULL COMMENT '角色',
  `uuid` varchar(255) DEFAULT NULL COMMENT '唯一标识id',
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '性别',
  `phone` varchar(11) DEFAULT NULL COMMENT '电话',
  `hospital` varchar(255) DEFAULT NULL COMMENT '所属医院',
  `chain_account` varchar(255) DEFAULT NULL COMMENT '区块链账户地址',
  `home_addr` varchar(255) DEFAULT NULL COMMENT '家庭住址',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `age` int DEFAULT NULL COMMENT '年龄',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_phone_unique` (`phone`),
  KEY `idx_account_name` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;

INSERT INTO `account` (`id`, `username`, `password`, `role`, `uuid`, `sex`, `phone`, `hospital`, `chain_account`, `home_addr`, `nickname`, `age`)
VALUES
	(1,'张三','123456','患者','a617b874','男','12345671901','','0x2c07d4742f07183e518a832d9fbf2af323b7d1b1','xxx社区12栋1301号','',69),
	(2,'张医师','123456','医师','1e454d47','男','12345678901','hospital1','0xf4c6a6daf9ab3e424281dfb91aa0e6b6ec9d026e','','',0),
	(3,'李红','123456','患者','f6ea30fc','女','19083310001','','0x9e0d586d3fc4ec551c400bf6d54ea05233e3f8ee','xxx社区12栋1302号','',50),
	(4,'李医师','123456','医师','50900a9c','女','19082310001','hospital2','0xb18880ef22f25f22cf6f01fffb2a760c04b63e8b','','',0);

/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 drug
# ------------------------------------------------------------

DROP TABLE IF EXISTS `drug`;

CREATE TABLE `drug` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '代买ID',
  `patient` varchar(255) DEFAULT NULL COMMENT '患者姓名',
  `physician` varchar(255) DEFAULT NULL COMMENT '医师姓名',
  `hospital` varchar(255) DEFAULT NULL COMMENT '医院名称',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `bind_medical` int unsigned DEFAULT NULL COMMENT '绑定病历',
  `already_buy` tinyint(1) DEFAULT NULL COMMENT '是否已经购买',
  `delivery_certificate` varchar(255) DEFAULT NULL COMMENT '派送凭证',
  `is_receive` tinyint(1) DEFAULT NULL COMMENT '是否收货',
  PRIMARY KEY (`id`),
  KEY `fk_medical_id` (`bind_medical`),
  CONSTRAINT `fk_medical_id` FOREIGN KEY (`bind_medical`) REFERENCES `medical` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `drug` WRITE;
/*!40000 ALTER TABLE `drug` DISABLE KEYS */;

INSERT INTO `drug` (`id`, `patient`, `physician`, `hospital`, `create_time`, `bind_medical`, `already_buy`, `delivery_certificate`, `is_receive`)
VALUES
	(1,'cd8565d5','22c8c28f','hospital1','2024-10-07 16:06:43',20,0,'',0),
	(2,'a617b874','1e454d47','hospital1','2024-10-07 20:42:29',21,0,'',0),
	(3,'a617b874','1e454d47','hospital1','2024-10-07 20:50:44',22,0,'',0),
	(4,'a617b874','1e454d47','hospital1','2024-10-07 20:53:41',23,0,'',0),
	(5,'a617b874','1e454d47','hospital1','2024-10-07 20:59:53',24,0,'',0),
	(6,'a617b874','1e454d47','hospital1','2024-10-07 21:05:46',26,1,'http://192.168.1.115:8080/ipfs/QmdgraqZUD48fKRRGK8ACGTZ7imhKrAQ3ah5bsGC9MvGd2',1);

/*!40000 ALTER TABLE `drug` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 inquiry
# ------------------------------------------------------------

DROP TABLE IF EXISTS `inquiry`;

CREATE TABLE `inquiry` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '问诊ID',
  `patient` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '患者UUID',
  `appointment_time` varchar(255) DEFAULT NULL COMMENT '预留时间',
  `reserved_phone` varchar(11) DEFAULT NULL COMMENT '预留电话',
  `physician` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '指派医师UUID',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '类型',
  `inquiry_detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '问诊描述',
  `is_inquiry` tinyint(1) DEFAULT NULL COMMENT '已经问诊?',
  `is_reception` tinyint(1) DEFAULT NULL COMMENT '已经接诊?',
  PRIMARY KEY (`id`),
  KEY `fk_medical_account_name1` (`patient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;

INSERT INTO `inquiry` (`id`, `patient`, `appointment_time`, `reserved_phone`, `physician`, `type`, `inquiry_detail`, `is_inquiry`, `is_reception`)
VALUES
	(1,'cd8565d5','2024-10-02 20:30','12345671901','22c8c28f','在家就医','经常感到头痛',1,1),
	(2,'cd8565d5','2024-10-02 20:30','12345671901','22c8c28f','在家就医','经常感到头痛',0,1),
	(3,'cd8565d5','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(4,'cd8565d5','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(5,'dbb1a0ef','2014-01-01 00:00','19083310001','','在家就医','ssssssssss',0,0),
	(6,'dbb1a0ef','2028-02-01 02:00','19083310001','','社区就医','脑子有病',0,0),
	(7,'dbb1a0ef','2020-01-01 00:00','19083310001','','在家就医','羊癫疯',0,0),
	(8,'dbb1a0ef','2014-01-01 03:00','19083310001','','社区就医','sss',0,0),
	(9,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(10,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(11,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(12,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(13,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(18,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(19,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(20,'8e708c10','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(21,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',1,1),
	(22,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',0,1),
	(23,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',0,1),
	(24,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',0,1),
	(25,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',0,1),
	(26,'a617b874','2024-10-02 20:30','12345671901','1e454d47','在家就医','经常感到头痛',0,1);

/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 medical
# ------------------------------------------------------------

DROP TABLE IF EXISTS `medical`;

CREATE TABLE `medical` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '病历ID',
  `diagnostic_description` text COMMENT '诊断描述',
  `bind_inquiry_id` int unsigned DEFAULT NULL,
  `inquiry_video` varchar(255) DEFAULT NULL COMMENT '问诊视频',
  `medical_img` varchar(255) DEFAULT NULL COMMENT '病历图片',
  `is_need_by_drug` tinyint(1) DEFAULT NULL COMMENT '是否需要代买药品',
  PRIMARY KEY (`id`),
  KEY `fk_medical_inquiry` (`bind_inquiry_id`),
  CONSTRAINT `fk_medical_inquiry` FOREIGN KEY (`bind_inquiry_id`) REFERENCES `inquiry` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `medical` WRITE;
/*!40000 ALTER TABLE `medical` DISABLE KEYS */;

INSERT INTO `medical` (`id`, `diagnostic_description`, `bind_inquiry_id`, `inquiry_video`, `medical_img`, `is_need_by_drug`)
VALUES
	(20,'病人有高血压',2,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(21,'病人有高血压',21,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(22,'病人有高血压',22,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(23,'病人有高血压',23,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(24,'病人有高血压',24,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(25,'病人有高血压',25,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1),
	(26,'病人有高血压',26,'http://192.168.1.11:8080/ipfs/QmUSaebDyekM1GFk7FExm2NqMBFyTUC5crTuBTTSwiPAzG','http://192.168.1.11:8080/ipfs/QmQ64xb95NwKS3EpeUA9HEp3wYvi919FY936gJVt4mi9D5',1);

/*!40000 ALTER TABLE `medical` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
