/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.5.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: cartnest
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `status` varchar(55) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES
(2,35,'some name','some las name','active','2024-10-05 15:19:54',NULL),
(3,42,'Charles','Kahuho','active','2024-10-25 08:56:56',NULL);
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES
(1,'Balenciaga','2024-10-05 08:47:29',NULL),
(2,'sony','2024-10-05 08:48:27',NULL),
(3,'Huawei','2024-10-05 08:48:40',NULL),
(4,'Samsung','2024-10-05 08:48:47',NULL),
(5,'Apple','2024-10-05 08:48:53',NULL),
(6,'Techno','2024-10-05 08:49:00',NULL),
(7,'Infinix','2024-10-05 08:49:17',NULL),
(8,'Infinix','2024-10-05 13:28:36',NULL),
(9,'Infinix','2024-10-05 13:28:55',NULL),
(10,'Infinix','2024-10-05 13:29:02',NULL),
(11,'Infinix','2024-10-05 13:29:03',NULL),
(12,'Infinix','2024-10-05 13:29:04',NULL),
(13,'Infinix','2024-10-05 13:29:05',NULL),
(14,'Infinix','2024-10-05 13:29:05',NULL),
(15,'Mercedes','2024-10-21 09:04:22',NULL),
(16,'Koinor','2024-10-21 09:06:07',NULL),
(17,'Samsung','2024-10-26 13:35:02',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carted_goods`
--

DROP TABLE IF EXISTS `carted_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carted_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `vendor` int(11) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `added_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `vendor` (`vendor`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `carted_goods_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `carted_goods_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `carted_goods_ibfk_3` FOREIGN KEY (`vendor`) REFERENCES `shops` (`shop_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `carted_goods_ibfk_4` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carted_goods`
--

LOCK TABLES `carted_goods` WRITE;
/*!40000 ALTER TABLE `carted_goods` DISABLE KEYS */;
INSERT INTO `carted_goods` VALUES
(1,36,15,18,17,1,'2024-10-26 13:17:46',NULL),
(2,36,15,18,20,1,'2024-10-26 13:19:27',NULL),
(3,36,19,18,17,1,'2024-10-26 13:49:43',NULL);
/*!40000 ALTER TABLE `carted_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` text DEFAULT NULL,
  `status` text NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES
(17,36,'tech collection','images/big4.jpg','active','2024-10-18 12:36:59',NULL),
(20,36,'School collection','images/box3-2.jpg','active','2024-10-18 19:06:23',NULL),
(22,36,'Tv collection','images/image16.png','active','2024-10-18 19:07:51',NULL),
(25,39,'Starter collection','images/big1.jpg','active','2024-10-20 08:52:08',NULL),
(26,39,'gaming collection','https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg','active','2024-10-22 10:09:31',NULL),
(28,41,'Starter collection','images/big1.jpg','active','2024-10-26 12:37:02',NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `longname` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT 'images/product_img.jpg',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES
(5,'Women','women clothing collection','The best clothes to wear for women 2024 fashionable','images/box2-4.jpg','2024-10-05 13:28:36',NULL),
(12,'Men','Men clothing collection','The best clothes to wear for men 2024 fashionable','images/headphone.png','2024-10-13 11:45:26',NULL),
(13,'Perspiciatis culpa ','Laboris voluptas ill','Nulla Nam quod minim','https://www.lel.com','2024-10-20 11:07:35',NULL),
(14,'Kitchen','Kitchen products good and supplies','Shop everything you need to make your kitchen feely cooky','images/box1-1.jpg','2024-10-20 11:30:21',NULL),
(15,'Phome','Latest phone collection','A collection of recently released phones for everybody','https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBob25lfGVufDB8fDB8fHww','2024-10-24 10:03:47',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES
(7,36,'some name','some las name','2024-10-05 15:20:19',NULL),
(9,38,'some name','some las name','2024-10-20 08:36:00',NULL),
(10,39,'Charles','Kahuho','2024-10-20 08:40:22',NULL),
(11,41,'Kitimba','muthuku','2024-10-24 09:56:26',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `discount_code` text NOT NULL,
  `discount_percentage` decimal(2,2) DEFAULT NULL,
  `valid_from` timestamp NOT NULL,
  `valid_until` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `discount_code` (`discount_code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `vendor` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `status` text DEFAULT 'draft',
  `added_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `vendor` (`vendor`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`vendor`) REFERENCES `shops` (`shop_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `vendor` int(11) DEFAULT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `instock` int(11) NOT NULL DEFAULT 1,
  `main_image` text NOT NULL,
  `trending` text DEFAULT 'no',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `category` (`category`),
  KEY `vendor` (`vendor`),
  KEY `brand` (`brand`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`vendor`) REFERENCES `shops` (`shop_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brand`) REFERENCES `brands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(12,5,2,18,'Tasty Frozen Hat','Vergo vomer vilicus communis. Ducimus adeo aequitas conforto argentum dedecor candidus conscendo. Brevis tutamen comprehendo strues compello civis coadunatio terminatio amplexus toties.',783.00,1,'imagemain.jpg','yes','2024-10-14 07:48:25'),
(13,5,2,18,'Incredible Granite Gloves','Turpis argentum callide coma decens assumenda. Ascisco curatio tametsi vulnus truculenter numquam tactus cognomen. Aestas quae bestia.',159.00,1,'imagemain.jpg','yes','2024-10-14 07:48:27'),
(14,5,2,18,'Rustic Frozen Mouse','Caput volubilis annus. Tero defetiscor commodo cognatus ancilla aestas. Vulnero caelum tremo versus vindico deduco virga auditor aequitas adiuvo.',19.00,1,'imagemain.jpg','yes','2024-10-14 07:48:29'),
(15,5,2,18,'Rustic Bronze Mouse','Umerus adversus vel avaritia ceno vulgus confugo. Administratio accommodo tantillus. Atavus ademptio amet angustus.',203.00,1,'imagemain.jpg','yes','2024-10-14 07:48:32'),
(16,5,2,18,'Modern Plastic Tuna','Agnosco thesaurus voluptatibus artificiose animadverto illo subiungo attero. Reiciendis supra admoneo. Tollo aestivus derideo corpus caelestis eos totus vehemens fuga apostolus.',1.00,1,'imagemain.jpg','yes','2024-10-14 07:48:33'),
(17,5,2,18,'Fantastic Frozen Ball','Delicate defendo verbum cunabula. Bellicus summopere creber villa cupiditate. Aggredior vinitor cibus vos cohaero.',307.00,1,'imagemain.jpg','yes','2024-10-14 07:48:35'),
(18,5,2,18,'Unbranded Steel Salad','Curto quos utique carus delinquo. Censura solio thesis. Sol cimentarius auditor.',417.00,1,'imagemain.jpg','yes','2024-10-14 07:49:37'),
(19,12,2,18,'Incredible Plastic Tuna','Patria usitas pecus dolores suppellex inventore adsidue. Incidunt substantia molestiae assentator cupiditas deinde veritas blanditiis. Tergum casus deporto demoror eligendi unus catena.',447.00,1,'images/product1-2.jpg','yes','2024-10-14 07:53:52'),
(20,12,2,18,'Fantastic Concrete Chicken','Sub veritatis aeternus velut desidero. Adulescens asporto possimus utroque villa. Voluptatibus denego capio curia vicissitudo ipsa natus defendo acerbitas.',945.00,1,'images/product2-2.jpg','yes','2024-10-14 07:54:11'),
(21,12,2,18,'Generic Granite Pizza','Theca universe vester utroque. Summisse calculus vobis cogo animadverto chirographum arceo. Magni curis illum arbustum ustulo triduana sequi mollitia.',818.00,1,'images/product2-6.jpg','yes','2024-10-14 08:01:51'),
(22,12,2,18,'Modern Cotton Keyboard','Celo nostrum coniuratio sto volaticus summisse vesper unde denuncio. Uter neque caelestis paulatim caput utrimque. Sum amet video tandem amita certus textilis cito cetera auditor.',361.00,1,'images/product2-6.jpg','yes','2024-10-14 08:01:58'),
(23,12,2,18,'Elegant Fresh Ball','Subnecto virtus defendo dolores cunabula demonstro damnatio curtus perspiciatis benevolentia. Clamo tempora ab temptatio doloremque varius. Iste credo aliqua celo amicitia stella versus conduco.',451.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:01'),
(24,12,2,18,'Fantastic Steel Tuna','Illo aegre adipisci error tripudio tibi. Cimentarius concedo chirographum denuo supplanto crepusculum cras terebro decor. Vis compello excepturi praesentium adimpleo quo tantillus patrocinor alias culpa.',649.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:02'),
(25,12,2,18,'Bespoke Granite Pizza','Casso vigor possimus tandem varius ventosus comprehendo. Tactus aperiam beneficium volaticus defendo dolorum. Admoveo consequatur defero balbus sto candidus praesentium strues absum dapifer.',741.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:04'),
(26,12,2,18,'Handmade Bronze Pizza','Tutis vomer desipio. Ciminatio vulgaris vulnero acidus conscendo. Curvo talus tot defaeco avaritia.',574.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:05'),
(27,12,2,18,'Sleek Cotton Keyboard','Voco adulescens veniam audax stultus denego dedico cedo vitium vita. Vulariter tonsor ab thermae bos calco creator maxime. Labore stella admoneo vorago attonbitus dolores venustas abbas vergo deputo.',417.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:07'),
(28,12,2,18,'Handcrafted Concrete Fish','Conspergo ademptio vigor cresco corrigo cunae. Ambitus aer conatus canis. Urbs caecus velum dolorem crur paulatim.',688.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:08'),
(29,12,2,18,'Practical Soft Chicken','Vomica caveo aedificium. Impedit acies depromo dicta catena maiores. Coadunatio ad sapiente audeo asperiores.',974.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:10'),
(30,12,2,18,'Handcrafted Concrete Cheese','Patria quibusdam calculus adeo est. Libero deprecator arma. Auctus theatrum annus spectaculum in asporto.',996.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:11'),
(31,12,2,18,'Modern Cotton Pizza','Pauci undique vitae callide dens veritatis itaque una umerus. Talis vesica tunc admiratio arto caelestis. Occaecati timor cursim tyrannus odio.',338.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:13'),
(32,12,2,18,'Electronic Steel Towels','Adduco sperno cuius pariatur delinquo argumentum amaritudo cunabula optio velociter. Conforto ambitus suasoria. Cohors vomito nisi validus appello textus vobis.',960.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:14'),
(33,12,2,18,'Unbranded Frozen Salad','Adeptio calculus dignissimos arcus calco amicitia arceo campana conforto culpo. Ex desolo cogo considero teneo chirographum beneficium cunabula cupiditate. Combibo angustus synagoga timidus studio.',113.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:16'),
(34,12,2,18,'Generic Frozen Tuna','Vel ara casus aperiam apostolus. Admoveo velut carbo vere solium censura trans labore qui celo. Desidero facilis venio dolorum admitto vita defendo adfectus aperio confido.',911.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:17'),
(35,12,2,18,'Gorgeous Steel Chips','Trucido spoliatio compono audentia libero vitae validus. Repudiandae ea vetus vereor ante verumtamen amiculum. Consequatur coma verto aggredior debitis derelinquo.',930.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:19'),
(36,12,2,18,'Elegant Granite Chair','Cupiditas crastinus verecundia cupressus architecto cernuus. Sto eius stella constans coepi ipsum speculum censura coma. Denuncio defetiscor corrumpo beatae.',113.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:20'),
(37,12,2,18,'Handmade Concrete Bike','Cognomen caute defessus. Cinis admiratio verbera cornu tenax ciminatio. Depraedor acsi admoveo vulgus pecco.',895.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:21'),
(38,12,2,18,'Oriental Plastic Pizza','Terebro sub creo censura laboriosam conspergo tubineus pecus uxor patruus. Crustulum vinum deleniti textus videlicet bos cruentus sordeo. Velut usitas territo claudeo universe est cupiditate doloribus deporto cornu.',429.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:23'),
(39,12,2,18,'Rustic Granite Gloves','Textus pectus vinitor est textilis tergo id sint aptus. Cogito speculum somnus. Color timor triumphus tolero denuncio angelus terebro.',918.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:24'),
(40,12,2,18,'Handmade Granite Pants','Eligendi esse vulticulus ancilla. Aeger tribuo velut maxime trepide aiunt degusto ustulo vado pauci. Sol caecus nemo.',559.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:26'),
(41,12,2,18,'Gorgeous Frozen Chair','Spoliatio absconditus temptatio voluptas torqueo defetiscor molestiae aedificium. Subnecto vinitor clibanus arceo acervus aufero. Delectus volo annus suggero tum crapula confido appello clibanus.',323.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:27'),
(42,12,2,18,'Awesome Granite Chips','Blanditiis tenax occaecati. Amplexus atque comedo textor adopto. Quia tergeo vir ara animadverto nemo viriliter.',660.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:29'),
(43,12,2,18,'Ergonomic Plastic Towels','Acquiro acsi deprimo speculum creptio truculenter adstringo viduo bellum. Utor caries vulgaris virtus surgo amoveo sublime molestias aequitas aggredior. Totidem vespillo defessus appello clibanus vulgivagus amissio triumphus illo.',309.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:31'),
(44,12,2,18,'Handcrafted Cotton Gloves','Praesentium caste ater aufero. Ulterius caelestis auctor taceo. Quis vobis crebro.',835.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:34'),
(45,12,2,18,'Handmade Fresh Bike','Magni et cras concedo vis vado amiculum aptus. Arma degusto aqua attero tabula pauper collum benigne uterque totam. Solio circumvenio comminor audentia correptius abduco conatus.',438.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:36'),
(46,12,2,18,'Bespoke Metal Pants','Ipsam utique comminor voluptates patior crustulum bibo absorbeo. Angustus alii suppellex tredecim tot. Cibus censura calco cras antiquus dicta aurum decet speciosus viduo.',590.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:38'),
(47,12,2,18,'Bespoke Granite Keyboard','Vita amet claustrum tamdiu impedit. Claudeo conduco acquiro. Bonus utrum varius autem crustulum.',16.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:40'),
(48,12,2,18,'Tasty Rubber Soap','Laborum error absens allatus canto occaecati cogito. Deludo cito in claudeo. Claudeo cado auctor suppono ustilo condico iure careo.',947.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:41'),
(49,12,2,18,'Recycled Steel Fish','Viduo cognomen beatae bellum aestivus vulgaris. Turpis capitulus spectaculum aptus agnitio paens ocer mollitia surgo. Crastinus sol vehemens.',803.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:43'),
(50,12,2,18,'Handcrafted Concrete Chair','Vomer territo sopor certe armarium atrocitas tunc. Culpa sapiente cubitum tres. Tenuis perspiciatis absorbeo sollicito agnosco cuppedia careo testimonium ait damno.',194.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:45'),
(51,12,2,18,'Generic Plastic Soap','Sto id sono delicate voco temperantia suggero armarium dolore xiphias. Distinctio sed apto absorbeo harum. Cavus ulterius carcer tamquam utor.',526.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:47'),
(52,12,2,18,'Gorgeous Metal Towels','Ager causa vetus ad clibanus ulciscor abscido pecco. Tergo ducimus cometes ea. Defendo subito tergeo adiuvo vito.',836.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:49'),
(53,12,2,18,'Generic Soft Shoes','Aequus comprehendo aperio vaco facere amissio curtus. Thema tener defessus angustus. Speculum communis utrimque quo minima ultra curriculum abeo.',112.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:50'),
(54,12,2,18,'Practical Bronze Hat','Demum campana vorago apostolus arceo absens triduana facilis somnus curso. Torqueo deduco dens laboriosam deludo. Carmen denique crux concido.',425.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:52'),
(55,12,2,18,'Elegant Frozen Table','Vesco calamitas appono defleo aggero coaegresco quae. Sum territo curatio truculenter ager trans atqui sublime illum. Eius venio depopulo taedium coadunatio comes vulgaris tergo acerbitas.',603.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:54'),
(56,12,2,18,'Rustic Frozen Bacon','Turpis speculum subiungo bestia umerus non vero ut templum. Comparo occaecati hic. Aut tempus decimus crapula demulceo administratio nihil bellum virgo voluptatibus.',209.00,1,'images/product2-6.jpg','yes','2024-10-14 08:02:56'),
(57,12,2,18,'Rustic Rubber Tuna','Callide vulnero ars nam validus. Texo somniculosus damnatio copia. Spectaculum alter voluptatem odio molestias coadunatio dens.',213.00,1,'images/product2-9.jpg','yes','2024-10-14 08:03:01'),
(58,5,2,18,'Generic Wooden Car','Cetera aperiam dedico vindico clarus vinum cenaculum. Conatus quibusdam tollo saepe in demum. Credo necessitatibus absconditus claudeo concido nobis subnecto adsum coruscus.',840.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:31'),
(59,5,2,18,'Sleek Metal Hat','Arcus temeritas summisse venustas solitudo annus vehemens comptus. Explicabo custodia voluptatem. Thema angustus subnecto vomica cubicularis adinventitias.',907.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:33'),
(60,5,2,18,'Handcrafted Wooden Fish','Aperiam voveo delibero nisi certus. Currus verecundia appello certe ducimus. Carbo denego coepi thorax volubilis audax comptus tam.',724.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:35'),
(61,5,2,18,'Electronic Plastic Bike','Id soluta subseco celer inventore careo sollicito. Comprehendo sto cribro quam excepturi statua labore coaegresco. Decretum debeo tunc alienus combibo conitor convoco volaticus conventus.',665.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:36'),
(62,5,2,18,'Electronic Metal Hat','Uter minus sublime approbo adficio conor cuppedia. Vulariter molestiae accendo nesciunt minima curriculum adfectus calculus. Ascit accommodo acervus vereor vir conscendo.',361.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:39'),
(63,5,2,18,'Awesome Cotton Shirt','Suffoco contra armarium. Nesciunt balbus suppono tyrannus amor. Magni delego cogo aggero officiis.',857.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:40'),
(64,5,2,18,'Modern Granite Computer','Utpote demulceo advoco civitas administratio vita terebro aeternus. Distinctio deleo tantillus barba succurro voluptatem succedo calamitas tamisium. Rerum ver tener reiciendis stipes labore caute amoveo.',645.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:42'),
(65,5,2,18,'Bespoke Frozen Car','Censura texo vinculum valde valde viriliter aperiam aperiam. Tripudio comprehendo cohaero suscipit tempora curvo vester. Utilis minima contego pax accedo cogo illo terebro chirographum.',717.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:45'),
(66,5,2,18,'Gorgeous Steel Tuna','Sustineo colo admoveo temeritas suadeo. Vereor surculus appono. Copia tutamen articulus sodalitas aliqua terror uter alo theologus nemo.',645.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:46'),
(67,5,2,18,'Practical Wooden Gloves','Tabula summisse ulterius aestas aufero exercitationem. Appono viriliter templum. Tristis tergeo eaque curvo ancilla conor.',846.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:48'),
(68,5,2,18,'Modern Concrete Soap','Adipisci impedit victoria conduco clam depulso ullus accedo voro adipisci. Dignissimos creta strenuus. Cenaculum alveus vestigium.',598.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:50'),
(69,5,2,18,'Handmade Plastic Hat','Aegrus vado conscendo auditor nam crustulum dicta. Ager vilicus caries undique. Clamo quibusdam conspergo dolorum circumvenio.',110.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:52'),
(70,5,2,18,'Refined Granite Chair','Spectaculum speculum suscipit illum fuga voluptatem. Demum candidus auctus adulescens atrox territo asporto suadeo. Adsidue tactus paens cunabula suppono avaritia vicinus ambitus.',834.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:53'),
(71,5,2,18,'Intelligent Rubber Car','Arcus ullam verbera. Fugiat acer demens celebrer tenus quibusdam. Patrocinor aliquam chirographum desidero ex.',274.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:55'),
(72,5,2,18,'Small Soft Towels','Crepusculum traho peior curia adflicto calco absorbeo defaeco. Nisi soluta verbum conforto solium adinventitias suscipio. Vomica deficio cursim.',157.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:57'),
(73,5,2,18,'Incredible Plastic Gloves','Consequatur considero tardus vitiosus comprehendo circumvenio. Decerno angelus adeo animadverto careo solvo iure. Censura amicitia ducimus paens.',628.00,1,'images/product2-1.jpg','yes','2024-10-14 08:03:58'),
(74,5,2,18,'Unbranded Fresh Soap','Adsum amplitudo comedo. Vitium suffragium caries repudiandae rerum antea vesco recusandae cur. Textor doloribus conservo.',618.00,1,'images/product2-1.jpg','yes','2024-10-14 08:04:01'),
(75,5,2,18,'Practical Steel Chicken','Bos cui dedico aveho aequitas stella ex succurro acer credo. Velum creber curia pauper voluntarius talus conatus. Cotidie celebrer caterva cito validus socius sustineo.',184.00,1,'images/product2-1.jpg','yes','2024-10-14 10:57:44'),
(76,5,2,18,'Elegant Bronze Bacon','Aspicio textor aegrus. Decens calcar alo. Laudantium succedo defleo vulgaris calculus.',27.00,1,'https://loremflickr.com/640/480/business?lock=4566018902982656','yes','2024-10-14 10:58:36'),
(77,5,2,18,'Tasty Wooden Chicken','Solus speciosus socius socius defluo chirographum despecto tabgo solus. Barba surgo centum adulatio uberrime voluptate beatus conservo temperantia vapulus. Suffragium solio trans sollicito super patrocinor aestus quasi caelum.',391.00,1,'https://loremflickr.com/640/480/business?lock=691309824180224','yes','2024-10-14 10:58:37'),
(78,5,2,18,'Unbranded Rubber Hat','Cubicularis aurum dapifer. Provident crur strues torrens eligendi annus candidus denique. Celebrer defleo contabesco.',369.00,1,'https://loremflickr.com/640/480/business?lock=4718199301996544','yes','2024-10-14 10:58:42'),
(79,5,2,18,'Oriental Cotton Bacon','Sono conforto ab. Tego careo vulgus audio triumphus aperiam aequus utor deserunt. Ullam cornu torqueo.',466.00,1,'https://loremflickr.com/640/480/business?lock=6557091336552448','yes','2024-10-14 10:58:45'),
(80,5,2,18,'Ergonomic Soft Ball','Iusto sortitus volubilis terra. Adeptio depraedor comptus artificiose minus. Coerceo dapifer pauper coepi sperno atrox voluptatem angulus cupiditate.',516.00,1,'https://loremflickr.com/640/480/business?lock=4734262139944960','yes','2024-10-14 10:58:49'),
(81,5,2,18,'Practical Cotton Mouse','Desipio tergiversatio vestrum corona. Tredecim accedo vulnus conduco vorax baiulus alo. Aranea officiis vulnus coaegresco coma.',222.00,1,'https://loremflickr.com/640/480/business?lock=3485847458414592','yes','2024-10-14 10:58:52'),
(82,5,2,18,'Fantastic Soft Salad','Sui conduco deleniti bis quibusdam vorax. Confugo ago desidero cognomen careo aperiam trepide arca cogo volup. Quos crux compono repellendus truculenter aperiam accusamus charisma.',639.00,1,'https://loremflickr.com/640/480/business?lock=7019694439530496','yes','2024-10-14 10:58:56'),
(83,5,2,18,'Handmade Concrete Tuna','Aegrus tenus venia vilitas curto tonsor. Alii tabernus constans territo vado crinis tempore consectetur tenax tracto. Consectetur nulla thesis.',330.00,1,'https://loremflickr.com/640/480/business?lock=4300016589996032','yes','2024-10-14 10:58:59'),
(84,5,2,18,'Generic Wooden Shirt','Callide despecto circumvenio. Corroboro demergo sublime cariosus mollitia incidunt vulnus patria artificiose aggero. Aperiam arbustum audeo ambulo.',971.00,1,'https://loremflickr.com/640/480/business?lock=267076335828992','yes','2024-10-14 10:59:03'),
(85,5,2,18,'Electronic Frozen Chicken','Tredecim tersus infit. Aestivus volubilis allatus dolorum volutabrum considero. Turbo armarium color suus.',510.00,1,'https://loremflickr.com/640/480/business?lock=1354077436903424','yes','2024-10-14 10:59:06'),
(86,5,2,18,'Gorgeous Concrete Hat','Non via aeger titulus administratio capto textor adulatio. Cui solio uterque uxor. Ars patior vox.',899.00,1,'https://loremflickr.com/640/480/business?lock=6075203564077056','yes','2024-10-14 10:59:10'),
(87,5,2,18,'Refined Frozen Computer','Canonicus velum depraedor verus denique delectus turbo laborum ambulo cognatus. Venio aro bibo. Arto vivo cetera subiungo deleo neque debitis audio.',95.00,1,'https://loremflickr.com/640/480/business?lock=918261285781504','yes','2024-10-14 10:59:13'),
(88,5,2,18,'Tasty Wooden Chips','Auxilium eum solum aspernatur creator. Civis vilicus somniculosus color alveus urbanus ventus cohibeo. Adversus vigilo sordeo vulgus vilicus dignissimos verto ventosus triumphus aegre.',417.00,1,'https://loremflickr.com/640/480/business?lock=6176014885453824','yes','2024-10-14 10:59:18'),
(89,5,2,18,'Fantastic Wooden Shirt','Ager triumphus adeo acidus tenax clam abundans. Tego accedo ducimus volaticus tenax supra caput sortitus. Approbo denuo sortitus apparatus sunt sint alioqui arca volaticus denuncio.',535.00,1,'https://loremflickr.com/640/480/business?lock=7868552566538240','yes','2024-10-14 10:59:22'),
(90,5,2,18,'Bespoke Soft Mouse','Volutabrum atrox coepi desparatus conatus ullam aequitas bonus apparatus acsi. Vilicus thymum dens vox urbs. Curatio impedit cogito aptus congregatio solus molestias.',147.00,1,'https://loremflickr.com/640/480/business?lock=1084713137602560','yes','2024-10-14 10:59:26'),
(91,5,2,18,'Handcrafted Concrete Bike','Vado strenuus adficio vix auditor asper depereo vulgus barba carpo. Comitatus demo tabella aggero totam collum talio. Ulterius vita vomica undique adopto veniam credo abbas.',282.00,1,'https://loremflickr.com/640/480/business?lock=6515818898653184','yes','2024-10-14 10:59:29'),
(92,5,2,18,'Luxurious Bronze Sausages','Trucido dolorum adipisci decerno venustas. Subseco corrigo sponte harum aeneus voluptates attonbitus causa demonstro. Thema vomer condico.',503.00,1,'https://loremflickr.com/640/480/business?lock=1395831693377536','yes','2024-10-14 10:59:33'),
(93,5,2,18,'Modern Rubber Cheese','Voluptatem corona atrocitas thema audacia. Vereor aer conduco saepe cinis subvenio statim conitor anser cuppedia. Nulla sodalitas curto veritas.',234.00,1,'https://loremflickr.com/640/480/business?lock=1818801756700672','yes','2024-10-14 10:59:37'),
(94,5,2,18,'Oriental Metal Hat','Defero calamitas crudelis clamo chirographum creator. Tersus depereo amita adicio tibi dedico adeptio traho. Curto sub facere civitas aduro adsuesco aegrus.',261.00,1,'https://loremflickr.com/640/480/business?lock=5367787453153280','yes','2024-10-14 10:59:40'),
(95,5,2,18,'Practical Rubber Sausages','Bis iusto decimus quo conitor. Vis cunctatio tristis videlicet timidus. Admiratio clibanus tutis adaugeo ab carbo.',317.00,1,'https://loremflickr.com/640/480/business?lock=5134628553752576','yes','2024-10-14 10:59:44'),
(96,5,2,18,'Tasty Frozen Bacon','Arca ago tolero. Sono atqui impedit vilicus cogito adaugeo ustulo canto voluptates. Thermae vestigium auditor dolorem sui coniuratio acies dens stella cursus.',944.00,1,'https://loremflickr.com/640/480/business?lock=5750395984936960','yes','2024-10-14 10:59:47'),
(97,12,3,18,'Bespoke Wooden Table','Vilis stips vulticulus theatrum accommodo custodia. Virtus sub advoco pariatur. Bis tantillus vulariter conservo tabesco antea caries dedico.',525.00,1,'https://loremflickr.com/640/480/business?lock=5934752093700096','no','2024-10-14 10:59:59'),
(98,12,3,18,'Sleek Wooden Bacon','Cur adstringo caritas molestiae alveus tolero. Cunctatio uredo impedit sortitus. Appello stillicidium verto succurro sollers consequatur civis.',859.00,1,'https://loremflickr.com/640/480/business?lock=5593837950992384','no','2024-10-14 11:02:13'),
(99,12,3,18,'Recycled Granite Computer','Colo ambitus corrumpo. Acer alo deserunt summopere adfero crepusculum tabesco arceo. Uxor coaegresco adulescens urbanus verto pecus carmen voluptas quia.',610.00,1,'https://loremflickr.com/640/480/business?lock=7705971767902208','no','2024-10-14 11:02:14'),
(100,12,3,18,'Refined Steel Computer','Clementia recusandae voluptas laborum cado appono compello carpo adsum. Pectus timor sopor usitas conqueror clam fugit urbanus blandior. Magnam comedo assumenda cohors suus admiratio quos velociter asporto ventus.',140.00,1,'https://loremflickr.com/640/480/business?lock=3919262410342400','no','2024-10-14 11:02:15'),
(101,12,3,18,'Generic Soft Tuna','Chirographum tondeo sit. Ventosus ambulo strues ullus absum repudiandae pauper strenuus veniam complectus. Adsum spiritus consequuntur curis conventus depopulo esse patruus.',461.00,1,'https://loremflickr.com/640/480/business?lock=7253208713920512','no','2024-10-14 11:02:16'),
(102,12,3,18,'Awesome Fresh Keyboard','Curiositas perspiciatis tergeo ambitus dolorum tenuis tam custodia. Cauda voco bos vereor dedecor apostolus capillus utique. Defetiscor talio vespillo fugit adfero perferendis.',171.00,1,'https://loremflickr.com/640/480/business?lock=7974628299374592','no','2024-10-14 11:02:17'),
(103,12,3,18,'Unbranded Plastic Chips','Praesentium alter amplexus. Cribro spes caritas virtus bardus arma paulatim demo. Provident doloremque studio allatus officiis numquam corrumpo doloremque.',711.00,1,'https://loremflickr.com/640/480/business?lock=8401397561163776','no','2024-10-14 11:02:18'),
(104,12,3,18,'Bespoke Frozen Sausages','Aestivus usque curia textilis conscendo thema termes cotidie patria. Ventosus xiphias clam terga occaecati cunabula praesentium thalassinus careo. Cursus color valetudo vester eius volo vociferor.',927.00,1,'https://loremflickr.com/640/480/business?lock=628801794998272','no','2024-10-14 11:02:19'),
(105,12,3,18,'Refined Bronze Fish','Virgo totam canis ex claro adulescens cursim stips. Accommodo beatus peior. Vere tardus bestia theca tres.',958.00,1,'https://loremflickr.com/640/480/business?lock=6390465433698304','no','2024-10-14 11:02:20'),
(106,12,3,18,'Practical Metal Table','Adipiscor ubi solutio texo adduco amplitudo. Currus colligo copia quam termes. Id aequitas amet solio sunt dedecor adsuesco cito deprecator harum.',865.00,1,'https://loremflickr.com/640/480/business?lock=360861950541824','no','2024-10-14 11:02:21'),
(107,12,3,18,'Fantastic Granite Cheese','Confido tres caelestis spiritus tracto cito ulciscor deduco ait peccatus. Caterva victus illum tondeo cunae comitatus viridis curia. Accommodo dignissimos conitor una despecto rem.',583.00,1,'https://loremflickr.com/640/480/business?lock=5748696517967872','no','2024-10-14 11:02:23'),
(108,12,3,18,'Small Frozen Shoes','Autem vel appello curvo adversus. Quibusdam canonicus spiculum trucido quae socius thema testimonium cultellus. Culpa cum cruentus vulgivagus abscido.',32.00,1,'https://loremflickr.com/640/480/business?lock=3582459897708544','no','2024-10-14 11:02:24'),
(109,12,3,18,'Gorgeous Concrete Towels','Audax pauper undique at urbs. Corpus stabilis vulgus credo ademptio collum nihil. Aeneus censura veritas claudeo bibo.',696.00,1,'https://loremflickr.com/640/480/business?lock=8132614906970112','no','2024-10-14 11:02:26'),
(110,12,3,18,'Fantastic Rubber Tuna','Velum celer strues debeo. Cultellus derideo abutor atrocitas minima laboriosam blanditiis caste. Bene voluptate accedo audacia turbo.',4.00,1,'https://loremflickr.com/640/480/business?lock=8304926222450688','no','2024-10-14 11:02:27'),
(111,12,3,18,'Intelligent Wooden Bacon','Comminor cernuus suppono adficio demoror venio conitor. Sub tracto desidero carus tamquam acsi apto compello est. Viduo voluntarius advenio vobis solvo carbo.',55.00,1,'https://loremflickr.com/640/480/business?lock=6940471383293952','no','2024-10-14 11:02:28'),
(112,12,3,18,'Small Cotton Ball','Vomer curriculum aliquam adversus deleniti suasoria avarus varius voluptatibus vis. Utilis commodo attonbitus tabernus caelum vorago utique civis non odio. Video atrocitas nisi non canis.',741.00,1,'https://loremflickr.com/640/480/business?lock=8394725117657088','no','2024-10-14 11:02:28'),
(113,12,3,18,'Handcrafted Cotton Gloves','Amplexus damno tandem tergum omnis valde nostrum demitto aqua. Arbitro compono angulus aegrotatio. Explicabo creber censura validus decet depopulo arcus vacuus ciminatio aufero.',724.00,1,'https://loremflickr.com/640/480/business?lock=265598403608576','no','2024-10-14 11:02:29'),
(114,12,3,18,'Rustic Rubber Shoes','Voluptatum conspergo complectus. Dolor cervus mollitia iure quam speciosus. Ad vomica artificiose umbra.',635.00,1,'https://loremflickr.com/640/480/business?lock=5589999569338368','no','2024-10-14 11:02:30'),
(115,12,3,18,'Intelligent Wooden Bike','Arbustum clam caelum. Coerceo cinis tremo. Utpote in victus patria adeo convoco ventito.',679.00,1,'https://loremflickr.com/640/480/business?lock=8121653986852864','no','2024-10-14 11:02:31'),
(116,12,3,18,'Ergonomic Cotton Table','Cauda absorbeo corrumpo crebro cresco strues texo fuga. Adficio porro claro verus aperiam. Vilicus valens tempore.',413.00,1,'https://loremflickr.com/640/480/business?lock=2944661649883136','no','2024-10-14 11:02:32'),
(117,12,3,18,'Modern Concrete Keyboard','Audeo carbo laudantium desolo. Termes sollicito succedo sono depereo amaritudo dolore. Celo absorbeo defleo verbum eveniet acies adflicto.',478.00,1,'https://loremflickr.com/640/480/business?lock=1806274721218560','no','2024-10-14 11:02:34'),
(118,12,3,18,'Intelligent Metal Fish','Quod acquiro explicabo tergeo triduana adfectus. Ademptio termes voco corrumpo fugiat cenaculum quo. Custodia surgo carmen tres supellex vicissitudo.',344.00,1,'https://loremflickr.com/640/480/business?lock=8840269319372800','no','2024-10-14 11:02:36'),
(119,12,3,18,'Oriental Wooden Salad','Cultellus arbor voluntarius appositus speculum doloremque stabilis pecus terra. Aeger verus desolo ocer calculus spiritus. Toties supplanto curtus adicio magni thesaurus coniuratio dicta theatrum stipes.',377.00,1,'https://loremflickr.com/640/480/business?lock=8893608736325632','no','2024-10-14 11:02:37'),
(120,12,3,18,'Tasty Frozen Fish','Asperiores porro unde candidus dapifer suppellex. Adfectus clibanus adfectus vivo audentia vorax derelinquo ab studio. Super bardus defetiscor cilicium contra vivo titulus audax ater.',939.00,1,'https://loremflickr.com/640/480/business?lock=8966538451222528','no','2024-10-14 11:02:38'),
(121,12,3,18,'Ergonomic Fresh Shirt','Talus aro tyrannus cattus commodi iusto debilito cupiditate armarium vilicus. Venustas depono aqua usus apparatus defaeco. At crudelis ustilo caelestis tergeo conqueror creptio.',124.00,1,'https://loremflickr.com/640/480/business?lock=3566288473423872','no','2024-10-14 11:02:40'),
(122,12,3,18,'Generic Bronze Chips','Vel illo attollo volaticus convoco speciosus amaritudo surculus. Vobis eum clamo excepturi condico. Sollers ubi tricesimus harum dolorem.',693.00,1,'https://loremflickr.com/640/480/business?lock=4650507652038656','no','2024-10-14 11:02:41'),
(123,12,3,18,'Gorgeous Metal Tuna','Tepesco nihil sequi varius trans pecco curso amplexus spiculum volup. Synagoga sequi vereor recusandae cupressus complectus acies amicitia tempora crux. Vindico tutis degero corrumpo coaegresco valeo verecundia somniculosus.',781.00,1,'https://loremflickr.com/640/480/business?lock=604914900271104','no','2024-10-14 11:02:43'),
(124,12,3,18,'Ergonomic Cotton Pants','Angulus aqua taedium. Absconditus canis artificiose cotidie antepono vereor. Vindico comes decens confugo.',662.00,1,'https://loremflickr.com/640/480/business?lock=8015480879054848','no','2024-10-14 11:02:44'),
(125,12,3,18,'Electronic Fresh Mouse','Derideo uter aetas. Cibus convoco demitto caries coadunatio valens cohaero. Molestiae vulgus timidus acidus.',392.00,1,'https://loremflickr.com/640/480/business?lock=5238012124332032','no','2024-10-14 11:02:45'),
(126,12,3,18,'Handcrafted Cotton Towels','Bis atrocitas nulla rem inventore vae balbus cetera. Alter deripio deinde cupiditas. Adhuc in somniculosus certe basium titulus tibi.',541.00,1,'https://loremflickr.com/640/480/business?lock=817401232883712','no','2024-10-14 11:02:46'),
(127,12,3,18,'Modern Concrete Mouse','Stillicidium texo ipsam amet eum abeo abduco vinum demonstro debeo. Defungo coadunatio patria. Unde id cometes crux asporto atrox thermae dens.',954.00,1,'https://loremflickr.com/640/480/business?lock=2787160316968960','no','2024-10-14 11:02:47'),
(128,12,3,18,'Sleek Granite Towels','Qui deserunt absorbeo demitto neque. Contabesco damno vitiosus acsi velit utroque circumvenio terebro. Decimus vapulus usque comburo demergo astrum tenus.',742.00,1,'https://loremflickr.com/640/480/business?lock=7708894444912640','no','2024-10-14 11:02:48'),
(129,12,3,18,'Tasty Wooden Fish','Tam agnosco repellat cervus. Desipio utique solio cruentus suadeo eveniet. Depulso vilicus cupiditate stipes vox vel nobis templum cena.',184.00,1,'https://loremflickr.com/640/480/business?lock=4946329109266432','no','2024-10-14 11:02:49'),
(130,15,7,23,'Context phone 101','A good phone for use cheap and affordable',221.00,345,'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBob25lfGVufDB8fDB8fHww','no','2024-10-24 10:12:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_info`
--

DROP TABLE IF EXISTS `products_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `tags` longtext DEFAULT NULL CHECK (json_valid(`tags`)),
  `other_images` longtext DEFAULT NULL CHECK (json_valid(`other_images`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `products_info_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_info`
--

LOCK TABLES `products_info` WRITE;
/*!40000 ALTER TABLE `products_info` DISABLE KEYS */;
INSERT INTO `products_info` VALUES
(1,4,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:45:48'),
(2,5,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:45:58'),
(3,6,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:07'),
(4,7,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:11'),
(5,8,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:15'),
(6,9,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:18'),
(7,10,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:22'),
(8,11,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:46:25'),
(9,12,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:25'),
(10,13,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:27'),
(11,14,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:30'),
(12,15,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:32'),
(13,16,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:33'),
(14,17,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:48:35'),
(15,18,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"image1.jpg\",\"image2.jpg\",\"image3.jpg\"]}','2024-10-14 07:49:37'),
(16,19,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product1-4.jpg\",\"images/product1-3.jpg\",\"images/product1-1.jpg\"]}','2024-10-14 07:53:52'),
(17,20,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 07:54:11'),
(18,21,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:01:51'),
(19,22,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:01:58'),
(20,23,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:01'),
(21,24,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:02'),
(22,25,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:04'),
(23,26,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:05'),
(24,27,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:07'),
(25,28,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:08'),
(26,29,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:10'),
(27,30,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:11'),
(28,31,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:13'),
(29,32,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:14'),
(30,33,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:16'),
(31,34,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:17'),
(32,35,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:19'),
(33,36,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:20'),
(34,37,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:21'),
(35,38,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:23'),
(36,39,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:24'),
(37,40,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:26'),
(38,41,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:27'),
(39,42,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:29'),
(40,43,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:32'),
(41,44,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:35'),
(42,45,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:37'),
(43,46,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:38'),
(44,47,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:40'),
(45,48,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:42'),
(46,49,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:43'),
(47,50,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:45'),
(48,51,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:47'),
(49,52,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:49'),
(50,53,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:50'),
(51,54,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:52'),
(52,55,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:54'),
(53,56,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:02:56'),
(54,57,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:02'),
(55,58,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:32'),
(56,59,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:33'),
(57,60,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:35'),
(58,61,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:37'),
(59,62,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:39'),
(60,63,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:41'),
(61,64,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:42'),
(62,65,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:45'),
(63,66,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:47'),
(64,67,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:48'),
(65,68,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:50'),
(66,69,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:52'),
(67,70,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:54'),
(68,71,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:55'),
(69,72,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:57'),
(70,73,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:03:59'),
(71,74,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 08:04:02'),
(72,75,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:57:44'),
(73,76,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:36'),
(74,77,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:37'),
(75,78,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:42'),
(76,79,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:45'),
(77,80,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:49'),
(78,81,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:52'),
(79,82,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:56'),
(80,83,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:58:59'),
(81,84,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:03'),
(82,85,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:06'),
(83,86,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:10'),
(84,87,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:14'),
(85,88,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:18'),
(86,89,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:22'),
(87,90,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:26'),
(88,91,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:29'),
(89,92,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:33'),
(90,93,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:37'),
(91,94,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:40'),
(92,95,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:44'),
(93,96,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:48'),
(94,97,'{\"tags\":[\"new\",\"trending\",\"pricy\"]}','{\"other_images\":[\"images/product2-4.jpg\",\"images/product2-3.jpg\",\"images/product2-1.jpg\"]}','2024-10-14 10:59:59'),
(95,98,'{\"tags\":[\"new\",\"platforms\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/RM892be/640/480\",\"https://loremflickr.com/640/480?lock=8003755618336768\",\"https://loremflickr.com/640/480?lock=4300359658897408\"]}','2024-10-14 11:02:13'),
(96,99,'{\"tags\":[\"new\",\"platforms\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=6508096396460032\",\"https://picsum.photos/seed/3foZMz/640/480\",\"https://loremflickr.com/640/480?lock=1885816787828736\"]}','2024-10-14 11:02:14'),
(97,100,'{\"tags\":[\"new\",\"systems\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=8631702997958656\",\"https://picsum.photos/seed/s4X1v3/640/480\",\"https://picsum.photos/seed/MCQTM/640/480\"]}','2024-10-14 11:02:15'),
(98,101,'{\"tags\":[\"new\",\"mindshare\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=4498239663374336\",\"https://picsum.photos/seed/raSghymMCS/640/480\",\"https://loremflickr.com/640/480?lock=7640752960045056\"]}','2024-10-14 11:02:16'),
(99,102,'{\"tags\":[\"new\",\"paradigms\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=6858963370901504\",\"https://loremflickr.com/640/480?lock=6802191067119616\",\"https://picsum.photos/seed/ifpLLD5c/640/480\"]}','2024-10-14 11:02:17'),
(100,103,'{\"tags\":[\"new\",\"portals\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=4754360296800256\",\"https://picsum.photos/seed/XN2bmBHPo/640/480\",\"https://loremflickr.com/640/480?lock=621343007571968\"]}','2024-10-14 11:02:18'),
(101,104,'{\"tags\":[\"new\",\"eyeballs\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/CLIyOD/640/480\",\"https://loremflickr.com/640/480?lock=8991232931921920\",\"https://picsum.photos/seed/62n6M/640/480\"]}','2024-10-14 11:02:19'),
(102,105,'{\"tags\":[\"new\",\"portals\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=200619851776\",\"https://loremflickr.com/640/480?lock=4360959894224896\",\"https://loremflickr.com/640/480?lock=4934607946383360\"]}','2024-10-14 11:02:20'),
(103,106,'{\"tags\":[\"new\",\"metrics\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=46274168487936\",\"https://picsum.photos/seed/HlFwY/640/480\",\"https://loremflickr.com/640/480?lock=914870113402880\"]}','2024-10-14 11:02:21'),
(104,107,'{\"tags\":[\"new\",\"platforms\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/NczPHv/640/480\",\"https://loremflickr.com/640/480?lock=5032957716725760\",\"https://picsum.photos/seed/PrM0XuF7/640/480\"]}','2024-10-14 11:02:23'),
(105,108,'{\"tags\":[\"new\",\"technologies\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/ENdTulBR/640/480\",\"https://loremflickr.com/640/480?lock=4702158486241280\",\"https://loremflickr.com/640/480?lock=5834797341474816\"]}','2024-10-14 11:02:25'),
(106,109,'{\"tags\":[\"new\",\"relationships\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=854376757329920\",\"https://picsum.photos/seed/QDijjWjQ3/640/480\",\"https://loremflickr.com/640/480?lock=4915948458868736\"]}','2024-10-14 11:02:26'),
(107,110,'{\"tags\":[\"new\",\"technologies\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/kDdeoPs9Xq/640/480\",\"https://loremflickr.com/640/480?lock=2223272668168192\",\"https://picsum.photos/seed/K8KSvJUR/640/480\"]}','2024-10-14 11:02:27'),
(108,111,'{\"tags\":[\"new\",\"models\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/nWp2d/640/480\",\"https://loremflickr.com/640/480?lock=3362165306163200\",\"https://loremflickr.com/640/480?lock=5494692842045440\"]}','2024-10-14 11:02:28'),
(109,112,'{\"tags\":[\"new\",\"technologies\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=1379680324157440\",\"https://picsum.photos/seed/yamYrQ/640/480\",\"https://loremflickr.com/640/480?lock=1280301969965056\"]}','2024-10-14 11:02:28'),
(110,113,'{\"tags\":[\"new\",\"portals\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=7678784251625472\",\"https://loremflickr.com/640/480?lock=5973274305495040\",\"https://picsum.photos/seed/ux0ua3F3/640/480\"]}','2024-10-14 11:02:29'),
(111,114,'{\"tags\":[\"new\",\"portals\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=7881247000887296\",\"https://loremflickr.com/640/480?lock=5606793145221120\",\"https://picsum.photos/seed/rjz1DmU/640/480\"]}','2024-10-14 11:02:30'),
(112,115,'{\"tags\":[\"new\",\"partnerships\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=69438298652672\",\"https://loremflickr.com/640/480?lock=5644213993603072\",\"https://loremflickr.com/640/480?lock=1745682320850944\"]}','2024-10-14 11:02:31'),
(113,116,'{\"tags\":[\"new\",\"mindshare\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/0E5qPOObJ/640/480\",\"https://loremflickr.com/640/480?lock=2435004049129472\",\"https://loremflickr.com/640/480?lock=115426629517312\"]}','2024-10-14 11:02:32'),
(114,117,'{\"tags\":[\"new\",\"deliverables\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/yQJYZ3Q/640/480\",\"https://picsum.photos/seed/ygVq8/640/480\",\"https://picsum.photos/seed/ZQDONrE1/640/480\"]}','2024-10-14 11:02:34'),
(115,118,'{\"tags\":[\"new\",\"e-business\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/5LGpVc/640/480\",\"https://picsum.photos/seed/Lfy02n/640/480\",\"https://loremflickr.com/640/480?lock=3921291323113472\"]}','2024-10-14 11:02:36'),
(116,119,'{\"tags\":[\"new\",\"schemas\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/RLkFserA/640/480\",\"https://picsum.photos/seed/G7Uua/640/480\",\"https://picsum.photos/seed/7JU0VXdudA/640/480\"]}','2024-10-14 11:02:37'),
(117,120,'{\"tags\":[\"new\",\"action-items\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/0jvkh/640/480\",\"https://picsum.photos/seed/MwT6Yw/640/480\",\"https://loremflickr.com/640/480?lock=5781305383976960\"]}','2024-10-14 11:02:38'),
(118,121,'{\"tags\":[\"new\",\"users\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=737806664073216\",\"https://picsum.photos/seed/xlDqdCyMo/640/480\",\"https://picsum.photos/seed/MY3gfkx/640/480\"]}','2024-10-14 11:02:40'),
(119,122,'{\"tags\":[\"new\",\"bandwidth\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=4806404384751616\",\"https://picsum.photos/seed/Iqx6hd4/640/480\",\"https://loremflickr.com/640/480?lock=2279944270905344\"]}','2024-10-14 11:02:41'),
(120,123,'{\"tags\":[\"new\",\"solutions\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/M417it8VmS/640/480\",\"https://loremflickr.com/640/480?lock=4058333526884352\",\"https://picsum.photos/seed/Y6Cn3qlW/640/480\"]}','2024-10-14 11:02:43'),
(121,124,'{\"tags\":[\"new\",\"initiatives\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=1830757802704896\",\"https://loremflickr.com/640/480?lock=6058209685012480\",\"https://loremflickr.com/640/480?lock=7696285888937984\"]}','2024-10-14 11:02:44'),
(122,125,'{\"tags\":[\"new\",\"systems\",\"pricy\"]}','{\"other_images\":[\"https://loremflickr.com/640/480?lock=4928654582743040\",\"https://picsum.photos/seed/AR0hRwk/640/480\",\"https://picsum.photos/seed/YfrqtLRAI/640/480\"]}','2024-10-14 11:02:46'),
(123,126,'{\"tags\":[\"new\",\"experiences\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/GfUe4/640/480\",\"https://picsum.photos/seed/4r7CO/640/480\",\"https://picsum.photos/seed/KZAPzmSb0b/640/480\"]}','2024-10-14 11:02:46'),
(124,127,'{\"tags\":[\"new\",\"partnerships\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/XzbC8j/640/480\",\"https://loremflickr.com/640/480?lock=3979749068111872\",\"https://loremflickr.com/640/480?lock=2573919353569280\"]}','2024-10-14 11:02:47'),
(125,128,'{\"tags\":[\"new\",\"eyeballs\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/wIQvX/640/480\",\"https://loremflickr.com/640/480?lock=4424920675123200\",\"https://picsum.photos/seed/gCyTYqgEhS/640/480\"]}','2024-10-14 11:02:48'),
(126,129,'{\"tags\":[\"new\",\"partnerships\",\"pricy\"]}','{\"other_images\":[\"https://picsum.photos/seed/S0JiAR4/640/480\",\"https://loremflickr.com/640/480?lock=8945336619892736\",\"https://picsum.photos/seed/Np9g39kW2n/640/480\"]}','2024-10-14 11:02:49'),
(127,130,'{\"tags\":[\"new\",\"Affordab;e\"]}','{\"other_images\":[\"https://images.unsplash.com/photo-1507955987999-df4864ee80d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D\"]}','2024-10-24 10:12:54');
/*!40000 ALTER TABLE `products_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_owners`
--

DROP TABLE IF EXISTS `shop_owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `contact_email_2` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lasttname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contact_email_2` (`contact_email_2`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_owners`
--

LOCK TABLES `shop_owners` WRITE;
/*!40000 ALTER TABLE `shop_owners` DISABLE KEYS */;
INSERT INTO `shop_owners` VALUES
(2,32,NULL,'2024-10-05 15:17:44',NULL,'some name','some las name'),
(3,33,NULL,'2024-10-05 15:18:50',NULL,'some name','some las name'),
(4,34,NULL,'2024-10-05 15:19:27',NULL,'some name','some las name'),
(5,40,NULL,'2024-10-20 08:41:03',NULL,'Charles','Kahuho');
/*!40000 ALTER TABLE `shop_owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shops` (
  `shop_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) DEFAULT NULL,
  `shop_email` text NOT NULL,
  `shop_name` text NOT NULL,
  `business_registration_number` text NOT NULL,
  `bank_account_details` text DEFAULT NULL,
  `tax_identification_number` text DEFAULT NULL,
  `status` enum('active','pending','suspended') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`shop_id`),
  UNIQUE KEY `business_registration_number` (`business_registration_number`) USING HASH,
  UNIQUE KEY `bank_account_details` (`bank_account_details`) USING HASH,
  UNIQUE KEY `tax_identification_number` (`tax_identification_number`) USING HASH,
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `shops_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users`.`id` (`owner_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` VALUES
(18,33,'bora@gmail.com','borabora','46579800-20ed03y0',NULL,NULL,'active','2024-10-11 06:02:13',NULL),
(23,40,'cmkahuho@gmail.com','Cartnest official','85999485o4995-4995nnr-',NULL,NULL,'active','2024-10-20 16:21:47',NULL);
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(32,'some user','vendor@vendor.com','vendor','2024-10-05 15:17:44',NULL,'$2a$10$ccGvs8cmaVy206l67YAcbO5q4bzwoX8mj1aGbNaNdNQDx6z7jSH5u'),
(33,'some user','vendor@vendor1.com','vendor','2024-10-05 15:18:50',NULL,'$2a$10$NUwnIR/I2hGGzrTkkNL/Cu8mYGzuYKozkELN5tBLxAxRYN35FP6Ny'),
(34,'some user','vendor@vendor2.com','vendor','2024-10-05 15:19:27',NULL,'$2a$10$5.V85i/K4KN/XvY4iYCKGebwUhs7TLoZeIhNnkoqZX6MGdGXU/Ivu'),
(35,'some user','admin@admin2.com','admin','2024-10-05 15:19:54',NULL,'$2a$10$.O.YEKy.hp7P4g/ln6KzP.SL5imFf9TCpEp34bWl5fjTaOG4g0SaC'),
(36,'some user','customer@customer.com','customer','2024-10-05 15:20:19',NULL,'$2a$10$8Cn/rX8zMJQ3sUUEcqPNb.EukN2cvWXp9ASQnNvadZyXrQgkhs1ce'),
(38,'some user','customer@customers.com','customer','2024-10-20 08:36:00',NULL,'$2a$10$6vFjtRpXIXlb7tC8Nek5wON4bNeeN1Xe28HLQgWvKGjPe8ruJSzxS'),
(39,'Alaric78','ckcharles004@gmail.com','customer','2024-10-20 08:40:22',NULL,'$2a$10$t1CLA8hcDXXQGdQqhfUYz.idwUZQlmlLfEiALfN90PYrOdIf0m9nu'),
(40,'Alaric78','ckagenou96@gmail.com','vendor','2024-10-20 08:41:03',NULL,'$2a$10$bJhtEihh4HtHLu3VUWsHBOZ611zMvFvVFieEQhZcrAgMYj0iypbqO'),
(41,'Alex','urbankollyk@gmail.com','customer','2024-10-24 09:56:25',NULL,'$2a$10$I/vaYLzfQXY2cEShkzK.8ubsN7NindZu//BCUdVo4aMSpKRvxkkfG'),
(42,'cmkahuho','cmkahuho@gmail.com','admin','2024-10-25 08:56:56',NULL,'$2a$10$5e.FqC7KFRAYpKMuFQOa/eiM94e9/xNmozL8RUvU/0B0SuL7Jx4LG');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_details`
--

DROP TABLE IF EXISTS `vendor_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendor_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(11) NOT NULL,
  `business_type` text NOT NULL,
  `business_logo` text DEFAULT NULL,
  `business_description` text NOT NULL,
  `years_in_business` text NOT NULL,
  `location` text NOT NULL,
  `operational_hours` text NOT NULL,
  `whatsapp_link` text DEFAULT NULL,
  `twitter_link` text DEFAULT NULL,
  `website_url` text DEFAULT NULL,
  `instagram_link` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vendor_id` (`vendor_id`),
  CONSTRAINT `vendor_details_idfk_22` FOREIGN KEY (`vendor_id`) REFERENCES `shops` (`shop_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_details`
--

LOCK TABLES `vendor_details` WRITE;
/*!40000 ALTER TABLE `vendor_details` DISABLE KEYS */;
INSERT INTO `vendor_details` VALUES
(2,18,'retail',NULL,'Comis anser corrupti delectus debeo delego alienus a cornu thesis. Inflammatio ventito adflicto decor apparatus super demens. Depromo utroque atavus debitis.','1','kenya','fulltime',NULL,NULL,NULL,NULL),
(6,23,'Retail',NULL,'Official shop for cartnest shopping','1','Nairobi, Kenya','fulltime',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `vendor_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-11-05 13:25:28
