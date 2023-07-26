ALTER TABLE `blogs` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `blogs` MODIFY COLUMN `published` boolean NOT NULL;