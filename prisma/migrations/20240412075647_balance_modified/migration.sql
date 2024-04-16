/*
  Warnings:

  - You are about to drop the column `weight_995` on the `balances` table. All the data in the column will be lost.
  - You are about to drop the column `weight_999` on the `balances` table. All the data in the column will be lost.
  - You are about to drop the column `weight_9999` on the `balances` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `balances` DROP COLUMN `weight_995`,
    DROP COLUMN `weight_999`,
    DROP COLUMN `weight_9999`,
    ADD COLUMN `factory_995_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `factory_9999_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `factory_999_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `old_mixed_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `old_pure_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `product_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `retail_9999_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `retail_999_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0;
