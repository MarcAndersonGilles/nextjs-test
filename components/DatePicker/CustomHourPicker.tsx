import React, { useState } from 'react';
import IconChevronDown from '../icons/IconChevronDown';

type Hour = {
    hour: number;
}[]
const arrayOfHours: Hour = []

for (let hour = 0; hour < 24; hour++) {
    arrayOfHours.push({ hour })

}

const CustomHourPicker = () => {
    const today = new Date()
    const getcurrentHour = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours())
  
    const [isOpen, setIsOpen] = useState(false)
    const [selectedHour, setSelectedHour] = useState('');

    return (
        <div className='flex  justify-between items-center text-sm relative max-w-xs  border-y rounded-lg border-[#E4E4E7] border bg-white w-full'
        >
            <div className='flex justify-between w-full p-1'>
                <input className='flex items-center text-xs font-medium  placeholder:text-xs text-figma-neutre-200      placeholder:text-figma-neutre-200'
                    placeholder='Heure de début'
                    value={selectedHour}
                    onChange={(e) => setSelectedHour(e.target.value)}
                />

                <button className='flex'
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IconChevronDown className='w-6 h-6' fill={`${isOpen ? '#33DEBD' : '#52525B'}`} />
                </button>



            </div>


            <div className={` mt-2 absolute inset-0 top-full w-full rounded-b-lg  h-[200px] overflow-auto  ${isOpen ? "flex" : "hidden"}`}>
                <div className='w-full'>
                    <ul className='flex flex-col  bg-white'>
                        {arrayOfHours.map((item, index) => (
                            <li key={index} className='flex gap-1 p-4 hover:bg-primary border-y  text-[#52525B]  border'
                                onClick={() => {
                                    setSelectedHour(`${item.hour}:00`)
                                    setIsOpen(false)
                                }}
                            >
                                {item.hour}:00
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CustomHourPicker;