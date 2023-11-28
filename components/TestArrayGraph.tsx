"use client"
import { useEffect, useState } from 'react';
// import { queryTicketsFromThisWeek } from '../../../../../../../../../supabase/supabase-requests-tickets';

const TestArrayGraph = () => {
  const [tickets, setTickets] = useState<{
    CREATED_AT: string;
    TICKET_ID: string;
  }[]>([]);
  const [ticketsByDayOfWeek, setTicketsByDayOfWeek] = useState<{
    weekday: string;
    value: number;
  }[]>([]);


  const getLast7DaysTickets = async () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Récupérer le jour actuel (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const daysToMonday = currentDay === 0 ? 6 : currentDay - 1; // Nombre de jours à soustraire pour revenir à lundi

    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - daysToMonday); // Aller au lundi de la semaine actuelle
    console.log(currentDate.getDate() - daysToMonday)

    const formattedStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const formattedEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1); // Jour actuel à minuit pour inclure tous les tickets de la journée actuelle

    try {
    //   const data = await queryTicketsFromThisWeek(formattedStartDate.toISOString(), formattedEndDate.toISOString());
      // const { data, error } = await supabase
      //   .from('TICKETS')
      //   .select('*')
      //   .gte('CREATED_AT', formattedStartDate.toISOString())
      //   .lt('CREATED_AT', formattedEndDate.toISOString());

      // if (error) {
      //   console.error(error);
      //   return;
      // }
    //   if (data) {
    //     setTickets(data);
    //   }

    } catch (error) {
      console.error(error);
    }
  };

  const countTicketsByDayOfWeek = () => {
    const dayCounts = Array(7).fill(0);

    tickets.forEach(ticket => {
      const createdAt = new Date(ticket.CREATED_AT);
      const dayOfWeek = createdAt.getDay();
      dayCounts[dayOfWeek]++;
    });

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
    const ticketsByDay = daysOfWeek.map((day, index) => ({
      weekday: day,
      value: dayCounts[index],
    }));
    console.log(ticketsByDay)
    setTicketsByDayOfWeek(ticketsByDay);
  };

  useEffect(() => {
    getLast7DaysTickets();
  }, []);

  useEffect(() => {
    countTicketsByDayOfWeek();
  }, [tickets]);


  // const dateNow = new Date()
  // const todaytest =dateNow.getDay()
  // console.log(todaytest)
  // const getIfWednesday = todaytest === 0 ? 6 : todaytest - 1;
  // const startDayTest = new Date(dateNow)
  // console.log(startDayTest)
  // const tdsa = startDayTest.setDate((dateNow.getDate() - getIfWednesday));
  // console.log(tdsa)
  // console.log(new Date(1699928591143))

  // Function to format UTC timestamp to local time string
  const formatToLocalTime = (utcTimestamp: string) => {
    const date = new Date(utcTimestamp);
    return date.toLocaleString(); // Adjusts the UTC timestamp to the user's local time zone
  };
  return (
    <div>
      <h1>Ticket Counts by Day of Week</h1>
      <ul>
        {ticketsByDayOfWeek.map((day, index) => (
          <li key={index}>
            {day.weekday}: {day.value}
          </li>
        ))}
      </ul>

      <div>
        <div>

          {tickets.map((ticket, index) => (

            <div key={index}>id: {ticket.TICKET_ID}   date created: {formatToLocalTime(ticket.CREATED_AT)}</div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TestArrayGraph;
