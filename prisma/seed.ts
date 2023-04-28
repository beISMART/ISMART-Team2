import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getadmin = (): Prisma.adminCreateInput[] =>[
    {
        admin_id: "5546WE",
        first_name: "Narayana",
        last_name: "R",
        full_name: "Narayana R",
        email:"jbportalsblr@gmail.com",
        address:"Banashankari",
        gender: "Male",
        contact_number: 123567889,
        state: "Karnataka",
        city: "Bengaluru",
        password: "mypass123",
        admin_qualification: "B-tech, LLB"
    },
    {
        admin_id: "bo",
        first_name: "manoj",
        last_name: "sir",
        full_name: "manoj sir",
        email:"Manoj1@gmail.com",
        address:"Banashankari",
        gender: "Male",
        contact_number: 78367893,
        state: "Karnataka",
        city: "Bengaluru",
        password: "mypass1234",
        admin_qualification: "B-tech, LLB"
    },
    {
        admin_id: "c1237hh",
        first_name: "Supriya",
        last_name: "KS",
        full_name: "Supriya KS ",
        email:"supriya@gmail.com",
        address:"Banashankari",
        gender: "Female",
        contact_number: 5372782882,
        state: "Karnataka",
        city: "Bengaluru",
        password: "mypass12345",
        admin_qualification: "B-tech, LLB"
    },
] 

const main = ()=>{
    return Promise.all(getadmin().map((adminInput)=>client.admin.create({
        data:adminInput
    })))
}


main().then(()=>{
    console.log("Sucessfully Seeded")
}).catch((e)=>{
    console.log(e);
})
