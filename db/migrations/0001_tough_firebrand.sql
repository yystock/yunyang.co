ALTER TABLE `blogs` RENAME COLUMN `text` TO `content`;--> statement-breakpoint
ALTER TABLE `blogs` MODIFY COLUMN `content` json;