
const currentMonthArray = []

const date = new Date()


const getDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1 ,0)  // 0 is the last day of the month
const getDaysLastMonth = new Date(date.getFullYear(), date.getMonth(), 0)  // 0 is the last day of the month
const getDaysNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0)  // 0 is the last day of the month

const getFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth() , 1)  

console.log(getFirstDayOfMonth)
console.log(getFirstDayOfMonth.getDay()) // console


// for (let i = getFirstDayOfMonth.getDay(); i > 0; i--){

//     currentMonthArray.push(getDaysOfMonth.getDate() - i )
    
    
// }
// console.log(currentMonthArray)






// const currentArrayMonth =[
     
//     {
//         Day: 'Dim', values: {}
//     },

//     {
//         Day: 'Lun', values: {}
//     },

//     {
//         Day: 'Mar', values: {}
//     },

//     {
//         Day: 'Mer', values: {}
//     },

//     {
//         Day: 'Jeu', values: {}
//     },

//     {
//         Day: 'Ven', values: {}
//     },

//     {
//         Day: 'Sam', values: {}
//     }
// ]


