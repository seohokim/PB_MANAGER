/*
  Warnings:

  - Added the required column `entry_code_id` to the `entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entries` ADD COLUMN `entry_code_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `entry_codes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `entry_codes_id_key`(`id`),
    UNIQUE INDEX `entry_codes_code_key`(`code`),
    UNIQUE INDEX `entry_codes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_entry_code_id_fkey` FOREIGN KEY (`entry_code_id`) REFERENCES `entry_codes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
