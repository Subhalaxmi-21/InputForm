-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: postdb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `postinput`
--

DROP TABLE IF EXISTS `postinput`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postinput` (
  `name` varchar(50) NOT NULL,
  `git_repo` varchar(45) NOT NULL,
  `description` longtext,
  `img` longblob,
  PRIMARY KEY (`git_repo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postinput`
--

LOCK TABLES `postinput` WRITE;
/*!40000 ALTER TABLE `postinput` DISABLE KEYS */;
INSERT INTO `postinput` VALUES ('subhalaxmi','abc.git','xx',_binary '{\"image\":null}'),('s','c','C',NULL),('zz','eee','33',_binary '{\"image\":null}'),('kkl','l.mkj','ilj',NULL),('payal','paya.git','zzzz',_binary '{\"image\":null}'),('ds','s','d',NULL),('subh','ss','ff',_binary '{\"image\":null}'),('Subhalaxmi d','ss.git','description',_binary '{\"image\":null}'),('subha','ssss','adwas',NULL),('Subhalaxmi Das','subha.git','zzzz',_binary '{\"image\":null}'),('payal','xs','ss',_binary '{\"image\":null}'),('Subhalaxmi','xx','xxx',_binary '{\"image\":null}'),('Subhalaxmi','xxx.git','zzz',_binary '{\"image\":null}'),('Subham','xyz.git','desc',_binary '{\"image\":null}'),('Subhalaxmi','zz','saa',NULL);
/*!40000 ALTER TABLE `postinput` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-25 17:53:33
