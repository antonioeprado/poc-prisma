-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Families" (
    "id" SERIAL NOT NULL,
    "familyName" TEXT NOT NULL,
    "familyOwner" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFamilyRelations" (
    "id" SERIAL NOT NULL,
    "familyOwner" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userFamilyRelations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "familyId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "isBought" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Families_familyOwner_key" ON "Families"("familyOwner");

-- AddForeignKey
ALTER TABLE "Families" ADD CONSTRAINT "Families_familyOwner_fkey" FOREIGN KEY ("familyOwner") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFamilyRelations" ADD CONSTRAINT "userFamilyRelations_familyOwner_fkey" FOREIGN KEY ("familyOwner") REFERENCES "Families"("familyOwner") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFamilyRelations" ADD CONSTRAINT "userFamilyRelations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Families"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
