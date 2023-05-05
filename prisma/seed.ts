import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from "@faker-js/faker";



const prisma = new PrismaClient();

const getSemesters = (): Prisma.semestersCreateInput[] => [
  {
      sem_no: "1",
  },
  {
      sem_no: "2",
  },
  {
      sem_no: "3",
  },
  {
      sem_no: "4",
  },
  {
      sem_no: "5",
  },
  {
      sem_no: "6",
  }
];

































const main = async () => {
  await PrismaClient.semesters.deleteMany();
  await client.session_details.deleteMany();
  await client.test_history.deleteMany();
  await client.student_test_details.deleteMany();
  await client.questions_details.deleteMany();
  await client.test_details.deleteMany();
  await client.review_reply.deleteMany();
  await client.review.deleteMany();
  await client.favourites.deleteMany();
  await client.notes.deleteMany();
  await client.user_details.deleteMany();
  await client.users.deleteMany();
  await client.subjects.deleteMany();
  await client.semesters.deleteMany();
  await client.branch.deleteMany();
  await client.college.deleteMany();

 
  await PrismaClient.semesters.createMany({
      data: getSemesters(),
  });




}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });