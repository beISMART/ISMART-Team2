"use client"

import GR_status_dropdown from "@/components/GR_status_dropdown"
import { ColumnDef } from "@tanstack/react-table"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Grievance = {


  status: "pending" | "processing" | "success" | "failed"
  branch : "Computer Science" | "Mechanical"  |  "EEE"  | "Civil"  |  "Medical"  
  date: String
  semester : 1 | 2  | 3 |4|5|6
  student: String
  issue: String
}

export const columns: ColumnDef<Grievance>[] = [
 
    {
        accessorKey: "date",
        header: "Date",
      },
    {
        accessorKey: "branch",
        header: "Branch",
      },
      {
        accessorKey: "semester",
        header: "Semester",
      },
      {
        accessorKey: "student",
        header: "Student Name",
      },
      
      {
        accessorKey: "issue",
        header: "Issue",
      },
      {
        accessorKey: "status",
        cell: GR_status_dropdown,
       
      },
 

      
]

