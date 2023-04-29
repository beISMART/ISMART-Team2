import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getadmin = (): Prisma.adminCreateInput[] =>[
   
{
    first_name:"kamal",         
    last_name:"nathmallick",           
    full_name:"knmallick",           
    reg_no: "382CS20009" ,                       
    email :"kamal@gmail.com",             
    address :"kr puram",            
    gender    :"male" ,                                 
    contact_number :65465776868,    
    city:"bangalore",
    state:"karnataka",   
    password:"mypassword1",    
    stu_academic_year : 2020-23,            
    branchID: "20CS",          
    semesterSem_id  :  "06"
},
{
    
    first_name:"lipina",         
    last_name:"mallick",           
    full_name:"lipinamallick",           
    reg_no: "382CS200011" ,                       
    email :"lipina@gmail.com",             
    address :"kr puram",            
    gender    :"female" ,        
    contact_number :65465776858,    
    city:"bangalore",
    state:"karnataka",   
    password:"mypassword12",    
    stu_academic_year : 2020-23,            
    branchID: "20CS",          
    semesterSem_id  :  "06"
},
{
    first_name:"M.",         
    last_name:"anish",           
    full_name:"M.anish",           
    reg_no: "382CS20016" ,                       
    email :"anish@gmail.com",             
    address :"kr puram",            
    gender    :"male" ,        
    contact_number :6546577868,    
    city:"bangalore",
    state:"karnataka",   
    password:"mypassword123",    
    stu_academic_year : 2020-23,            
    branchID: "20CS",          
    semesterSem_id  :  "06"
},
{

    staff_id : "ST475823" ,          
    first_name  :"kamal",      
    last_name:"mallick",
    full_name:"kamalmallick"  ,
    email:"kamal@gmail.com",
    address:"kr puram",
    gender  :"male",            
    contact_number  :7465745477,   
    city:"bangalotre",
    state:"karnataka",    
    password:"mypassword1", 
    staff_qualification: "diploma",
    ac_year : 2020-23  ,          
    branch_name : "20CS"   ,
    subject_name :"mathematics"
  },
  {
      
    staff_id : "ST4674677" ,          
    first_name  :"lipina",      
    last_name:"mallick",
    full_name:"lipinamallick"  ,
    email:"lipina@gmail.com",
    address:"kr puram",
    gender  :"female",            
    contact_number  :7465745477,   
    city:"bangalotre",
    state:"karnataka",    
    password:"mypassword12", 
    staff_qualification: "diploma",
    ac_year : 2020-23  ,          
    branch_name : "20CS"   ,
    subject_name :"EEE"
  },
  {
    staff_id : "ST47526343" ,          
    first_name  :"M.",      
    last_name:"anish",
    full_name:"M.anish"  ,
    email:"anish@gmail.com",
    address:"kr puram",
    gender  :"male",            
    contact_number  :7465743377,   
    city:"bangalore",
    state:"karnataka",    
    password:"mypassword123", 
    staff_qualification: "diploma",
    ac_year : 2020-23  ,          
    branch_name : "20CS"   ,
    subject_name :"DCF"
  },
  {
    admin_email :"jbportalsblr@gmail.com"  ,             
    admin_name :"Narayana" ,                
    password   :"mypass123"                 
  },
  {
    admin_email :"Manoj1@gmail.com"  ,             
    admin_name :"manoj" ,                
    password   :"mypass1234"                 
  },
  {
    admin_email :"supriya@gmail.com"  ,             
    admin_name :"Supriya" ,                
    password   :"mypass12345"                 
  },
  {
    staff_email :"kamal@gamil.com",
    satff_name  :"kamal",
    password    :"mypassword1"
  },
  {
    staff_email :"lipina@gamil.com",
    satff_name  :"lipina",
    password    :"mypassword12"
  },
  {
    staff_email :"anish@gamil.com",
    satff_name  :"M.anish",
    password    :"mypassword123"
  },
  {
    student_email :"kamal@gmail.com" ,               
    student_name   :"kamal",              
    password :"mypassword123"
  },
  {
    student_email :"lipina@gmail.com" ,               
    student_name   :"lipina",              
    password :"mypassword12"
  },
  {
    student_email :"anish@gmail.com" ,               
    student_name   :"M.anish",              
    password :"mypassword123"
  }


] 

const main = ()=>{
    return Promise.all(getadmin().map((adminInput)=>client.admin.create({
        data:adminInput
    })))
}


main().then(()=>{
    console.log("Sucessfully Seeded here")
}).catch((e)=>{
    console.log(e);
})
