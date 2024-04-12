/*
  Warnings:

  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `entries` DROP FOREIGN KEY `entries_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_store_id_fkey`;

-- DropTable
DROP TABLE `Store`;

-- CreateTable
CREATE TABLE `stores` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gold_amount` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `address` VARCHAR(191) NULL,
    `type` ENUM('retail', 'wholesale', 'factory') NOT NULL,
    `note` VARCHAR(191) NULL,
    `unpaid_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `unpaid_cash_amount` INTEGER NOT NULL DEFAULT 0,
    `advanced_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `advanced_cash_amount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `stores_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
