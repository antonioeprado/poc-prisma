-- AlterTable
ALTER TABLE "Families" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ShoppingList" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "userFamilyRelations" ALTER COLUMN "createdAt" DROP NOT NULL;
