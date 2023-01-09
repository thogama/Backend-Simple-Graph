-- CreateTable
CREATE TABLE "chartData" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "highPrice" DOUBLE PRECISION NOT NULL,
    "lowPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chartData_pkey" PRIMARY KEY ("id")
);
