import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();


async function main() {
    const admin = await Prisma.admin.create({
        data: {
            admin_id:"admin01",
            first_name:"Narayana",
            last_name:"R",
            full_name:"Narayana R",
            email:"narayana.r@gmail.com",
            address:"Banashankari",
            gender:"Male",
            contact_number:"123455677",
            state:"Karnataka",
            city:"Bengaluru",
            password:"mypass123",
            admin_qualification:"LLB"

        }
        
    });

    
    const academic_year = await Prisma.academic_year.create({
        data: {
           year_number: 2020
        }
    });
    const branch = await Prisma.branch.create({
        data: {
           banch_name:"CS",
           academic_yearID:academic_year.ID
        }
    });
    const semester = await Prisma.semester.create({
        data: {
            sem_number:3,
            branchBranch_code:branch.branch_code
          
        }
    });
   
   
   

   
   
   

   
   
    const staff_remarks = await Prisma.staff_remarks.create({
        data: {
          remarks_category:"Discipline",
          remarks_description:"good behaviour and well disciplined teacher in the College!",
          adminId:admin.id
        }
    });
    const staff = await Prisma.staff.create({
        data: {
            staff_id:"5373wqq",
            first_name:"sharath",
            last_name:"BS",
            full_name:"Sharath BS",
            email:"123@gmail.com",
            address:"earth",
            gender:"m",
            contact_number: "434333443",
            city:"bang",
            state:"ka",
            password:"b ngng",
            staff_qualification:"dont know",
            semesterSem_id:semester.sem_id,
            staff_remarksRemarks_ID:staff_remarks.remarks_ID,
            academic_yearID:academic_year.ID,
            branchBranch_code:branch.branch_code
          
        }
    });

    const student_remarks = await Prisma.student_remarks.create({
        data: {
            remarks_category:"Discipline",
            remarks_description:"good behaviour and well disciplined student in the College!",
            adminId:admin.id
        }
    });

   


    const see_marks = await Prisma.see_marks.create({
        data: {
         CIE_total : 50,
         SEE_total :300,
         Grand_total:350,
         staffId:staff.id,
         adminId:admin.id
        }
    });


    const CIE_marks = await Prisma.cIE_marks.create({
        data: {
            subject_marks: 50,
            CIE_total:50,
            staffId:staff.id,
            adminId:admin.id
        }
    });

    const subject = await Prisma.subject.create({
        data: {
          subject_name:"Full Stack Dev",
          sem_num: semester.sem_id
        }
    });
    const attendance = await Prisma.attendance.create({
        data: {
            staffId:staff.id,
            adminId:admin.id,
            subjectSub_code:subject.sub_code
        }
    });

    const monthly_report = await Prisma.monthly_report.create({
        data: {
        Month:"2020-06-29",
        Subject_percentage:"60%",
        adminId:admin.id,
        subjectSub_code:subject.sub_code
        }
    });




    const student = await Prisma.student.create({
        data: {
            first_name:"sharath",
            last_name:"BS",
            full_name:"Sharath BS",
            reg_no:"382CS20013",
            email:"123@gmail.com",
            address:"earth",
            gender:"m",
            contact_number: "434333443",
            city:"bang",
            state:"ka",
            password:"b ngng",
            attendanceAttendance_id:attendance.attendance_id,
            monthly_reportMonthly_repo_id:monthly_report.monthly_repo_id,
            student_remarksRemarks_ID:student_remarks.remarks_ID,
            see_marksSee_id:see_marks.see_id,
            cIE_marksCie_id:CIE_marks.cie_id,
            academic_yearID:academic_year.ID,
            branchBranch_code:branch.branch_code,
            semesterSem_id:semester.sem_id
        }
    });

   
   



    const exam_schedule = await Prisma.exam_schedule.create({
        data: {
           exam_at: new Date(),
           adminId:admin.id,
           subjectSub_code:subject.sub_code
        }
    });
    const type_of_exam = await Prisma.type_of_exam.create({
        data: {
          exam_type: "Online",
          Exam_ID:exam_schedule.exam_ID
        }
    });

    const girevence_redressal = await Prisma.girevence_redressal.create({
        data: {
          issue_details:"unhygienic classroom number 12",
          status:"on process",
          student_name:student.reg_no,
          admin_name:admin.email
        }
    });

    

    


    


    const notes = await Prisma.notes.create({
        data: {
         title:"chapter1",
         content:"rocky kills garuda",
         pdf:"ur pdf will bw here",
         studentId:student.id,
         staffId:staff.id,
         branchBranch_code:branch.branch_code,
         subjectSub_code:subject.sub_code,
         semesterSem_id:semester.sem_id
        }
    });



    const assignments = await Prisma.assignments.create({
        data: {
         title:"assignment 01",
         description:"make a report on JB Portals",
         deadline: "2023-6-10",
         submit_assignment:"ur pdf file will be here",
         studentId:student.id,
         staffId:staff.id,
         branchBranch_code:branch.branch_code,
         subjectSub_code:subject.sub_code
        }
    });


    const unit_test = await Prisma.unit_test.create({
        data: {
         UT_name:"UNIT TEST NO>1",
         Date_time: "2023-04-30 13:45:00",
         Stu_name:student.reg_no,
         Staff_name:staff.staff_id,
         adminId:admin.id,
         branchBranch_code:branch.branch_code,
         subjectSub_code:subject.sub_code,
         semesterSem_id:semester.sem_id
        }
    });



console.log("Sucessfully seeded");
}
main()
.catch((e)=>console.error(e))
.finally(async()=>{
    await Prisma.$disconnect();
});