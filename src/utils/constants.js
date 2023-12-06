export const baseUrl = "https://back-dev.rayhaneelearning.com/api";

// get local date and time
export const getLocalDate = (date) => {
  const dateObj = new Date(date);

  // Format the Date object to the desired format
  const formattedDate = `${("0" + dateObj.getDate()).slice(-2)}/${(
    "0" +
    (dateObj.getMonth() + 1)
  ).slice(-2)}/${dateObj.getFullYear().toString().slice(-2)}`;
  const formattedTime = `${("0" + dateObj.getHours()).slice(-2)}:${(
    "0" + dateObj.getMinutes()
  ).slice(-2)}`;
  return { formattedDate, formattedTime };
};
