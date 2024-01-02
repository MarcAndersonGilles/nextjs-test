// import {
//     isMonday,
//     isTuesday,
//     isWednesday,
//     isThursday,
//     isFriday,
//     isSaturday,
//     isSunday,
//   } from "date-fns";
//   import { redirect } from "next/navigation";
  
//   export interface FormattedDate {
//     day: string;
//     dayName: string;
//     month: string;
//     monthName: string;
//     year: string;
//     hours: string;
//     minutes: string;
//     seconds: string;
//   }
//   //  EN
//   // const monthNames: string[] = [
//   //   "January", "February", "March", "April", "May", "June",
//   //   "July", "August", "September", "October", "November", "December"
//   // ];
//   //  FR
//   const monthNames: string[] = [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ];
  
//   /*
//    * Author : Zachary
//    * formatDate check if the param inputDate is a timestamp in string and is not null.
//    * Check the fotmat param if (format === 'day') start formatDay(inputDate)é
//    * formatDay(inputDate):Return all var of the day [ day, dayName, month, monthName, year, hours, minutes].
//    */
//   const formatDay = (inputDate: string | undefined | null): FormattedDate => {
//     if (!inputDate) {
//       return {
//         day: "N/A",
//         dayName: "N/A",
//         month: "N/A",
//         monthName: "N/A",
//         year: "N/A",
//         hours: "N/A",
//         minutes: "N/A",
//         seconds: "N/A",
//       };
//     }
//     const date = new Date(inputDate);
//     const day = String(date.getDate()).padStart(2, "0");
//     // const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date); // Get day name
//     const dayName = new Intl.DateTimeFormat("fr-CA", { weekday: "long" }).format(
//       date
//     );
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const monthName = monthNames[date.getMonth()];
//     const year = String(date.getFullYear());
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
  
//     return { day, dayName, month, monthName, year, hours, minutes, seconds };
//   };
  
//   const formatTime = (inputDate: string | undefined | null): FormattedDate => {
//     if (!inputDate) {
//       return {
//         day: "N/A",
//         dayName: "N/A",
//         month: "N/A",
//         monthName: "N/A",
//         year: "N/A",
//         hours: "N/A",
//         minutes: "N/A",
//         seconds: "N/A",
//       };
//     }
//     const date = new Date(inputDate);
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
  
//     return {
//       day: "",
//       dayName: "",
//       month: "",
//       monthName: "",
//       year: "",
//       hours,
//       minutes,
//       seconds,
//     };
//   };
  
//   const formatDate = (
//     inputDate: string | undefined | null,
//     format: "day" | "time" = "day"
//   ): FormattedDate => {
//     if (format === "day") {
//       const formattedDate = formatDay(inputDate);
//       return formattedDate;
//     } else if (format === "time") {
//       return formatTime(inputDate);
//     } else {
//       return {
//         day: "Invalid format",
//         dayName: "Invalid format",
//         month: "Invalid format",
//         monthName: "Invalid format",
//         year: "Invalid format",
//         hours: "Invalid format",
//         minutes: "Invalid format",
//         seconds: "Invalid format",
//       };
//     }
//   };
  
//   export default formatDate;
  
//   export const formatDate2 = (inputDate: string | undefined | null) => {
//     if (!inputDate) {
//       return "N/A";
//     }
//     const date = new Date(inputDate);
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const hours = String(date.getHours()).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = String(date.getFullYear()).padStart(2, "0");
  
//     return `${day}/${month}/${year} à ${hours}:${minutes}`;
//   };
  
//   /*
//    * Author : Cyrille
//    * DeviceIsMobile check if the navigator is a mobile one. this is used to change the display mode of some section of the web app.
//    */
//   export const deviceIsMobile = () => {
//     if (
//       navigator.userAgent.match(
//         /iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android|Windows Phone/i
//       )
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   // Cyrille
//   // Uses multiple classnames with functions
//   export function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(" ");
//   }
//   // Cyrille
//   // Prevents scrolling from input with number
//   export const numberInputOnWheelPreventChange = (e: any) => {
//     // Prevent the input value change
//     e.target.blur();
  
//     // Prevent the page/container scrolling
//     e.stopPropagation();
  
