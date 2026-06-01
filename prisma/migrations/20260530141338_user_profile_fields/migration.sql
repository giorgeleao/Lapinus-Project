-- AlterTable
ALTER TABLE "Rabbit" ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "color" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "sex" TEXT,
ALTER COLUMN "breed" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "city" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "state" TEXT;
