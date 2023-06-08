export default function RectangleFrame() {
    return (
      <div className="h-[400px] w-[800px] absolute right-[250px] top-[120px] bg-white border-[1px] border-secondary rounded-[20px] flex flex-col items-center justify-center">
        <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[3px]">EMAIL VERIFICATION</div>
        <div className="flex justify-center items-center h-full flex-col">
          <div className="text-black font-serif absolute right-[130px] top-[170px]">
            Check your main <a href="mailto:ismart.jbportals@gmail.com" className="text-secondary hover:underline">ismart.jbportals@gmail.com</a>. We sent you a reset password link,<br/>
            <span style={{ lineHeight: '4' }}>Click on the link to reset password.</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
        </div>
      </div>
    );
  }
  