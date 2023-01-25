import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let user = await prisma.users.findFirst();
  if (!user) {
    user = await prisma.users.create({
      data: {
        email: "antonio@gmail.com",
        name: "Antonio",
        password: "antonio",
      },
    });
  }

  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
