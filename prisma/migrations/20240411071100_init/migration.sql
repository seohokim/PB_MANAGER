-- CreateTable
CREATE TABLE `balances` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `last_balance_id` VARCHAR(191) NOT NULL,
    `gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `cash_amount` INTEGER NOT NULL DEFAULT 0,
    `weight_995` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `weight_999` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `weight_9999` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `advanced_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `advabced_cash_amount` INTEGER NOT NULL DEFAULT 0,
    `unpaid_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `unpaid_cash_amount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `balances_id_key`(`id`),
    UNIQUE INDEX `balances_last_balance_id_key`(`last_balance_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entries` (
    `id` VARCHAR(191) NOT NULL,
    `today_balance_id` VARCHAR(191) NOT NULL,
    `in_request_id` VARCHAR(191) NULL,
    `out_request_id` VARCHAR(191) NULL,
    `repairing_request_id` VARCHAR(191) NULL,
    `store_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,
    `note` VARCHAR(191) NOT NULL,
    `gold_amount` DECIMAL(65, 30) NULL,
    `cash_amount` INTEGER NULL,
    `type` ENUM('receiving', 'paying', 'inComing', 'outGoing') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `entries_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
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

    UNIQUE INDEX `Store_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `serial` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `sell_labor_cost` INTEGER NULL,
    `purchase_labor_cost` INTEGER NULL,
    `catalog_id` VARCHAR(191) NULL,
    `type` ENUM('other', 'k_10', 'k_14', 'k_18', 'k_24', 'percent_995', 'percent_999', 'percent_9999') NOT NULL,
    `store_id` VARCHAR(191) NULL,
    `note` VARCHAR(191) NOT NULL,
    `isStokced` BOOLEAN NOT NULL DEFAULT true,
    `stocked_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isOut` BOOLEAN NOT NULL DEFAULT false,
    `out_at` DATETIME(3) NULL,
    `isRented` BOOLEAN NOT NULL DEFAULT false,
    `rented_at` DATETIME(3) NULL,

    UNIQUE INDEX `products_id_key`(`id`),
    UNIQUE INDEX `products_serial_key`(`serial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogs` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `photo_url` VARCHAR(191) NULL,
    `serial` VARCHAR(191) NOT NULL,
    `gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `sell_labor_cost` INTEGER NULL,
    `purchase_labor_cost` INTEGER NULL,
    `average_stocked_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `note` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `catalogs_id_key`(`id`),
    UNIQUE INDEX `catalogs_serial_key`(`serial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `in_requests` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `serial` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,
    `catalog_id` VARCHAR(191) NULL,
    `payment_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `payment_cash_amount` INTEGER NOT NULL DEFAULT 0,
    `state` ENUM('registered', 'preparing', 'finished') NOT NULL,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `paid_at` DATETIME(3) NULL,
    `note` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `in_requests_serial_key`(`serial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `out_requests` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `serial` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,
    `catalog_id` VARCHAR(191) NULL,
    `payment_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `payment_cash_amount` INTEGER NOT NULL DEFAULT 0,
    `state` ENUM('registered', 'preparing', 'finished') NOT NULL,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `paid_at` DATETIME(3) NULL,
    `note` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `out_requests_serial_key`(`serial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repairing_requests` (
    `id` VARCHAR(191) NOT NULL,
    `serial` VARCHAR(191) NOT NULL,
    `state` ENUM('registered', 'preparing', 'finished') NOT NULL,
    `payment_gold_weight` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `payment_cash_amount` INTEGER NOT NULL DEFAULT 0,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `paid_at` DATETIME(3) NULL,

    UNIQUE INDEX `repairing_requests_serial_key`(`serial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admins` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `authority` ENUM('super', 'admin', 'user') NOT NULL,

    UNIQUE INDEX `admins_name_key`(`name`),
    UNIQUE INDEX `admins_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `change_logs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `table_name` VARCHAR(191) NOT NULL,
    `entity_id` VARCHAR(191) NOT NULL,
    `action_type` VARCHAR(191) NOT NULL,
    `changed_data` VARCHAR(191) NULL,
    `changed_by` VARCHAR(191) NOT NULL,
    `changed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `balances` ADD CONSTRAINT `balances_last_balance_id_fkey` FOREIGN KEY (`last_balance_id`) REFERENCES `balances`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_today_balance_id_fkey` FOREIGN KEY (`today_balance_id`) REFERENCES `balances`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_in_request_id_fkey` FOREIGN KEY (`in_request_id`) REFERENCES `in_requests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_out_request_id_fkey` FOREIGN KEY (`out_request_id`) REFERENCES `out_requests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_repairing_request_id_fkey` FOREIGN KEY (`repairing_request_id`) REFERENCES `repairing_requests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_catalog_id_fkey` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `in_requests` ADD CONSTRAINT `in_requests_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `in_requests` ADD CONSTRAINT `in_requests_catalog_id_fkey` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `out_requests` ADD CONSTRAINT `out_requests_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `out_requests` ADD CONSTRAINT `out_requests_catalog_id_fkey` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `change_logs` ADD CONSTRAINT `change_logs_changed_by_fkey` FOREIGN KEY (`changed_by`) REFERENCES `admins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
