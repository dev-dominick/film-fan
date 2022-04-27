DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `login` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `review` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `text` varchar(255),
  `movie_id` int
);

CREATE TABLE `movie` (
  `id` int PRIMARY KEY,
  `title` varchar(255)
);

ALTER TABLE `review` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `review` ADD FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`);