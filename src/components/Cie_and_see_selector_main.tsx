"use client"
import { useState } from 'react';
import { Tab } from '@headlessui/react';

import Branch_dropdown from './Branch_dropdown';

import Subject_dropdown from './Subject_dropdown';
import Retrieve_marks_button from './Retrieve_marks_button';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedCategory, setSelectedCategory] = useState('Upload_CIE_Marks');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = {
    Upload_CIE_Marks: [
      {
        id: 1,
        title: 'Upload_CIE_Marks Component 1',
      },
      // Add more Upload_CIE_Marks components here
    ],
    Upload_SEE_Marks: [
      {
        id: 1,
        title: 'Upload_SEE_Marks Component 1',
      },
      // Add more staff components here
    ],
  };

  return (
    <div className="w-[1000px] h-[1000px] px-2 py-16 sm:px-0 absolute top-[-15px] left-[180px]">
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
                'rounded-xl h-[410px] bg-white p-3',
                'ring-white ring-opacity-600 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="w-full h-full border border-gray-300 rounded-xl relative">
                {selectedCategory === 'Upload_SEE_Marks' && (
                  <>
                    {/* Render staff components here */}
                    <div className="absolute top-[-55px] right-[900px] transform -translate-x-1/2 -translate-y-1/2">
                      <Branch_dropdown />
                    </div>
                    <div className="absolute top-[-55px] right-[380px] transform -translate-x-1/2 -translate-y-1/2">
                      <Subject_dropdown />
                    </div>

                    <div className="absolute top-[345px] right-[25px] transform -translate-x-1/2 -translate-y-1/2">
                      <Retrieve_marks_button />
                    </div>
                  </>
                )}
                {selectedCategory === 'Upload_CIE_Marks' && (
                  <>
                    {/* Render student components here */}
                    <div className="absolute top-[5px] right-[900px] transform -translate-x-1/2 -translate-y-[60px]">
                      <Branch_dropdown />
                    </div>
                    <div className="absolute top-[-55px] right-[380px] transform -translate-x-1/2 -translate-y-1/2">
                      <Subject_dropdown />
                    </div>
                    <div className="absolute top-[345px] right-[-25px] transform -translate-x-1/2 -translate-y-1/2">
                      <Retrieve_marks_button />
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