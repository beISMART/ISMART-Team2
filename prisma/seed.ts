import { PrismaClient } from '@prisma/client';
import { faker } from "@faker-js/faker";


const prisma = new PrismaClient();

async function main() {
  // Seed the admin table
  const adminCount = 10;
  for (let i = 0; i < adminCount; i++) {
    const admin = await prisma.admin.create({
      data: {
        admin_id: faker.random.alphaNumeric(10),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        full_name: faker.name.fullName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        gender: faker.lorem.word(),
        contact_number: faker.phone.number("+91 ##### #####"),
        state: faker.address.state(),
        city: faker.address.city(),
        password: faker.internet.password(),
        admin_qualification: faker.name.jobTitle(),
      },
    });
    console.log(`Created admin with ID: ${admin.id}`);
  }

  // Seed the student table
  const studentCount = 20;
  for (let i = 0; i < studentCount; i++) {
    const student = await prisma.student.create({
      data: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        full_name: faker.name.fullName(),
        reg_no: faker.random.alphaNumeric(10),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        gender: faker.lorem.word(),
        contact_number: faker.phone.number("+91 ##### #####"),
        city: faker.address.city(),
        state: faker.address.state(),
        password: faker.internet.password(),
        monthly_report: {
          connect: { monthly_repo_id: '1' },
        },
        student_remarks: {
          connect: { remarks_ID: '1' },
        },
        see_marks: {
          connect: { see_id: '1' },
        },
        CIE_marks: {
          connect: { cie_id: '1' },
        },
        academic_year: {
          connect: { ID: '1' },
        },
        branch: {
          connect: { id: '1' },
        },
        semester:{
          connect:{id:'1'},
        }
       
      }
    });
    console.log(`Created student with ID: ${student.id}`);
  }





 











  console.log("=>==>==>==>==> Data sent ==>==>");
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });