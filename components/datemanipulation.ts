
const currentMonthArray = []

const date = new Date()


const getDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1 ,0)  // 0 is the last day of the month
const getDaysLastMonth = new Date(date.getFullYear(), date.getMonth(), 0)  // 0 is the last day of the month
const getDaysNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0)  // 0 is the last day of the month

const getFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1  , 1)  

console.log(getFirstDayOfMonth)
console.log(getFirstDayOfMonth.getDay()) // console
console.log(getDaysLastMonth.getDate())
console.log(getFirstDayOfMonth.getDay())


    for (let i = getDaysLastMonth.getDate() - getFirstDayOfMonth.getDay()  ; i < getDaysLastMonth.getDate(); i++){
        currentMonthArray.push(i + 1)

}



console.log(currentMonthArray)




// function genererArray(nombre:number) {
//     const resultat = [];
//     for (let i = nombre - 4; i <= nombre; i++) {
//       if (i >= 1) {
//         resultat.push(i);
//       }
//     }
//     return resultat;
//   }
  
//   const nombre = 31;
//   const monArray = genererArray(nombre);
//   console.log(monArray);


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


