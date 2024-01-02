"use client"
import { useEffect, useState } from 'react';
// import { queryTicketsOfYear } from '../../../../../../../../../supabase/supabase-requests-tickets';

const TestGetTicketsYear = () => {
  const [ticketsArrayMonth, setTicketsArrayMonth] = useState<{
    CREATED_AT: string;
    TICKET_ID: string;
  }[]>([]);
  const [ticketsByMonths, setTicketsByMonths] = useState<{
    currentMonth: string;
    value: number;
  }[]>([]);


  const getFirstMonthOfYear = async () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    const formattedStartDate = new Date(startDate.getFullYear(), 0, 1);
    // console.log(formattedStartDate)
    const formattedEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1); // Jour actuel à minuit pour inclure tous les tickets de la journée actuelle
    // console.log(formattedEndDate)
    try {
    //   const data = await queryTicketsOfYear(formattedStartDate.toISOString(), formattedEndDate.toISOString());
    //   if (data) {
    //     setTicketsArrayMonth(data);
    //   }
    } catch (error) {
      console.error(error);
    }
  };

  const countTicketsByMonths = () => {
    const monthsCount = Array(12).fill(0);

    ticketsArrayMonth.forEach(ticket => {
      const createdAt = new Date(ticket.CREATED_AT);
      const monthsOfYear = createdAt.getMonth();
      monthsCount[monthsOfYear]++;
    });

    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ticketsByDay = allMonths.map((month, index) => ({
      currentMonth: month,
      value: monthsCount[index],
    }));
    // console.log(ticketsByDay)
    setTicketsByMonths(ticketsByDay);
  };

  useEffect(() => {
    getFirstMonthOfYear();
  }, []);

  useEffect(() => {
    countTicketsByMonths();
  }, [ticketsArrayMonth]);


  // Function to format UTC timestamp to local time string
  const formatToLocalTime = (utcTimestamp: string) => {
    const date = new Date(utcTimestamp);
    return date.toLocaleString(); // Adjusts the UTC timestamp to the user's local time zone
  };

  return (
    <div>
      <h1>Ticket Counts by Day of Week</h1>
      <ul>
        {ticketsByMonths.map((month, index) => (
          <li key={index}>
            {month.currentMonth}: {month.value}
          </li>
        ))}
      </ul>

      <div>
        <div>

          {ticketsArrayMonth.map((ticket, index) => (

            <div key={index}>id: {ticket.TICKET_ID}   date created: {formatToLocalTime(ticket.CREATED_AT)}</div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TestGetTicketsYear

