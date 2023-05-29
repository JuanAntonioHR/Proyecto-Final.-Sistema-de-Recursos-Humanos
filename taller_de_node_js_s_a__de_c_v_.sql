-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2023 a las 01:55:06
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taller de node.js s.a. de c.v.`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `phone_number` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `phone_number`, `email`, `address`) VALUES
(1, 'Berenice', 'Ramos', '(87) 99927-7982', 'prodrigues@terra.com.br', '19939-490, R. Guilherme, 6 Santana do Sul - BA'),
(2, 'María Elena', 'Garza', '(51) 3874-2820', 'santiago.faro@terra.com.br', '06071-728, Av. Beatriz Balestero, 5. Apto 1 Garcia'),
(3, 'Margarita', 'Reyes', '(73) 4245-8805', 'ariana66@ferminiano.net.br', '97539-031, Rua Marés, 2474. 170º Andar Faria d\'Oes'),
(4, 'Alicia', 'Martínez', '(83) 98755-5765', 'marques.daniel@vasques.com', '72651-530, R. Carlos, 55 Dominato do Leste - SE'),
(5, 'Rodrigo', 'Sánchez', '(13) 2661-0717', 'neves.irene@sandoval.com.br', '11219-083, Travessa Amanda, 327. Fundos Porto Maxi'),
(6, 'Juan Manuel', 'Ortíz', '(92) 4022-2713', 'miranda31@uol.com.br', '51924-797, Rua Prado, 3. 220º Andar Quintana do Su'),
(7, 'Pedro', 'Rodríguez', '(87) 2006-2927', 'alan47@ig.com.br', '80545-432, Largo Isabel, 4341 Rodrigues d\'Oeste - ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_mail` varchar(100) NOT NULL,
  `user_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_mail`, `user_password`) VALUES
(1, 'Admin1', 'admin1@hotmail.com', '12345678'),
(2, 'Admin2', 'admin2@hotmail.com', 'abcdefg'),
(3, 'Admin3', 'admin3@hotmail.com', '1234abcd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
