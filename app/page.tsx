"use client"
import React, { useState } from 'react'
import ArrayForRatio from '@/components/ArrayForRatio'
import DatePickerMessage from '@/components/CustomDatePicker';




export default function Home() {
  const [canSelectBeforeDate, setCanSelectBeforeDate] = useState(true);

  return (
    <main className="flex  min-h-screen flex-col  p-24 bg-gray-400">
     
        {/* <ArrayForRatio /> */}
        <div className='max-w-[260px] text-black bg-white'>
        <DatePickerMessage canSelectBeforeDate={canSelectBeforeDate} /> 
        </div>
        
    </main>
  )
}
