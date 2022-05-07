-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2022 at 03:25 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdboutique`
--
CREATE DATABASE IF NOT EXISTS `bdboutique` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdboutique`;

-- --------------------------------------------------------

--
-- Table structure for table `connexion`
--

DROP TABLE IF EXISTS `connexion`;
CREATE TABLE `connexion` (
  `idm` int(11) NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'M',
  `statut` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `connexion`
--

INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `role`, `statut`) VALUES
(1, 'admin@bureaumax.com', '12345', 'A', 'A'),
(3, 'waylo@test.com', '12345', 'M', 'A'),
(4, 'ksl@dk.co', '12345', 'M', 'A'),
(5, 'sadf@asdf.as', 'dasss', 'M', 'A'),
(6, 'sfg@sd.fdgh', '1!qQ1111', 'M', 'A'),
(7, 'asdf@ss.dd', '1!qQ1111', 'M', 'A'),
(8, 'willy@oompa.com', '1!qQ1111', 'M', 'A'),
(9, 'willy@oompa.com', '1!qQ1111', 'M', 'A'),
(10, 'willy@oompa.com', '1!qQ1111', 'M', 'A'),
(11, 'willy@oompa.com', '1!qQ1111', 'M', 'A'),
(12, 'willy@oompa.com', '1!qQ1111', 'M', 'A'),
(13, 'willy@oompa.com', 'qQ1!aaaa', 'M', 'A'),
(14, 'willy@oompa.com', 'qQ1!aaaa', 'M', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `membres`
--

DROP TABLE IF EXISTS `membres`;
CREATE TABLE `membres` (
  `idm` int(11) NOT NULL,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `sexe` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datenaissance` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `membres`
--

INSERT INTO `membres` (`idm`, `nom`, `prenom`, `courriel`, `sexe`, `datenaissance`) VALUES
(1, 'Vincent', 'Chad', 'admin@bureaumax.com', 'M', '1970-01-01'),
(3, 'Carrier', 'Waylon', 'waylo@test.com', NULL, NULL),
(4, 'wmi', 'will', 'ksl@dk.co', 'M', '2022-04-20'),
(5, 'sadf', 'asdf', 'sadf@asdf.as', NULL, NULL),
(6, 'sfg', 'dsgf', 'sfg@sd.fdgh', NULL, NULL),
(7, 'adff', 'dasdf', 'asdf@ss.dd', NULL, NULL),
(8, 'Wonka', 'Willy', 'willy@oompa.com', NULL, NULL),
(9, 'Wonka', 'Willy', 'willy@oompa.com', NULL, NULL),
(10, 'Wonka', 'Willy', 'willy@oompa.com', NULL, NULL),
(11, 'Wonka', 'Willy', 'willy@oompa.com', NULL, NULL),
(12, 'Wonka', 'Willy', 'willy@oompa.com', NULL, NULL),
(13, 'd', 'willy', 'willy@oompa.com', NULL, NULL),
(14, 'guy', 'new', 'willy@oompa.com', 'N', '2022-04-21');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `imageAltText` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1028) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `discountPrice` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `imageAltText`, `description`, `price`, `discountPrice`) VALUES
(1, 'Brother - Cartouche de toner noir TN221BK rendement standard', 'toner.webp', 'Une explosion de couleur... dans ta face.', 'Une explosion de couleur... dans ta face.', 123.99, 109.99),
(2, 'Apple AirPods - 3e génération', 'pods.webp', '2 petits extra-terrestres dans une boite chic.', '2 petits extra-terrestres dans une boite chic.', 239.99, 199.99),
(3, 'BIC - Stylos à bille Round Stic ronds, pointe moyenne, 1,0 mm, bleu, paq./60', 'bics.webp', 'Extra valeur. C\'est ecrit sur la boite.', 'Extra valeur. C\'est ecrit sur la boite.', 7.49, 3.49),
(4, 'Omega II - Casque dur, ajustement à coulisse latérale, homologué CSA Type 1, classe E, ANSI Type I ', 'casque.webp', 'Pour le developpement web dangereux.', 'Pour le developpement web dangereux.', 27.99, NULL),
(5, 'Seagate - Disque dur externe USB 3.2 Gen 1 de 2 To One touch - Rouge', 'seagate.webp', 'Ca en fait, d\'la porno.', 'Ca en fait, d\'la porno.', 89.99, NULL),
(6, 'CoastWide Professional - Papier Hygiénique Géant à 2 Épaisseurs - Paquet de 6', 'tp.webp', 'Il en manque toujours.', 'Il en manque toujours.', 26.99, NULL),
(7, 'Brother - Cartouche de toner noir TN221BK rendement standard', 'toner.webp', 'Une explosion de couleur... dans ta face.', 'Une explosion de couleur... dans ta face.', 123.99, 109.99),
(8, 'Apple AirPods - 3e génération', 'pods.webp', '2 petits extra-terrestres dans une boite chic.', '2 petits extra-terrestres dans une boite chic.', 239.99, 199.99),
(9, 'Brother - Cartouche de toner noir TN221BK rendement standard', 'toner.webp', 'Une explosion de couleur... dans ta face.', 'Une explosion de couleur... dans ta face.', 123.99, 109.99),
(10, 'Apple AirPods - 3e génération', 'pods.webp', '2 petits extra-terrestres dans une boite chic.', '2 petits extra-terrestres dans une boite chic.', 239.99, 199.99);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idm`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `membres`
--
ALTER TABLE `membres`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
