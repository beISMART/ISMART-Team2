import {  PrismaClient } from '@prisma/client';
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();




async function main(){ 
  await prisma.grievance_redressal.deleteMany();
  await prisma.exam_schedule.deleteMany();
  await prisma.allocate_sub.deleteMany();
  await prisma.monthly_report.deleteMany();
  await prisma.check_monthly_report.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.check_attendance.deleteMany();
  await prisma.assignments.deleteMany();
  await prisma.check_assignments.deleteMany();
  await prisma.cie_marks.deleteMany();
  await prisma.see_marks.deleteMany();
  await prisma.student_remarks.deleteMany();
  await prisma.staff_remarks.deleteMany();
  await prisma.unit_test.deleteMany();
  await prisma.check_assignments.deleteMany();
  await prisma.notes.deleteMany();
  await prisma.check_notes.deleteMany();
  await prisma.subjects.deleteMany();
  await prisma.session_details_student.deleteMany();
  await prisma.session_details_staff.deleteMany();
  await prisma.session_details_admin.deleteMany();
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
  await prisma.staff.createMany({
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

for (let i = 0; i < 1; i++) {
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
  await prisma.semesters.createMany({
    data: {
      sem_no: faker.datatype.number({ min:1 , max:6 }).toString()
    }  
  });
}







for (let i = 0; i < 5; i++) {
const Semesters = await prisma.semesters.findMany();
const randomIndex1 = Math.floor(Math.random() * Semesters.length);
await Promise.all(branches.map(async (branch)=> {
  await prisma.student.createMany({
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


for (let i = 0; i < 5; i++) {
const Admins = await prisma.admin.findMany();
const randomIndex2 = Math.floor(Math.random() * Admins.length);
await prisma.session_details_admin.create({
  data: {
    adminId:Admins[randomIndex2].id,
  }  
});
}



for (let i = 0; i < 5; i++) {
  const Staffs = await prisma.staff.findMany();
  const randomIndex3 = Math.floor(Math.random() * Staffs.length);
  await prisma.session_details_staff.create({
    data: {
      staffId:Staffs[randomIndex3].id,
    }  
  });
  }

  

  for (let i = 0; i < 5; i++) {
    const Students = await prisma.student.findMany();
    const randomIndex4 = Math.floor(Math.random() * Students.length);
    await prisma.session_details_student.create({
      data: {
        studentId:Students[randomIndex4].id,
      }  
    });
    }
    


    for (let i = 0; i < 4; i++) {
      const Semesters = await prisma.semesters.findMany();
const randomIndex5 = Math.floor(Math.random() * Semesters.length);
      await prisma.subjects.createMany({
        data: {
            sub_code:faker.random.alphaNumeric((5)),
            sub_name : faker.random.word(),
            Sem_no:Semesters[randomIndex5].sem_no
        },
      });
    }

  
    for (let i = 0; i < 4; i++) {
      const Admins = await prisma.admin.findMany();
const randomIndex6 = Math.floor(Math.random() * Admins.length);
      await prisma.check_notes.createMany({
        data: {
          adminId:Admins[randomIndex6].id,},
      });
    }



    for (let i = 0; i < 5; i++) {
      const Subjects = await prisma.subjects.findMany();
      const randomIndex7 = Math.floor(Math.random() * Subjects.length);
      const Students = await prisma.student.findMany();
      const randomIndex8 = Math.floor(Math.random() * Students.length);
      const Staffs = await prisma.staff.findMany();
      const randomIndex9 = Math.floor(Math.random() * Staffs.length);
      const Check_Notes = await prisma.check_notes.findMany();
      const randomIndex12 = Math.floor(Math.random() * Check_Notes.length);
      await Promise.all(branches.map(async (branch)=> {
        await prisma.notes.createMany({
          data:{
          title:faker.lorem.words(3),
          unit_name:faker.lorem.words(),
          unit_no:faker.random.numeric((2)),
          Branch_name:branch?.branch_name!,
          Sub_code:Subjects[randomIndex7].sub_code,
          studentId:Students[randomIndex8].id,
          staffId:Staffs[randomIndex9].id,
          checked_notesId:Check_Notes[randomIndex12].id
          },
        
        })
      }))
      }

  







     
  

        for (let i = 0; i < 5; i++) {
          const Students = await prisma.student.findMany();
          const randomIndex4 = Math.floor(Math.random() * Students.length);
          const Staffs = await prisma.staff.findMany();
          const randomIndex14 = Math.floor(Math.random() * Staffs.length);
          await prisma.unit_test.createMany({
            data: {
              UT_no:faker.random.numeric((5)),
              UT_name:faker.name.jobTitle(),
              Date_of_submittion:faker.date.soon(),
              Max_marks:faker.datatype.number({max:100}).toString(),
              UT_questions_pdf:faker.internet.url(),
              staffId:Staffs[randomIndex14].id,
              studentId:Students[randomIndex4].id,
            }  
          });
          }
          


          for (let i = 0; i < 4; i++) {
            const Admins = await prisma.admin.findMany();
      const randomIndex13 = Math.floor(Math.random() * Admins.length);
      const Staffs = await prisma.staff.findMany();
      const randomIndex17 = Math.floor(Math.random() * Staffs.length);
            await prisma.staff_remarks.createMany({
              data: {
                   remarks_category:faker.lorem.words(),
                   remarks_description:faker.lorem.sentences(),
                   staffId:Staffs[randomIndex17].id,
                adminId:Admins[randomIndex13].id,},
            });
          }
      

          for (let i = 0; i < 4; i++) {
            const Admins = await prisma.admin.findMany();
      const randomIndex13 = Math.floor(Math.random() * Admins.length);
      const Students = await prisma.student.findMany();
      const randomIndex18 = Math.floor(Math.random() * Students.length);
            await prisma.student_remarks.createMany({
              data: {
                   remarks_category:faker.lorem.words(),
                   remarks_description:faker.lorem.sentences(),
                   studentId:Students[randomIndex18].id,
                   adminId:Admins[randomIndex13].id,},
            });
          }





          const branches1 = await prisma.branch.findMany();
          const academic_years1 = await prisma.academic_year.findMany();
          const randomIndex20 = Math.floor(Math.random() * academic_years.length);
          const Semesters = await prisma.semesters.findMany();
          const randomIndex21 = Math.floor(Math.random() * academic_years.length);
          const Students = await prisma.student.findMany();
          const randomIndex22 = Math.floor(Math.random() * Students.length);
          await Promise.all(branches1.map(async (branch)=> {
            await prisma.see_marks.createMany({
              data:{
                CIE_total:faker.random.numeric((99)),
                SEE_total:faker.random.numeric((100)),
                Grand_total:faker.random.numeric((100)),
                Sem_no:Semesters[randomIndex21].sem_no,
                studentId:Students[randomIndex22].id,
                Branch_name:branch?.branch_name!,
                Academic_year: academic_years1[randomIndex20].Academic_year, 
              }
            })
          }))



          
          
          const Subjects = await prisma.subjects.findMany();
          const randomIndex200 = Math.floor(Math.random() * academic_years.length)
          await Promise.all(branches1.map(async (branch)=> {
            await prisma.cie_marks.createMany({
              data:{
                CIE_total:faker.random.numeric((99)),
                Branch_name:branch?.branch_name!,
                sub_marks:faker.random.numeric((100)),
                studentId:Students[randomIndex22].id,
                Sub_code:Subjects[randomIndex200].sub_code,
              }
            })
          }))



          for (let i = 0; i < 5; i++) {
          const Admins = await prisma.admin.findMany();
          const randomIndex30 = Math.floor(Math.random() * Admins.length);
            await prisma.check_assignments.create({
              data:{
              adminId:Admins[randomIndex30].id
              }
            })
          }



            for (let i = 0; i < 5; i++) {
            const Staffs = await prisma.staff.findMany();
            const randomIndex31 = Math.floor(Math.random() * Staffs.length);
            const branch = await prisma.branch.findMany();
            const randomIndex32 = Math.floor(Math.random() * branch.length);
            const Students1 = await prisma.student.findMany();
            const randomIndex33 = Math.floor(Math.random() * Students1.length);
            const check_assignments = await prisma.check_assignments.findMany();
            const randomIndex34 = Math.floor(Math.random() * check_assignments.length);
              await prisma.assignments.createMany({
                data:{
                Unit_no:faker.random.numeric((50)),
                title:faker.lorem.words(3),
                description:faker.lorem.sentence(),
                deadline:faker.date.future(),
                file_pdf:faker.internet.url(),
                staffId:Staffs[randomIndex31].id,
                Branch_name:branch[randomIndex32].branch_name,
                studentId:Students1[randomIndex33].id,
                check_assignmentsId:check_assignments[randomIndex34].id,
                }
              })
            }


            for (let i = 0; i < 5; i++) {
              const Admins = await prisma.admin.findMany();
              const randomIndex35 = Math.floor(Math.random() * Admins.length);
                await prisma.check_attendance.create({
                  data:{
                  adminId:Admins[randomIndex35].id,
                  }
                })
              }
    

              for (let i = 0; i < 5; i++) {
                const Subjects = await prisma.subjects.findMany();
                const randomIndex36 = Math.floor(Math.random() * Subjects.length);
                const branch = await prisma.branch.findMany();
                const randomIndex37 = Math.floor(Math.random() * branch.length);
                const Students1 = await prisma.student.findMany();
                const randomIndex38 = Math.floor(Math.random() * Students1.length);
                const check_attendance = await prisma.check_attendance.findMany();
                const randomIndex39 = Math.floor(Math.random() * check_attendance.length);
                  await prisma.attendance.createMany({
                    data:{
                    status:faker.datatype.boolean(),
                    Date:faker.date.recent(),
                    hour_number:faker.random.numeric(),
                    Branch_name:branch[randomIndex37].branch_name,
                    studentId:Students1[randomIndex38].id,
                    check_attendanceId:check_attendance[randomIndex39].id,
                    Sub_code:Subjects[randomIndex36].sub_code
                    }
                  })
                }




 for (let i = 0; i < 5; i++) {
              const Admins = await prisma.admin.findMany();
              const randomIndex40 = Math.floor(Math.random() * Admins.length);
              const Staffs = await prisma.staff.findMany();
              const randomIndex41 = Math.floor(Math.random() * Staffs.length);
                await prisma.check_monthly_report.createMany({
                  data:{
                  adminId:Admins[randomIndex40].id,
                  staffId:Staffs[randomIndex41].id,
                  }
                })
              }










              for (let i = 0; i < 5; i++) {
                const Subjects = await prisma.subjects.findMany();
                const randomIndex43 = Math.floor(Math.random() * Subjects.length);
                const branch = await prisma.branch.findMany();
                const randomIndex44 = Math.floor(Math.random() * branch.length);
                const Students1 = await prisma.student.findMany();
                const randomIndex45 = Math.floor(Math.random() * Students1.length);
                const check_monthly_report = await prisma.check_monthly_report.findMany();
                const randomIndex46 = Math.floor(Math.random() * check_monthly_report.length);
                const Semesters = await prisma.semesters.findMany();
                const randomIndex47 = Math.floor(Math.random() * Semesters.length);
                  await prisma.monthly_report.createMany({
                    data:{
                 Month:faker.date.past(),
                 Subject_percentage: faker.random.numeric((2)),
                 Branch_name:branch[randomIndex44].branch_name,
                 semestersSem_no:Semesters[randomIndex47].sem_no,
                 studentId:Students[randomIndex45].id,
                 check_monthly_reportId:check_monthly_report[randomIndex46].id,
                 Sub_code:Subjects[randomIndex43].sub_code
                    }
                  })
                }





                for (let i = 0; i < 4; i++) {
                  const Staffs = await prisma.staff.findMany();
            const randomIndex48 = Math.floor(Math.random() * Staffs.length);
            const Subjects = await prisma.subjects.findMany();
            const randomIndex49 = Math.floor(Math.random() * Subjects.length);
                  await prisma.allocate_sub.createMany({
                    data: {
                      staffId:Staffs[randomIndex48].id,
                      subjectsSub_code:Subjects[randomIndex49].sub_code
                    },
                  });
                }
            

                for (let i = 0; i < 4; i++) {
                  const branch = await prisma.branch.findMany();
            const randomIndex50 = Math.floor(Math.random() * branch.length);
            const Subjects = await prisma.subjects.findMany();
            const randomIndex51 = Math.floor(Math.random() * Subjects.length);
            const Semesters = await prisma.semesters.findMany();
            const randomIndex52 = Math.floor(Math.random() * Semesters.length);
            const EXAM_TYPES = ['ONLINE', 'OFFLINE'];
                  await prisma.exam_schedule.createMany({
                    data: {
                    type_of_exam:faker.helpers.arrayElement(EXAM_TYPES),
                    exam_date_time:faker.date.future(),
                    branchBranch_name:branch[randomIndex50].branch_name,
                    subjectsSub_code:Subjects[randomIndex51].sub_code,
                    semestersSem_no:Semesters[randomIndex52].sem_no
                    },
                  });
                }






                for (let i = 0; i < 4; i++) {
                  const Admins = await prisma.admin.findMany();
            const randomIndex53 = Math.floor(Math.random() * Admins.length);
            const Students = await prisma.student.findMany();
            const randomIndex54 = Math.floor(Math.random() * Students.length);
            const ISSUE_TYPE = ['Abuse', 'Harassment', 'Hospitality', 'Marks', 'Security'];
                  await prisma.grievance_redressal.createMany({
                    data: {
                     issue_type:faker.helpers.arrayElement(ISSUE_TYPE),
                     issue_description:faker.lorem.sentences(),
                     Date: faker.date.recent(),
                     adminId:Admins[randomIndex53].id,
                     studentId:Students[randomIndex54].id
                    },
                  });
                }
            






  
}

main()
  .then(() => console.log("Success Baby 😘"))
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());