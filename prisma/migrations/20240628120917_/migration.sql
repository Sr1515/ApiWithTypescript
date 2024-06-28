/*
  Warnings:

  - The primary key for the `Album` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Singer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Song` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Album` DROP FOREIGN KEY `Album_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Song` DROP FOREIGN KEY `Song_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `_AlbumSongs` DROP FOREIGN KEY `_AlbumSongs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AlbumSongs` DROP FOREIGN KEY `_AlbumSongs_B_fkey`;

-- AlterTable
ALTER TABLE `Album` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `authorId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Singer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Song` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `authorId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_AlbumSongs` MODIFY `A` VARCHAR(191) NOT NULL,
    MODIFY `B` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Singer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Singer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlbumSongs` ADD CONSTRAINT `_AlbumSongs_A_fkey` FOREIGN KEY (`A`) REFERENCES `Album`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlbumSongs` ADD CONSTRAINT `_AlbumSongs_B_fkey` FOREIGN KEY (`B`) REFERENCES `Song`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
