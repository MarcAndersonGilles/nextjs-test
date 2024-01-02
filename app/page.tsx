"use client"
import React, { useState } from 'react'
import CustomDatePicker from '@/components/DatePicker/CustomDatePicker';
import CustomHourPicker from '@/components/DatePicker/CustomHourPicker';


export default function Home() {
  const [canSelectBeforeDate, setCanSelectBeforeDate] = useState(false);
  const [canSelectAfterDate, setCanSelectAfterDate] = useState(true);

  return (
    <main className="flex  min-h-screen flex-col  p-24 bg-gray-400">
     
        {/* <ArrayForRatio /> */}
        <div className='max-w-[260px]'>
        <CustomDatePicker canSelectBeforeDate={canSelectBeforeDate} canSelectAfterDate={canSelectAfterDate} />
        </div>

        <div>
          <CustomHourPicker />
        </div>
        
    </main>
  )
}
