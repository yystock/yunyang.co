ALTER TABLE `blogs` MODIFY COLUMN `title` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `blogs` ADD `image` text;--> statement-breakpoint
ALTER TABLE `blogs` ADD `published` boolean DEFAULT false;