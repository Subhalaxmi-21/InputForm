-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2022 at 05:12 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `year` varchar(20) NOT NULL,
  `branch` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` bigint(15) NOT NULL,
  `city` varchar(75) NOT NULL,
  `interests` varchar(200) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `linkedin`, `year`, `branch`, `email`, `phone`, `city`, `interests`, `password`) VALUES
(1, 'Maya', 'https://www.linkedin.com/in/aditi-parab-bb74651b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_ba', 'TY', 'Information Technology', 'parab.as@somaiya.edu', 8765189, 'Pune', 'React', ''),
(2, 'Diti', '985632', 'TY', 'IT', 'parab.as@somaiya.edu', 985632478, 'Delhi', 'Django', ''),
(3, 'Aditi', '9875243', 'SY', 'IT', 'xyz@', 785426941, 'Pune', 'SEO', ''),
(4, '', '0', '', '', '', 0, '', '', 'abcdef'),
(5, 'siya', 'https://www.linkedin.com/in/prachitigholap/', 'LY', '7854658', 'aditisp2001@gmail.com', 9998564777, 'seo', 'mumbai', 'qwer'),
(6, 'Aditi Parab', '846582', 'SY', 'IT', 'parab.as@somaiya.edu', 789654321, 'PUNE', 'ML', '123456'),
(7, 'Abcd', 'https://github.com/', 'TY', 'IT', 'def', 8419411, 'Pune', 'SEO', '7485896'),
(9, 'Aditi Parab', 'https://www.linkedin.com/feed/', 'Second', 'CS', 'aditisp2001@gmail.com', 7045466324, 'MUMBAI', 'SEO', '12345678'),
(13, 'Abcd', 'https://www.linkedin.com/feed/', 'Second', 'IT', 'abcd@gmail.com', 987654321, 'Pune', 'DS', '$2b$10$VuX7siPPqLrX.'),
(14, 'Aditi Parab', 'https://www.linkedin.com/feed/', 'Second', 'CS', 'parab.as@somaiya.edu', 7045466324, 'MUMBAI', 'SEO', '$2b$10$gi5T4q4a4mdEg'),
(15, 'ghi', 'https://www.linkedin.com/feed/', 'Third', 'IT', 'ghi@gmail.com', 85467321, 'delhi', 'Machine Learning', '$2b$10$i3UJjz3kRdwIH'),
(16, 'hun', 'https://www.linkedin.com/feed/', 'Second', 'IT', 'hun@gmail.com', 7192982, 'Nagpur', 'data', '$2b$10$QiwSceRppysNdVc9PLNw..5C18re3TFt9wDKsmOpIiB'),
(17, 'yuh', 'https://www.linkedin.com/feed/', 'Second', 'IT', 'yuh@gmail.com', 878718, 'pune', 'Machine Learning', '$2b$10$WgDxAoyGtd2TmDV/c7fJpeLyDyrz7Z3fcMxKCyw/QChhIx8zSbsTa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
