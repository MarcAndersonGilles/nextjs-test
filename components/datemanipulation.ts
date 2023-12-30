
const previousMonthArray = []
const currentMonthArray = []
const nextMonthArray = []

const date = new Date()


const getDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)  // 0 is the last day of the month
const getDaysLastMonth = new Date(date.getFullYear(), date.getMonth(), 0)  // 0 is the last day of the month
// const getDaysNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0)  // 0 is the last day of the month

const getFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)


for (let i = getDaysLastMonth.getDate() - (getFirstDayOfMonth.getDay()); i < getDaysLastMonth.getDate(); i++) 
{
    previousMonthArray.push(i + 1)
}

for (let i = 0; i < getDaysOfMonth.getDate(); i++){
    currentMonthArray.push(i + 1)
}

const remainingDays = 42 - (previousMonthArray.length + currentMonthArray.length)


for (let i = 0 ; i < remainingDays; i++){
    nextMonthArray.push(i + 1)
}


const calendarArray = [...previousMonthArray, ...currentMonthArray, ...nextMonthArray]



















