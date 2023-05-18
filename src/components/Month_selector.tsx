import { useState } from 'react';

interface MonthSelectorProps {
  onSelect: (month: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ onSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    onSelect(month);
  };

  return (
    <div className="month-selector">
      <h2 className="text-2xl text-black font-bold mb-4 ml-4">Select  Month</h2>
      <div className="w-[200px] space-y-4 ">
        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'January' ? 'bg-brand font-bold text-white' : 'bg-primary  text-black'
          }`}
          onClick={() => handleMonthSelect('January')}
        >
          January
        </div>
        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'February' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('February')}
        >
          February
        </div>
        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'March' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('March')}
        >
          March
        </div>


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'April' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('April')}
        >
          April
        </div>         


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'May' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('May')}
        >
          May
        </div>


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'June' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('June')}
        >
          June
        </div>


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'July' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('July')}
        >
          July
        </div>



        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'August' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('August')}
        >
          August
        </div>



        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'September' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('September')}
        >
          September
        </div>



        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'October' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('October')}
        >
          October
        </div>


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'November' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('November')}
        >
          November
        </div>


        <div
          className={`month-option p-4 rounded-lg cursor-pointer ${
            selectedMonth === 'December' ? 'bg-brand font-bold text-white' : 'bg-primary text-black'
          }`}
          onClick={() => handleMonthSelect('December')}
        >
          December
        </div>



        {/* Add other months here */}
      </div>
    </div>
  );
};

export default MonthSelector;
