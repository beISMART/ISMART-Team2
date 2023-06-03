import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

interface props {
  children: React.ReactNode;
}

const IsmartFont = Roboto_Slab ({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
<header style={IsmartFont.style} className="h-35 border-b bg-primary text-black flex items-center">
      <Image src="/ISMART.png" alt="ISMART logo" width={312} height={243} />
      </header>
      <div className="w-full h-full flex ">
        <nav className="h-full w-[180px]    bg-secondary p-15">
          <ul className="w-full flex flex-col gap-20">
            <Link href={"/dashboard"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/dashboard/Add_student"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Add Student
              </li>
            </Link>
            <Link href={"/dashboard/Add_staff"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Add Staff
              </li>
            </Link>
            <Link href={"/dashboard/Attendance"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Attendance
              </li>
            </Link>
            <Link href={"/dashboard/Exam_schedule"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Exam Schedule
              </li>
            </Link>
            <Link href={"/dashboard/Remarks"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Remarks
              </li>
            </Link>
            <Link href={"/dashboard/Cie_and_see_marks"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                CIE & SEE Marks
              </li>
            </Link>
            <Link href={"/dashboard/Grievance_redressal"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Grievance Redressal
              </li>
            </Link>
          </ul>
        </nav>
        <main className="w-full h-full bg-primary flex items-center justify-center overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}