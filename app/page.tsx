"use client"
import React, { useState } from 'react'
import CustomDatePicker2 from '@/components/CustomDatePicker2';


export default function Home() {
  const [canSelectBeforeDate, setCanSelectBeforeDate] = useState(false);
  const [canSelectAfterDate, setCanSelectAfterDate] = useState(true);

  return (
    <main className="flex  min-h-screen flex-col  p-24 bg-gray-400">
     
        {/* <ArrayForRatio /> */}
        <div className='max-w-[260px] text-black bg-white'>
        {/* <DatePickerMessage canSelectBeforeDate={canSelectBeforeDate} />  */}
        <CustomDatePicker2 canSelectBeforeDate={canSelectBeforeDate} canSelectAfterDate={canSelectAfterDate} />
        </div>
        
    </main>
  )
}
