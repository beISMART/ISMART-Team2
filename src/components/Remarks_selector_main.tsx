"use client"
import { useState } from 'react';
import { Tab } from '@headlessui/react';

import CustomDropdownForSemester from './Semester_dropdown';
import Remarks_category from './Remarks_category';
import Remarks_description from './Remarks_description';
import Branch_dropdown from './Branch_dropdown';
import Enter_reg_no from './Enter_reg_no';
import Department_dropdown from './Department_dropdown';
import Enter_staff_id from './Enter_staff_id';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedCategory, setSelectedCategory] = useState('Student');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = {
    Student: [
      {
        id: 1,
        title: 'Student Component 1',
      },
      // Add more student components here
    ],
    Staff: [
      {
        id: 1,
        title: 'Staff Component 1',
      },
      {
        id: 2,
        title: 'Staff Component 2',
      },
      // Add more staff components here
    ],
  };

  return (
    <div className="w-[1000px] h-[1000px] px-2 py-1 sm:px-0 absolute top-[15px] left-[180px]">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-secondary/95 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-dark-text',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((_, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  border-[3px] border-secondary h-[410px] bg-white p-3',
                'ring-white ring-opacity-600 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="w-full h-full border border-gray-300 rounded-xl relative">
                {selectedCategory === 'Staff' && (
                  <>
                    <div className="absolute top-[250px] left-[200px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Enter_staff_id/>
                    </div>
                    <div className="absolute top-[0px] left-[10px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Department_dropdown />
                    </div>
                   
                    
                    <div className="absolute top-[190px] right-[-250px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Remarks_description />
                    </div>
                   
                    <div className="absolute top-[0px] left-[300px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Remarks_category />
                    </div>
                  </>
                )}
                {selectedCategory === 'Student' && (
                  <>
                    {/* Render student components here */}
                    <div className="absolute top-[250px] left-[200px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Enter_reg_no />
                    </div>
                    <div className="absolute top-[0px] left-[10px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Branch_dropdown />
                    </div>
                   
                    
                    <div className="absolute top-[190px] right-[-250px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Remarks_description />
                    </div>
                    <div className="absolute top-[0px] left-[350px] transform -translate-x-1/2 -translate-y-[60px]">
                      <CustomDropdownForSemester />
                    </div>
                    <div className="absolute top-[0px] left-[700px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Remarks_category />
                    </div>
                    
                    
                  </>
                )}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
