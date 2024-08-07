-- CreateTable
CREATE TABLE "UserSchema" (
    "clerkID" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,

    CONSTRAINT "UserSchema_pkey" PRIMARY KEY ("clerkID")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_clerkID_key" ON "UserSchema"("clerkID");

-- CreateIndex
CREATE INDEX "UserSchema_clerkID_idx" ON "UserSchema"("clerkID");