//     setTimeout(() => {
//       e.target.focus();
//     }, 0);
//   };
//   ////Marc
//   ////// Format user numbers to letters like 1000 = 1k 1000000 = 1M
//   export function formatAbbreviatedNumber(num: number, digits: number) {
//     const lookup = [
//       { value: 1, symbol: "" },
//       { value: 1e3, symbol: "k" },
//       { value: 1e6, symbol: "M" },
//       { value: 1e9, symbol: "G" },
//       { value: 1e12, symbol: "T" },
//       { value: 1e15, symbol: "P" },
//       { value: 1e18, symbol: "E" },
//     ];
//     const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
//     const item = lookup
//       .slice()
//       .reverse()
//       .find(function (item) {
//         return num >= item.value;
//       });
//     return item
//       ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
//       : "0";
//   }
//   export function Getredirect(pageurl: string | null) {
//     console.log(pageurl);
//     redirect(`/fr/users/login?redirect=${pageurl}`);
//   }
//   //Marc
//   //// hide middle of the email to not show on front end
//   export function hideEmail(
//     email: string | undefined | null
//   ): string | undefined | null {
//     if (email) {
//       const atIndex = email.indexOf("@");
//       if (atIndex !== -1) {
//         const localPart = email.substring(0, atIndex);
//         const domain = email.substring(atIndex);
//         const modifiedLocalPart =
//           localPart[0] +
//           "*".repeat(Math.max(localPart.length - 2, 0)) +
//           localPart.slice(-1);
//         return modifiedLocalPart + domain;
//       }
//     }
//     return email; // Return the original email if it's null, undefined, or in an invalid format
//   }
//   ///Marc
//   ///the notification can be call every 5 s
//   export const canCallNotification = (lastNotificationTime: number) => {
//     const currentTime = Date.now();
//     return currentTime - lastNotificationTime >= 5000; // 5000 milliseconds = 5 seconds
//   };
  
//   // Author:Cyrille
//   // Transform sentences into slugs
//   export function slugify(str: any) {
//     return String(str)
//       .normalize("NFKD") // split accented characters into their base characters and diacritical marks
//       .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//       .trim() // trim leading or trailing whitespace
//       .toLowerCase() // convert to lowercase
//       .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
//       .replace(/\s+/g, "-") // replace spaces with hyphens
//       .replace(/-+/g, "-"); // remove consecutive hyphens
//   }
  
//   // Author:Cyrille
//   // Transform sentences into slugs for URLs
//   export function slugifyLink(str: any) {
//     return String(str)
//       .normalize("NFKD") // split accented characters into their base characters and diacritical marks
//       .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//       .trim() // trim leading or trailing whitespace
//       .toLowerCase() // convert to lowercase
//       .replace(/[^a-z0-9 - _]/g, "") // remove non-alphanumeric characters
//       .replace(/\s+/g, "-") // replace spaces with hyphens
//       .replace(/-+/g, "-"); // remove consecutive hyphens
//   }
  
  
//   // Author:Cyrille
//   // Generates variables for calendars (if the selected option is more than 2 days)
//   export const dayWeeks = [
//     {
//       valueStart: "LundiStart",
//       valueEnd: "LundiEnd",
//       switch: "LundiSwitch",
//       switchTarif: "LundiSwitchTarif",
//       weekday: "Lundi",
//       is: isMonday,
//       idDay: "LundiId",
//       inputValue: "INLundi",
//     },
//     {
//       valueStart: "MardiStart",
//       valueEnd: "MardiEnd",
//       switch: "MardiSwitch",
//       switchTarif: "MardiSwitchTarif",
//       weekday: "Mardi",
//       is: isTuesday,
//       idDay: "MardiId",
//       inputValue: "INMardi",
//     },
//     {
//       valueStart: "MercrediStart",
//       valueEnd: "MercrediEnd",
//       switch: "MercrediSwitch",
//       switchTarif: "MercrediSwitchTarif",
//       weekday: "Mercredi",
//       is: isWednesday,
//       idDay: "MercrediId",
//       inputValue: "INMercredi",
//     },
//     {
//       valueStart: "JeudiStart",
//       valueEnd: "JeudiEnd",
//       switch: "JeudiSwitch",
//       switchTarif: "JeudiSwitchTarif",
//       weekday: "Jeudi",
//       is: isThursday,
//       idDay: "JeudiId",
//       inputValue: "INJeudi",
//     },
//     {
//       valueStart: "VendrediStart",
//       valueEnd: "VendrediEnd",
//       switch: "VendrediSwitch",
//       switchTarif: "VendrediSwitchTarif",
//       weekday: "Vendredi",
//       is: isFriday,
//       idDay: "VendrediId",
//       inputValue: "INVendredi",
//     },
//     {
//       valueStart: "SamediStart",
//       valueEnd: "SamediEnd",
//       switch: "SamediSwitch",
//       switchTarif: "SamediSwitchTarif",
//       weekday: "Samedi",
//       is: isSaturday,
//       idDay: "SamediId",
//       inputValue: "INSamedi",
//     },
//     {
//       valueStart: "DimancheiStart",
//       valueEnd: "DimancheEnd",
//       switch: "DimancheSwitch",
//       switchTarif: "DimancheSwitchTarif",
//       weekday: "Dimanche",
//       is: isSunday,
//       idDay: "DimancheId",
//       inputValue: "INDimanche",
//     },
//   ];
  
