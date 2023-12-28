import React, { Fragment, useState } from 'react';
import IconChevronDown from './icons/IconChevronDown';

type datePickerProps = {
    canSelectBeforeDate: boolean;

}
function DatePickerMessage({ canSelectBeforeDate }: datePickerProps) {
    const [openDatePickerStart, setOpenDatePickerStart] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');

    const arrayOfWeek = [
        { week: 'Sun' },
        { week: 'Mon' },
        { week: 'Tue' },
        { week: 'Wed' },
        { week: 'Thu' },
        { week: 'Fri' },
        { week: 'Sat' },
    ];

    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());
    // const thisMonth = today.getMonth();
    // const currentDate = today.getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const getAllDaysOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const daysInCalendar = 42; // 6 rows * 7 days

    const previousMonthDays = [];
    const currentMonthDays = [];
    const nextMonthDays = [];

    console.log(firstDay.getDay())
    // Fill the array with the last days of the previous month
    for (let i = firstDay.getDay() - 1; i >= 0; i--) {
        const prevMonthDate = new Date(today.getFullYear(), today.getMonth(), -i);
        previousMonthDays.push(prevMonthDate.getDate());
    }

    // Fill the array with the days of the current month
    for (let i = 1; i <= getAllDaysOfMonth; i++) {
        currentMonthDays.push(i);
    }

    // Fill the array with the first days of the next month to complete the calendar
    const remainingDays =
        daysInCalendar - (previousMonthDays.length + currentMonthDays.length);
    for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDate = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            i
        );
        nextMonthDays.push(nextMonthDate.getDate());
    }

    const daysToShow = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];


    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };



    const [showYearDropdown, setShowYearDropdown] = useState(false);

    const toggleYearDropdown = () => {
        setShowYearDropdown(!showYearDropdown);
    };

    const handleYearSelect = (selectedYear: number) => {
        setCurrentDate(new Date(selectedYear, currentDate.getMonth(), 1));
        setShowYearDropdown(false);
    };


    const yearOptions = () => {
        const years = [];
        const currentYear = new Date().getFullYear();

        for (let year = 2100; year >= currentYear; year--) {
            years.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return years;
    };

    const handleDateClick = (day: number, isFromPreviousMonth: boolean, isFromNextMonth: boolean) => {
        // if (!canSelectBeforeDate && isFromPreviousMonth) {
        //     return; // Bloquer le clic si canSelectBeforeDate est false et la date appartient au mois précédent
        // }
        let selectedMonth = currentDate.getMonth();

        if (isFromPreviousMonth) {
            selectedMonth -= 1; // Ajustement du mois si le bouton provient de l'Array 1
        } else if (isFromNextMonth) {
            selectedMonth += 1; // Ajustement du mois si le bouton provient de l'Array 3
        }

        const selectedDateFormat = new Date(currentDate.getFullYear(), selectedMonth, day);



        const formattedDate = selectedDateFormat.toLocaleString('fr', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        setSelectedDate(formattedDate);
    };


    console.log(canSelectBeforeDate)
    return (
        <div className='flex flex-col gap-2 relative'>

            <div className='flex justify-between items-center  border-y rounded-lg border-[#E4E4E7] border relative '
            >
                <div className='flex justify-between w-full items-center p-1'>
                    <div className='flex items-center w-full'>
                        <input type="text"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            readOnly
                            placeholder='Date de début'
                            className='flex text-xs font-medium w-full border-none  text-figma-neutre-200 '

                        />

                        {/* <p className='flex text-sm text-center text-figma-neutre-200 '>{`Dimanche 3 Décembre 2023`}</p> */}
                    </div>
                    <div className=''>
                        <button className='flex '
                            type='button'
                            onClick={() => setOpenDatePickerStart(!openDatePickerStart)}


                        >
                            <IconChevronDown className='w-6 h-6' />
                        </button>

                    </div>
                </div>
            </div>

            <div className={` flex-col text-black text-sm bg-[#F4F4F5] p-2 gap-6 min-w-[280px] absolute top-full mt-2 ${openDatePickerStart ? "flex" : "hidden"}`}>
                <div className='flex items-center justify-around'>
                    <div>
                        <button type='button'
                            onClick={previousMonth}>
                            <IconChevronDown className='rotate-90' />
                        </button>

                    </div>

                    <div >
                        <div onClick={toggleYearDropdown}>
                            {showYearDropdown ? "" : (
                                <h1>{`${currentDate.toLocaleString('default', {
                                    month: 'long',
                                })}, ${currentDate.getFullYear()}`}</h1>
                            )}

                        </div>
                        {showYearDropdown && (
                            <select
                                value={currentDate.getFullYear()}
                                onChange={(e) => handleYearSelect(parseInt(e.target.value))}
                                className='bg-[#D4D4D8] rounded-lg border-figma-neutre-200'
                            >
                                {yearOptions()}
                            </select>
                        )}
                    </div>

                    <div onClick={nextMonth}>
                        <button type='button'
                            onClick={nextMonth}>
                            <IconChevronDown className='-rotate-90' />
                        </button>

                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <div className='flex ml-1   gap-2'>
                                {arrayOfWeek.map((item, index) => (
                                    <Fragment key={index}>
                                        <span className='w-[30px] h-[30px] text-center items-center'>{item.week}</span>
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                        <div className='flex gap-2 ml-1 flex-wrap '>
    {daysToShow.map((day, index) => {
        const isFromPreviousMonth = index < previousMonthDays.length;
        const isFromNextMonth = index >= previousMonthDays.length + currentMonthDays.length;

        const isDisabled =
            !canSelectBeforeDate &&
            ((isFromPreviousMonth && currentDate.getMonth() === firstDay.getMonth()) ||
            (isFromNextMonth && currentDate.getMonth() === firstDay.getMonth() + 1) ||
            (day !== null &&
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day) < new Date(today.getFullYear(), today.getMonth(), today.getDate())));

        return (
            <div
                key={index}
                className={`${day === today.getDate() &&
                    currentDate.getMonth() === today.getMonth() &&
                    currentDate.getFullYear() === today.getFullYear()
                    ? 'font-bold text-figma-neutre-200 bg-[#ECFDF5] border border-primary rounded-md'
                    : 'hover:bg-[#ECFDF5] hover:border-primary hover:rounded-md hover:font-bold hover:text-figma-neutre-200 hover:border'
                    } text-center w-[30px] h-[30px] flex items-center justify-center  ${index < previousMonthDays.length ||
                        index >= previousMonthDays.length + currentMonthDays.length
                        ? 'text-gray-500'
                        : 'text-black'
                    }
                    ${isDisabled ? "bg-[#FAFAFA] text-opacity-10" : ""}`}
            >
                <button
                    type='button'
                    className=''
                    disabled={isDisabled}
                    onClick={() => {
                        const isFromPrevious = isFromPreviousMonth && day !== null;
                        const isFromNext = isFromNextMonth && day !== null;

                        handleDateClick(day, isFromPrevious, isFromNext);
                        setOpenDatePickerStart(false);
                    }}
                >
                    {day !== null ? day : ''}
                </button>
            </div>
        );
    })}
</div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default DatePickerMessage;
