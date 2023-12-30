import React, { Fragment, useState } from 'react';
import IconChevronDown from './icons/IconChevronDown';

type datePickerProps = {
    canSelectBeforeDate: boolean;
    canSelectAfterDate: boolean;

}
function DatePickerMessage({ canSelectBeforeDate, canSelectAfterDate }: datePickerProps) {
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



    const date = new Date()
    const [currentDate, setCurrentDate] = useState(date);

    const previousMonthArray = []
    const currentMonthArray = []
    const nextMonthArray = []

    const getDaysOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)  // 0 is the last day of the month
    const getDaysLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)  // 0 is the last day of the month
    // const getDaysNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0)  // 0 is the last day of the month

    const getFirstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)


    for (let i = getDaysLastMonth.getDate() - (getFirstDayOfMonth.getDay()); i < getDaysLastMonth.getDate(); i++) {
        previousMonthArray.push(i + 1)
    }

    for (let i = 0; i < getDaysOfMonth.getDate(); i++) {
        currentMonthArray.push(i + 1)
    }

    const remainingDays = 42 - (previousMonthArray.length + currentMonthArray.length)


    for (let i = 0; i < remainingDays; i++) {
        nextMonthArray.push(i + 1)
    }


    const daysToShow = [...previousMonthArray, ...currentMonthArray, ...nextMonthArray];


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

        for (let year = currentYear + 7; year >= currentYear; year--) {
            years.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return years;
    };

    const handleDateClick = (day: number, isFromPreviousMonth: boolean, isFromNextMonth: boolean) => {

        let selectedMonth = currentDate.getMonth();

        if (isFromPreviousMonth) {
            selectedMonth -= 1; // Ajustement du mois si le bouton provient de l'Array 1
        } else if (isFromNextMonth) {
            selectedMonth += 1; // Ajustement du mois si le bouton provient de l'Array 3
        }

        const selectedDateFormat = new Date(currentDate.getFullYear(), selectedMonth, day);



        const formattedDate = selectedDateFormat.toLocaleString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        setSelectedDate(formattedDate);
    };

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


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
                                <h1>{`${capitalizeFirstLetter(currentDate.toLocaleString('fr-FR', {
                                    month: 'long',
                                }))}, ${currentDate.getFullYear()}`}</h1>
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
                                const today = new Date()
                                const isFromPreviousMonth = index < previousMonthArray.length;
                                const isFromNextMonth = index >= previousMonthArray.length + currentMonthArray.length;


                                const valueItem = isFromPreviousMonth ? new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day).toISOString() :
                                    isFromNextMonth ? new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day).toISOString() :
                                        new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString()

                                const disabledButtonsPrevious = !canSelectBeforeDate && valueItem < new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString() ? "bg-black bg-opacity-10 " : "";
                                const disabledButtonsNext = !canSelectAfterDate && valueItem > new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString() ? "bg-black bg-opacity-10 " : "";
                                return (
                                    <div
                                        key={index}
                                        className={`${valueItem === new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString()
                                            ? 'font-bold text-figma-neutre-200 bg-[#ECFDF5] border border-primary rounded-md'
                                            : 'hover:bg-[#ECFDF5] hover:border-primary  hover:rounded-md hover:font-bold hover:text-figma-neutre-200 hover:border'
                                            } text-center w-[30px] h-[30px] flex items-center justify-center ${disabledButtonsPrevious} ${disabledButtonsNext}   ${index < previousMonthArray.length ||
                                                index >= previousMonthArray.length + currentMonthArray.length
                                                ? 'text-gray-500'
                                                : 'text-black'
                                            }
                   `}
                                    >
                                        <button
                                            type='button'
                                            className=''
                                            value={valueItem}
                                            disabled={!canSelectBeforeDate && valueItem < new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString() ||
                                                !canSelectAfterDate && valueItem > new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString()}
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
