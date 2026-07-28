-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'COMPLETED', 'REFUNDED');

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clerkUserId" TEXT,
    "stripeCustomerId" TEXT,
    "stripeCheckoutSessionId" TEXT NOT NULL,
    "stripePaymentIntentId" TEXT,
    "amountTotal" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'usd',
    "status" "PurchaseStatus" NOT NULL DEFAULT 'COMPLETED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleProgress" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModuleProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_email_key" ON "Purchase"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_clerkUserId_key" ON "Purchase"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_stripeCheckoutSessionId_key" ON "Purchase"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleProgress_purchaseId_moduleId_key" ON "ModuleProgress"("purchaseId", "moduleId");

-- AddForeignKey
ALTER TABLE "ModuleProgress" ADD CONSTRAINT "ModuleProgress_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
