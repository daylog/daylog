export default function (year, date) {
  if (!date) date = new Date()
  return {
    number: (year || date.getFullYear()).toString()
  }
}
