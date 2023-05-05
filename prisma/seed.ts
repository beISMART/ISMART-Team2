import {  PrismaClient } from '@prisma/client';
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();




async function main() {
  await prisma.student.deleteMany();
  await prisma.semesters.deleteMany();
  await prisma.co_admin.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.staff.deleteMany();
  await prisma.academic_year.deleteMany();
  await prisma.branch.deleteMany();
  





  for (let i = 0; i < 4; i++) {
    await prisma.branch.createMany({
      data: {
        branch_name:faker.commerce.department() // computer science, mechanical, EEE, civil
      },
    });
  }


  for (let i = 0; i < 4; i++) {
    await prisma.academic_year.create({
      data: {
        Academic_year:faker.date.between('2020-01-01', '2023-01-01'),

      },
    });
  }



const branches = await prisma.branch.findMany();
const academic_years = await prisma.academic_year.findMany();
const randomIndex = Math.floor(Math.random() * academic_years.length);
await Promise.all(branches.map(async (branch)=> {
  await prisma.staff.create({
    data:{
      first_name:faker.name.firstName(),
      last_name:faker.name.lastName(),
      full_name:faker.name.fullName(),
      contact_number:faker.phone.number("+91 ##### #####"),
      gender:faker.name.sex(),
      mail_id:faker.internet.email(),
      address:faker.address.streetAddress(),
      city:faker.address.cityName(),
      state:faker.address.state(),
      staff_qualification:faker.lorem.sentence(),
      branch_name:branch?.branch_name!,
      Academic_year: academic_years[randomIndex].Academic_year,
        
      
    }
  })
}))
    
for (let i = 0; i < 10; i++) {
 await prisma.admin.createMany({
  data:{
    first_name:faker.name.firstName(),
    last_name:faker.name.lastName(),
    full_name:faker.name.fullName(),
    contact_number:faker.phone.number("+91 ##### #####"),
    gender:faker.name.gender(),
    mail_id:faker.internet.email(),
    address:faker.address.streetAddress(),
    city:faker.address.cityName(),
    state:faker.address.state(),
    admin_qualification:faker.lorem.sentence(),
   },
  
})
}

for (let i = 0; i < 2; i++) {
const staffs = await prisma.staff.findMany();
await Promise.all(staffs.map(async (staff)=> {
  await prisma.co_admin.create({
    data:{
     
        staffId:staff.id,
      
    }
  })
}))
}




for (let i = 0; i < 2; i++) {
  await prisma.semesters.create({
    data: {
      sem_no: faker.datatype.number({ min:1 , max:6 }).toString()
    }  
  });
}







for (let i = 0; i < 5; i++) {
const Semesters = await prisma.semesters.findMany();
const randomIndex1 = Math.floor(Math.random() * Semesters.length);
await Promise.all(branches.map(async (branch)=> {
  await prisma.student.create({
    data:{
      first_name:faker.name.firstName(),
      last_name:faker.name.lastName(),
      full_name:faker.name.fullName(),
      contact_number:faker.phone.number("+91 ##### #####"),
      gender:faker.name.sex(),
      mail_id:faker.internet.email(),
      address:faker.address.streetAddress(),
      city:faker.address.cityName(),
      state:faker.address.state(),
      reg_no:faker.random.alphaNumeric(),
      Branch_name:branch?.branch_name!,
      Academic_year: academic_years[randomIndex].Academic_year,
      Sem_no:Semesters[randomIndex1].sem_no
    },
  
  })
}))
}




















}

main()
  .then(() => console.log("success"))
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());