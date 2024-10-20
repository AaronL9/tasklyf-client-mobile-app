export const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const formatDateLong = (isoString: string) => {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    month: "long", // Full month name like 'January'
    day: "numeric", // Day of the month without leading zero
    year: "numeric", // Full year (e.g., 2024)
  };

  return date.toLocaleDateString("en-US", options); // Locale can be adjusted as needed
};

export const getDayOfWeek = (isoString: string): string => {
  const date = new Date(isoString);
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const dayIndex = date.getDay(); // Returns 0 for Sunday, 1 for Monday, etc.

  return daysOfWeek[dayIndex];
};

export const convertTo12HourFormat = (time: string) => {
  let [hours, minutes] = time.split(":").map(Number);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format, ensuring 12 PM and 12 AM are handled correctly.

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )} ${ampm}`;

  return formattedTime;
};
