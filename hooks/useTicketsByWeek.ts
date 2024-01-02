import { useState, useEffect } from 'react';

interface Ticket {
  created_at: string;
}

const useTicketsByWeek = (ticketsArray : Ticket[] ) => {
    // Array for the days of the week
    const [ticketsByDayOfWeek, setTicketsByDayOfWeek] = useState<{
        weekday: string;
        value: number;
      }[]>([]);

      const countTicketsByDayOfWeek = () => {
        /// Array(7) creates an array with 7 empty slots
        const dayCounts = Array(7).fill(0);
    //     // Loop through the ticketsArray
        ticketsArray.forEach(ticket => {
            // new Date(ticket.created_at) converts the string to a date object
          const createdAt = new Date(ticket.created_at);
          // getDay() returns the day of the week of the date object
          const dayOfWeek = createdAt.getDay();
          // Increment the value of the dayOfWeek index
          dayCounts[dayOfWeek]++;
        });
         // daysOfWeek is an array of all the days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
        // ticketsByDay is an array of objects with the day of the week and the number of tickets created on that day
        const ticketsByDay = daysOfWeek.map((day, index) => ({
          weekday: day,
          value: dayCounts[index],
        }));
        // Update the state with the new array
        setTicketsByDayOfWeek(ticketsByDay);
      };

      useEffect(() => {
        countTicketsByDayOfWeek();
      }, [ticketsArray]);
        // return the array of objects
      return ticketsByDayOfWeek;
}

export default useTicketsByWeek;