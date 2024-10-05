# ************************************************************
# Sequel Ace SQL dump
# 版本号： 20074
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# 主机: localhost (MySQL 8.0.39)
# 数据库: med_health
# 生成时间: 2024-10-05 07:10:35 +0000
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 drug
# ------------------------------------------------------------

CREATE TABLE `drug` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '代卖ID',
  `patient` varchar(255) DEFAULT NULL COMMENT '患者姓名',
  `physician` varchar(255) DEFAULT NULL COMMENT '医师姓名',
  `hospital` varchar(255) DEFAULT NULL COMMENT '医院名称',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `bind_medical` int DEFAULT NULL COMMENT '绑定病历',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 drug_delivery
# ------------------------------------------------------------

CREATE TABLE `drug_delivery` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `drug_id` int DEFAULT NULL COMMENT '代买药品ID',
  `delivery_certificate` varchar(255) DEFAULT NULL COMMENT '派送凭证',
  `is_receive` tinyint(1) DEFAULT NULL COMMENT '是否收货',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 inquiry
# ------------------------------------------------------------

CREATE TABLE `inquiry` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '问诊ID',
  `patient` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '患者名称',
  `appointment_time` varchar(255) DEFAULT NULL COMMENT '预留时间',
  `reserved_phone` varchar(11) DEFAULT NULL COMMENT '预留电话',
  `physician` varchar(255) DEFAULT NULL COMMENT '指派医师',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '类型',
  `inquiry_detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '问诊描述',
  `sex` varchar(20) DEFAULT NULL COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 medical
# ------------------------------------------------------------

CREATE TABLE `medical` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '病历ID',
  `diagnostic_description` text COMMENT '诊断描述',
  `bind_inquiry_id` int DEFAULT NULL COMMENT '绑定问诊登记ID',
  `inquiry_video` varchar(255) DEFAULT NULL COMMENT '问诊视频',
  `medical_img` varchar(255) DEFAULT NULL COMMENT '病历图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
