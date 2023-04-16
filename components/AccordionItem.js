import { useState } from "react";

const AccordionItem = ({ faq }) => {
    const [isActive, setIsActive] = useState(false);
    const { question, answer } = faq;
    return (
        <div className="border-b-2 border-[#006D6C] py-8">
        <div
        className="flex flex-row justify-between gap-x-10 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
        >
        {isActive? <div className="text-[#006D6C] font-bold xl:text-xl lg:text-lg">{question}</div>:<div className="text-[#262626] font-bold xl:text-xl lg:text-lg">{question}</div>}
        <div>
            {isActive ? 
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.18799 1.40761L7.8737 7.35046L14.5594 1.40761" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>: 
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999526 14.8715L6.94238 8.18575L0.999525 1.50003" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
        </div>
        </div>
        {isActive && <div className="text-[#006D6C] pt-5">{answer}</div>}
    </div>
    );
};   
export default AccordionItem;