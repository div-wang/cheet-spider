const FormData = require('form-data');

const formFunction = () => {
  let form = new FormData()
  form.append('OpenID', 'opcWyw1UbjcOY9C1ZKz53t6bqnR0')
  form.append('UserID', '')
  return form
}

module.exports = formFunction