/*
  Warnings:

  - You are about to drop the column `advabced_cash_amount` on the `balances` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `balances` DROP COLUMN `advabced_cash_amount`,
    ADD COLUMN `advanced_cash_amount` INTEGER NOT NULL DEFAULT 0;
