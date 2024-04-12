-- AlterTable
ALTER TABLE `in_requests` ADD COLUMN `store_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `out_requests` ADD COLUMN `store_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `in_requests` ADD CONSTRAINT `in_requests_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `out_requests` ADD CONSTRAINT `out_requests_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
