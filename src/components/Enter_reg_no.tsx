import { SetStateAction, useState } from "react";

const StudentRegistration = () => {
  const [regNo, setRegNo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setRegNo(event.target.value);
    setErrorMessage("");
  };

  const handleKeyDown = (event: {
    preventDefault(): unknown; key: string; keyCode: number;
  }) => {
    const allowedKeys = /^[A-Z0-9]+$/;
    const { key, keyCode } = event;

    // Allow usage of backspace (keyCode: 8), left arrow (keyCode: 37), and right arrow (keyCode: 39)
    if (keyCode === 8 || keyCode === 37 || keyCode === 39) {
      return;
    }

    if (!allowedKeys.test(key)) {
      event.preventDefault();
      setErrorMessage("Capital letters and numeric characters only");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="relative">
      <input
        className="relative w-245 h-44 cursor-default rounded-lg border border-secondary bg-brand py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
        style={{ width: '300px', height: '44px', borderRadius: '6px', padding: '10px 20px', justifyContent: 'space-between' }}
        type="text"
        placeholder="Enter student Reg No."
        value={regNo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {errorMessage && (
        <p className="absolute bottom-[-25px] left-0 text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default StudentRegistration;