//   // Cyrille
//   // Converts number to K/M/B (example:1000 => 1K)
//   // Source: https://reacthustle.com/blog/how-to-convert-number-to-kmb-format-in-javascript
//   export function formatNumber(num: any, precision = 2) {
//     const map = [
//       { suffix: "T", threshold: 1e12 },
//       { suffix: "B", threshold: 1e9 },
//       { suffix: "M", threshold: 1e6 },
//       { suffix: "K", threshold: 1e3 },
//       { suffix: "", threshold: 1 },
//     ];
  
//     const found = map.find((x) => Math.abs(num) >= x.threshold);
//     if (found) {
//       const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
//       return formatted;
//     }
  
//     return num;
//   }
//   /////Marc
//   //// Format Event time to show how many days left or how many days ago
//   export function formatEventTime(eventDate: Date) {
//     const currentDate = new Date(); // Current date
//     const futureDate = new Date(eventDate); // Future event date
  
//     const timeDifference = futureDate.getTime() - currentDate.getTime(); // Difference in milliseconds
//     const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days and round up
  
//     const f = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  
//     if (daysDifference > 0) {
//       // Event hasn't occurred yet
//       if (daysDifference < 7) {
//         return f.format(daysDifference, "day");
//       } else if (daysDifference < 30) {
//         const weeksDifference = Math.floor(daysDifference / 7);
//         return f.format(weeksDifference, "week");
//       } else if (daysDifference < 365) {
//         const monthsDifference = Math.floor(daysDifference / 30);
//         return f.format(monthsDifference, "month");
//       } else {
//         const yearsDifference = Math.floor(daysDifference / 365);
//         return f.format(yearsDifference, "year");
//       }
//     } else {
//       // Event has already occurred
//       const absDaysDifference = Math.abs(daysDifference);
//       if (absDaysDifference < 7) {
//         return f.format(-absDaysDifference, "day");
//       } else if (absDaysDifference < 30) {
//         const absWeeksDifference = Math.floor(absDaysDifference / 7);
//         return f.format(-absWeeksDifference, "week");
//       } else if (absDaysDifference < 365) {
//         const absMonthsDifference = Math.floor(absDaysDifference / 30);
//         return f.format(-absMonthsDifference, "month");
//       } else {
//         const absYearsDifference = Math.floor(absDaysDifference / 365);
//         return f.format(-absYearsDifference, "year");
//       }
//     }
//   }
//   //marc
//   export const addBarBetweenSpaces = (str: string) => {
//     return str.split(" ").join("-").toLowerCase();
//   };
//   // Maken-Sconcept (Utility const created by Cyrille)
//   // List of bank institutions
//   export const bankInstitution = [
//     { institution: "1", name: "Banque de Montréal" },
//     { institution: "2", name: "Banque de Nouvelle-Écosse" },
//     { institution: "3", name: "Banque Royale" },
//     { institution: "4", name: "Banque TD Trust" },
//     { institution: "6", name: "Banque Nationale Canada" },
//     { institution: "10", name: "Banque CIBC" },
//     { institution: "16", name: "HSBC Bank Canada" },
//     { institution: "30", name: "Banque Canadienne Western" },
//     { institution: "39", name: "Banque Laurentienne" },
//     { institution: "239", name: "Desjardins Cr. Union Inc." },
//     { institution: "240", name: "La Banque RBS N.V." },
//     { institution: "241", name: "Bank America National Ass." },
//     { institution: "242", name: "The Bank of NY Mellon" },
//     { institution: "614", name: "Banque Tangerine" },
//     { institution: "815", name: "Caisses Desjardins Québec" },
//     { institution: "829", name: "Féd. caisses pop. Ontario" },
//     { institution: "865", name: "Caisses pop. acadiennes" },
//     { institution: "245", name: "Tokyo-Mitsubishi UFJ (Can.)" },
//     { institution: "250", name: "BNP Paribas (Canada)" },
//     { institution: "260", name: "Citibanque Canada" },
//     { institution: "265", name: "Deutsche Bank AG" },
//     { institution: "269", name: "Mega Intl Comm. Bank (Can.)" },
//     { institution: "270", name: "JP Morgan Chase BN Assoc." },
//     { institution: "275", name: "Banq Korea Exchange du Can." },
//     { institution: "277", name: "Mizuho Corp. Bank LTD. Can." },
//     { institution: "290", name: "USB Bank (Canada)" },
//     { institution: "292", name: "Société Générale (Canada)" },
//     { institution: "294", name: "Banq. nat. de l'Inde (Can.)" },
//     { institution: "301", name: "Banq. Sumitomo Mitsui Can." },
//     { institution: "303", name: "Amex Bank of Canada" },
//     { institution: "307", name: "Banq. Ind. et Comm. Chine" },
//     { institution: "308", name: "Banque de Chine (Canada)" },
//     { institution: "311", name: "MBNA Canada Bank" },
//     { institution: "314", name: "Banque JP Morgan Canada" },
//     { institution: "315", name: "CTC Bank of Canada" },
//     { institution: "321", name: "Habib Canadian Bank" },
//     { institution: "322", name: "Rabobank Netherlands" },
//     { institution: "323", name: "Capital One Bank (Can. BR)" },
//     { institution: "327", name: "State Street" },
//     { institution: "328", name: "Citibank" },
//     { institution: "330", name: "Comerica Bank" },
//     { institution: "332", name: "First Commercial Bank" },
//     { institution: "334", name: "Banq. Pacif. et Ouest Can." },
//     { institution: "335", name: "United Overseas Bank LTD." },
//     { institution: "338", name: "Banque Canadian Tire" },
//     { institution: "340", name: "Banque ICICI du Canada" },
//     { institution: "343", name: "Banque Dundee du Canada" },
//     { institution: "346", name: "Société Générale Succ. Can." },
//     { institution: "352", name: "DirectCash Bank" },
//     { institution: "354", name: "Jameson Bank" },
//     { institution: "355", name: "Banque Shinhan du Canada" },
//     { institution: "507", name: "Société Fiducie Community" },
//     { institution: "509", name: "The Canada Trust Company" },
//     { institution: "522", name: "Trust La Laurentienne" },
//     { institution: "532", name: "The Effort Trust Company" },
//     { institution: "535", name: "Home Savings and Loan Corp." },
//     { institution: "536", name: "IG Group Trust CO. LTD." },
//     { institution: "540", name: "Banque Manuvie du Canada" },
//     { institution: "548", name: "CIBC Trust Corporation" },
//     { institution: "550", name: "CIE Montréal Trust du Can." },
//     { institution: "551", name: "FID Financière Sunlife inc." },
//     { institution: "560", name: "Compagnie de Fiducie AGF" },
//     { institution: "568", name: "Peace Hills Trust Company" },
//     { institution: "570", name: "Royal Trust (CIE)" },
//     { institution: "580", name: "Société Trust Royal du Can." },
//     { institution: "590", name: "Trust National" },
//     { institution: "618", name: "B2B Trust" },
//     { institution: "619", name: "M.R.S. Trust Company" },
//     { institution: "620", name: "Resmor Trust Company" },
//     { institution: "621", name: "Peoples Trust Company" },
//     { institution: "630", name: "Société Trust Household" },
//     { institution: "701", name: "Edward Jones" },
//     { institution: "803", name: "Latvian Credit Union LTD." },
//     { institution: "806", name: "Duca Fin. Serv. Cr. Un. LTD." },
//     { institution: "807", name: "Communic. Techn. Cr. Un. LTD." },
//     { institution: "808", name: "Arnstein Comm. Crt. Un. LTD." },
//     { institution: "810", name: "All Trans F. S. Cr. Un. LTD." },
//     { institution: "830", name: "Airline Financial Cr. Un. LTD." },
//     { institution: "833", name: "St. Stan.-St. Cas. Cr. Un. LTD." },
//     { institution: "836", name: "C.P. de Kapuskasing" },
//     { institution: "840", name: "Dundalk District Cr. Un. LTD." },
//     { institution: "844", name: "Goderich Commu. Cr. Un. LTD." },
//     { institution: "846", name: "Ont. Civil Servs Cr. Un. LTD." },
//     { institution: "848", name: "Virtual One Cr. Union LTD." },
//     { institution: "854", name: "Golden Horseshoe Cr. Un. LTD." },
//     { institution: "890", name: "C.P. de Hearst" },
//     // More users...
//   ];
  
//   // Creator:Cyrille
//   // Converts numbers to currency
//   export const toCurrency = new Intl.NumberFormat("fr-CA", {
//     style: "currency",
//     currency: "CAD",
//   }).format;
  
//   // Creator:Cyrille
//   // Adds decimals to number
//   export const addDecimals = (numberText: any) => {
//     return new Intl.NumberFormat("en", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(numberText);
//   }
//   export const getUpdatedArray = (data:any, key:any) => {
//     const current = data?.find((item:any) => item === key);
  
//     const updated = current
//       ? data.filter((item:any) => item !== key)
//       : [...data, key];
  
//     return updated;
//   };
  