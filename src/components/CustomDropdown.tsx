import { useState } from 'react'

interface Option {
    label: string
    value: string
  }
  
  interface CustomDropdownProps {
    options: Option[]
    onSelect: (option: Option) => void
  }





  const CustomDropdown = ({ options, onSelect }: CustomDropdownProps) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  
    const handleSelectOption = (option: Option) => {
      setSelectedOption(option)
      onSelect(option)
    }

  return (
    <div className="relative inline-block text-left h-screen">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
          {selectedOption ? selectedOption.label : 'Select an option'}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {options.map((option) => (
            <button key={option.value} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleSelectOption(option)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomDropdown
