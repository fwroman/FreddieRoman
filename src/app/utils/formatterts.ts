/** Returns a string date with the formatted 'YYYY-MM-DD' */
export function formatDate(date: Date) {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
}
