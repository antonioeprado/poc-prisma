-- DropForeignKey
ALTER TABLE "ShoppingList" DROP CONSTRAINT "ShoppingList_familyId_fkey";

-- AlterTable
ALTER TABLE "ShoppingList" ALTER COLUMN "familyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Families"("id") ON DELETE SET NULL ON UPDATE CASCADE;
