export default function getDate() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, "0");
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var year = date.getFullYear();
  const currentDate = `${day}/${month}/${year}`;

  return currentDate;
}
