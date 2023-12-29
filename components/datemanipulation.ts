
const currentMonthArray = []

const date = new Date()


const getDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)  // 0 is the last day of the month
const getDaysLastMonth = new Date(date.getFullYear(), date.getMonth(), 0)  // 0 is the last day of the month
// const getDaysNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0)  // 0 is the last day of the month

const getFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)

console.log(getFirstDayOfMonth)
console.log(getDaysOfMonth)
console.log(getFirstDayOfMonth.getDay()) // console
console.log(`numOfDaysLastMonth` + getDaysLastMonth.getDate())
console.log(getFirstDayOfMonth.getDay())
console.log('num : ' + `${getDaysLastMonth.getDate()} -  ${getFirstDayOfMonth.getDay()}`)


for (let i = getDaysLastMonth.getDate() - (getFirstDayOfMonth.getDay()); i < getDaysLastMonth.getDate(); i++) {
    currentMonthArray.push(i + 1)

}



console.log(currentMonthArray)












