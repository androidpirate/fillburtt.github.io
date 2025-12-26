export type TourDate = {
    date: string;     // e.g. "MON, NOV 12"
    venue: string;    // e.g. "THE VENUE"
    city: string;     // e.g. "SAN FRANCISCO"
    ticketsUrl: string;
  };
  
  export const TOUR_DATES: TourDate[] = [
    { date: "MON, NOV 12", venue: "THE VENUE", city: "SAN FRANCISCO", ticketsUrl: "#" },
    { date: "WED, NOV 14", venue: "THE VENUE", city: "SAN FRANCISCO", ticketsUrl: "#" },
  ];
  