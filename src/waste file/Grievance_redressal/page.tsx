import { Grievance, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Grievance[]> {
  // Fetch data from your API here.
  return [
    {
   
      branch: "Computer Science",
      semester : 5,
      date : "12/3/2023",
      student: "Anish",
      issue : "not provided hall ticket",
      status: "pending"


    },
    {
   
      branch: "Mechanical",
      semester : 3,
      date : "16/3/2023",
      student: "Kamal",
      issue : "unhygienic food",
      status: "success"


    },
    {
   
      branch: "EEE",
      semester : 1,
      date : "30/3/2023",
      student: "Yash",
      issue : "Student Abuse by teacher",
      status: "processing"


    },
    {
   
      branch: "Civil",
      semester : 1,
      date : "02/2/2023",
      student: "Darshan",
      issue : "Sem-books not provided",
      status: "failed"


    },
    {
   
      branch: "Civil",
      semester : 1,
      date : "02/2/2023",
      student: "Darshan",
      issue : "Sem-books not provided",
      status: "failed"


    },
    {
   
      branch: "Civil",
      semester : 1,
      date : "02/2/2023",
      student: "Darshan",
      issue : "Sem-books not provided",
      status: "failed"


    },
    {
   
      branch: "Civil",
      semester : 1,
      date : "02/2/2023",
      student: "Darshan",
      issue : "Sem-books not provided",
      status: "failed"


    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
