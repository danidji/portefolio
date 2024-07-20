-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rows" JSONB NOT NULL,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Presentation" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Presentation_pkey" PRIMARY KEY ("id")
);
