# ************************************************************
# Sequel Ace SQL dump
# 版本号： 20074
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# 主机: localhost (MySQL 8.0.39)
# 数据库: med_health
# 生成时间: 2024-10-06 11:37:15 +0000
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
  KEY `idx_account_name` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;

INSERT INTO `account` (`id`, `username`, `password`, `role`, `uuid`, `sex`, `phone`, `hospital`, `chain_account`, `home_addr`, `nickname`, `age`)
VALUES
	(1,'张三','123456','患者','cd8565d5','男','12345671901','','0xF596E89C6fEC0eD3426F4aA659017253061D1BFd','xxx社区12栋1301号','',69),
	(2,'李红','123456','患者','dbb1a0ef','女','19083310001','','0xfB9526b3152413a4AFE7DE6ce00b809Ce2b4b03D','xxx社区12栋1302号','',50),
	(3,'张医师','123456','医师','22c8c28f','男','12345678901','hospital1','0x4F2d8832aD3E4f1A1905E4481e8fD536e3015051','','',0),
	(4,'李医师','123456','医师','7e20a34b','女','19082310001','hospital2','0x9821ebc6A2354c442B6f0171bF2151A791E3cBc1','','',0);

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
  PRIMARY KEY (`id`),
  KEY `fk_medical_id` (`bind_medical`),
  CONSTRAINT `fk_medical_id` FOREIGN KEY (`bind_medical`) REFERENCES `medical` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 drug_delivery
# ------------------------------------------------------------

DROP TABLE IF EXISTS `drug_delivery`;

CREATE TABLE `drug_delivery` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `drug_id` int unsigned DEFAULT NULL COMMENT '绑定代买药品ID',
  `delivery_certificate` varchar(255) DEFAULT NULL COMMENT '派送凭证',
  `is_receive` tinyint(1) DEFAULT NULL COMMENT '是否收货',
  PRIMARY KEY (`id`),
  KEY `fk_durg_id` (`drug_id`),
  CONSTRAINT `fk_durg_id` FOREIGN KEY (`drug_id`) REFERENCES `drug` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



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
	(1,'cd8565d5','2024-10-02 20:30','12345671901','22c8c28f','在家就医','经常感到头痛',0,0),
	(2,'cd8565d5','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(3,'cd8565d5','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(4,'cd8565d5','2024-10-02 20:30','12345671901','','在家就医','经常感到头痛',0,0),
	(5,'dbb1a0ef','2014-01-01 00:00','19083310001','','在家就医','ssssssssss',0,0),
	(6,'dbb1a0ef','2028-02-01 02:00','19083310001','','社区就医','脑子有病',0,0),
	(7,'dbb1a0ef','2020-01-01 00:00','19083310001','','在家就医','羊癫疯',0,0),
	(8,'dbb1a0ef','2014-01-01 03:00','19083310001','','社区就医','sss',0,0);

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




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
