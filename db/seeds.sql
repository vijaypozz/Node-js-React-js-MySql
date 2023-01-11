-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 03:10 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `checking_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(20) NOT NULL,
  `reset_link` varchar(250) DEFAULT NULL,
  `reset_link_time` datetime DEFAULT NULL,
  `modifiedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `avatar` varchar(240) NOT NULL,
  `role_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `role`, `reset_link`, `reset_link_time`, `modifiedAt`, `createdAt`, `avatar`, `role_id`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W', 'admin', NULL, NULL, '2022-11-24 15:58:05', '2022-11-24 15:58:05', '', 'ADMIN001'),
(2, 'V2/newAdmin', 'vijay.s@theretailinsights.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W', 'v2', NULL, NULL, '2023-01-02 13:08:16', '2023-01-02 13:08:16', '', 'admin01');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(50) NOT NULL,
  `store_name` varchar(200) NOT NULL,
  `route_id` varchar(200) NOT NULL,
  `number_of_items` int(50) NOT NULL,
  `number_of_boxes` int(50) NOT NULL,
  `vehicle_id` varchar(100) NOT NULL,
  `status` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `store_name`, `route_id`, `number_of_items`, `number_of_boxes`, `vehicle_id`, `status`, `created_at`, `updated_at`) VALUES
(33, 'TNStore', 'R15', 11, 5, 'TN48', 'open', '2022-12-26 17:54:59', '2022-12-26 17:54:59'),
(35, 'TNStore', 'R15', 11, 5, 'TN148', 'open', '2022-12-26 17:58:11', '2022-12-26 17:58:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(50) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'post', 'podt@gmail.com', 'password01*'),
(123, 'sundar', 'sundar@gmail.com', '123ddddddd4'),
(125, 'new user', 'newuser@gmail.com', '123ddddddd4'),
(126, 'testing', 'vijaysundar@gmail.com', '123ddddddd4'),
(127, 'test1', 'vijaysundar@gmail.com', '123ddddddd4'),
(128, 'test6', 'vijaysundar@gmail.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_master`
--

CREATE TABLE `vehicle_master` (
  `id` int(50) NOT NULL,
  `number` varchar(100) NOT NULL,
  `type` varchar(250) NOT NULL,
  `driver_name` varchar(250) NOT NULL,
  `driver_number` varchar(200) NOT NULL,
  `track_link` text NOT NULL,
  `status` varchar(30) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_id` (`vehicle_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_master`
--
ALTER TABLE `vehicle_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `vehicle_master`
--
ALTER TABLE `vehicle_master`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 03:10 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `checking_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(20) NOT NULL,
  `reset_link` varchar(250) DEFAULT NULL,
  `reset_link_time` datetime DEFAULT NULL,
  `modifiedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `avatar` varchar(240) NOT NULL,
  `role_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `role`, `reset_link`, `reset_link_time`, `modifiedAt`, `createdAt`, `avatar`, `role_id`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W', 'admin', NULL, NULL, '2022-11-24 15:58:05', '2022-11-24 15:58:05', '', 'ADMIN001'),
(2, 'V2/newAdmin', 'vijay.s@theretailinsights.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W', 'v2', NULL, NULL, '2023-01-02 13:08:16', '2023-01-02 13:08:16', '', 'admin01');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(50) NOT NULL,
  `store_name` varchar(200) NOT NULL,
  `route_id` varchar(200) NOT NULL,
  `number_of_items` int(50) NOT NULL,
  `number_of_boxes` int(50) NOT NULL,
  `vehicle_id` varchar(100) NOT NULL,
  `status` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `store_name`, `route_id`, `number_of_items`, `number_of_boxes`, `vehicle_id`, `status`, `created_at`, `updated_at`) VALUES
(33, 'TNStore', 'R15', 11, 5, 'TN48', 'open', '2022-12-26 17:54:59', '2022-12-26 17:54:59'),
(35, 'TNStore', 'R15', 11, 5, 'TN148', 'open', '2022-12-26 17:58:11', '2022-12-26 17:58:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(50) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'post', 'podt@gmail.com', 'password01*'),
(123, 'sundar', 'sundar@gmail.com', '123ddddddd4'),
(125, 'new user', 'newuser@gmail.com', '123ddddddd4'),
(126, 'testing', 'vijaysundar@gmail.com', '123ddddddd4'),
(127, 'test1', 'vijaysundar@gmail.com', '123ddddddd4'),
(128, 'test6', 'vijaysundar@gmail.com', '$2a$10$lXuqjdWJObgzVuDjLEESi.kzhy6tjS7glVlYE0Yq5/YXn81n.ME2W');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_master`
--

CREATE TABLE `vehicle_master` (
  `id` int(50) NOT NULL,
  `number` varchar(100) NOT NULL,
  `type` varchar(250) NOT NULL,
  `driver_name` varchar(250) NOT NULL,
  `driver_number` varchar(200) NOT NULL,
  `track_link` text NOT NULL,
  `status` varchar(30) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_id` (`vehicle_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_master`
--
ALTER TABLE `vehicle_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `vehicle_master`
--
ALTER TABLE `vehicle_master`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
