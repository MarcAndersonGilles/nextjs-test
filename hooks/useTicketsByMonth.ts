import { useState, useEffect } from 'react';

interface Ticket {
  created_at: string;
}
const useTicketsByMonth = (ticketsArray: Ticket[]) => {
    // Array for the months of the year
  const [ticketsByMonths, setTicketsByMonths] = useState<{
    currentMonth: string;
    value: number;
  }[]>([]);

  const countTicketsByMonths = () => {
    /// Array(12) creates an array with 12 empty slots
    const monthsCount = Array(12).fill(0);

    ticketsArray.forEach(ticket => {
        // new Date(ticket.created_at) converts the string to a date object
      const createdAt = new Date(ticket.created_at);
      // getMonth() returns the month of the date object
      const monthsOfYear = createdAt.getMonth();
      monthsCount[monthsOfYear]++;
    });

    // allMonths is an array of all the months of the year
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // ticketsByDay is an array of objects with the month and the number of tickets created in that month
    const ticketsByDay = allMonths.map((month, index) => ({
      currentMonth: month,
      value: monthsCount[index],
    }));
    // Update the state with the new array
    setTicketsByMonths(ticketsByDay);
  };

  useEffect(() => {
    countTicketsByMonths();
  }, [ticketsArray]);
 // return the array of objects
  return ticketsByMonths;
};

export default useTicketsByMonth;
