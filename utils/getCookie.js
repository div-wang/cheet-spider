const getCookie = (array) => {
  const cookie = {}
  for (let i = 0; i < array.length; i++) {
    const el = array[i].split(';')[0].split('=')
    cookie[el[0]] = el[1]
  }
  return cookie
}
module.exports = getCookie







