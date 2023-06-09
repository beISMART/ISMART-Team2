"use client"
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Roboto_Slab } from 'next/font/google';
import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';
import { RiUserAddLine } from 'react-icons/ri';
import { BsFillCalendarFill } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { AiOutlineForm } from 'react-icons/ai';
import { IoMdChatboxes } from 'react-icons/io';

interface Props {
  children: React.ReactNode;
}

const IsmartFont = Roboto_Slab({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setExpanded(false);
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-primary relative">
      <header
        style={IsmartFont.style}
        className="h-14 border-b border-secondary flex items-center px-5 text-xl font-mono font-bold"
      >
        {expanded || hovered ? (
          <FiChevronLeft
            className="mr-2 cursor-pointer"
            size={18}
            onClick={toggleSidebar}
          />
        ) : (
          <FiChevronRight
            className="mr-2 cursor-pointer"
            size={18}
            onClick={toggleSidebar}
          />
        )}
        ISMART-PR2
      </header>
      <div className="w-full h-full flex">
        <nav
          className={`h-full ${
            expanded ? 'w-[180px] sidebar-expanded' : 'w-[60px] sidebar-collapsed'
          } border-r bg-secondary p-8`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="w-full flex flex-col gap-8">
            <Link href={'/dashboard_student'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg '
                } flex hover:font-medium hover:cursor-pointer whitespace-nowrap`}
              >
                {expanded || hovered ? (
                  <>
                    <AiOutlineHome className="mr-2 sidebar-icons" size={18} />
                    Home
                  </>
                ) : (
                  <AiOutlineHome className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Add_student'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <RiUserAddLine className="mr-2 sidebar-icons" size={18} />
                    Add Student
                  </>
                ) : (
                  <RiUserAddLine className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Add_staff'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <RiUserAddLine className="mr-2 sidebar-icons" size={18} />
                    Add Staff
                  </>
                ) : (
                  <RiUserAddLine className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Attendance'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <BsFillCalendarFill className="mr-2 sidebar-icons" size={18} />
                    Attendance
                  </>
                ) : (
                  <BsFillCalendarFill className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Exam_schedule'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <AiOutlineFileText className="mr-2 sidebar-icons" size={18} />
                    Exam Schedule
                  </>
                ) : (
                  <AiOutlineFileText className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Remarks'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <AiOutlineBook className="mr-2 sidebar-icons" size={18} />
                    Remarks
                  </>
                ) : (
                  <AiOutlineBook className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Cie_and_see_marks'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                } flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <AiOutlineForm className="mr-2 sidebar-icons" size={18} />
                    CIE & SEE Marks
                  </>
                ) : (
                  <AiOutlineForm className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            <Link href={'/dashboard_student/Grievance_redressal'}>
              <li
                className={`${
                  expanded ? 'w-full text-sm' : 'w-[60px] text-lg'
                }  flex whitespace-nowrap hover:font-medium hover:cursor-pointer`}
              >
                {expanded || hovered ? (
                  <>
                    <IoMdChatboxes className="mr-2 sidebar-icons" size={18} />
                    Grievance redressal
                  </>
                ) : (
                  <IoMdChatboxes className="sidebar-icons" size={18} />
                )}
              </li>
            </Link>
            {/* Add the remaining sidebar links here */}
          </ul>
        </nav>
        <main className="w-full h-full border-blue-300 flex items-center justify-center">
          {children}
        </main>
      </div>
      <style jsx>{`
        .sidebar-expanded {
          width: 180px;
          transition: width 0.3s;
        }

        .sidebar-collapsed {
          width: 60px;
          transition: width 0.3s ;
        }

        .sidebar-expanded .sidebar-icons,
        .sidebar-collapsed .sidebar-icons {
          position: absolute;
          top: 0;
          left: ${expanded ? '180px' : '60px'};
          padding: 0 16px;
          transition: left 0.3s;
        }

        .sidebar-expanded .sidebar-icons {
          right: -18px;
          transition: right 0.3s;
        }

        .sidebar-collapsed .sidebar-icons {
          right: calc(100% - 18px);
          transition: right 0.3s;
        }

        .sidebar-expanded li {
          font-size: 10px;
        }

        .sidebar-collapsed li {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
