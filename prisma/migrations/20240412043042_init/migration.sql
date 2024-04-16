-- DropForeignKey
ALTER TABLE `balances` DROP FOREIGN KEY `balances_last_balance_id_fkey`;

-- AlterTable
ALTER TABLE `balances` MODIFY `last_balance_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `balances` ADD CONSTRAINT `balances_last_balance_id_fkey` FOREIGN KEY (`last_balance_id`) REFERENCES `balances`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
