module.exports = function capitalizeFirstLetter(str) {
  str = str.toLowerCase()
  return str.charAt(0).toUpperCase() + str.substr(1)
}
