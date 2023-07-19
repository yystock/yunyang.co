CREATE TABLE `blogs` (
	`slug` varchar(191) NOT NULL,
	`count` int NOT NULL DEFAULT 1,
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`user_id` varchar(191) NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blogs_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`username` varchar(50) NOT NULL,
	`email` varchar(255) NOT NULL,
	`image` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`role` enum('user','yun') NOT NULL DEFAULT 'user',
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE INDEX `posts__user_id__idx` ON `blogs` (`user_id`);