import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const branch = [
  { name: ' Proceeding' },
  { name: 'Success' },
  { name: 'Pending' },
  
]

export default function Example() {
  const [selected, setSelected] = useState(null)

  const defaultOption = { name: 'Pending' }
  const displayValue = selected?.name || defaultOption.name


  return (
    <div className='w-[-1900px]'>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-245 h-44 cursor-default rounded-lg bg-secondary py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm" style={{ width: '245px', height: '44px', left: '0px', top: '0px', borderRadius: '6px', padding: '10px 20px', justifyContent: 'space-between' }}>
            <span className="block truncate">{displayValue}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-245 overflow-auto rounded-md bg-white py-1 text-base shadow-lg shadow-blue-400 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" style={{ width: '245px' }}>
              {branch.map((branch, branchIdx) => (
                <Listbox.Option
                  key={branchIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary text-brand' : 'text-gray-900'
                    }`
                  }
                  value={branch}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {branch.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}