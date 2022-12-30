export default function loginValidate(values) {
  const errors = {}
  //validation email
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  //validation password
  if (!values.password) {
    errors.password = 'required'
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'password must be greater than 8 and less than 20'
  } else if (values.password.includes(' ')) {
    errors.password = 'you cannot use space between your password'
  }
  return errors
}

export function RegisterValidate(values) {
  const errors = {}
  if (!values.username) {
    errors.username = 'required'
  }

  //emai validation
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  //password validation
  if (!values.password) {
    errors.password = 'required'
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'password must be greater than 8 and less than 20'
  } else if (values.password.includes(' ')) {
    errors.password = 'you cannot use space between your password'
  }

  //confirm password
  if (!values.cpassword) {
    errors.cpassword = 'required'
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.cpassword = 'password must be greater than 8 and less than 20'
  } else if (values.password !== values.cpassword) {
    errors.cpassword = `password did not matched `
  } else if (values.password.includes(' ')) {
    errors.cpassword = 'you cannot use space between your password'
  }
  return errors
}
