const isEmailValid = email => {
  const regex = new RegExp(
    "/^[a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-.]{0,1}([a-zA-Z][-.]{0,1})*[a-zA-Z0-9].[a-zA-Z0-9]{1,}([.-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i",
  );
  return regex.test(email);
};

// Username can only contain letters and numbers, and must be 5+ chars long
const isUsernameValid = username => {
  const regex = '/^[a-zA-Z0-9]{5,}+$/';
  return regex.test(username);
};

// Password must contain eight characters, with at least one letter and number
const isPasswordValid = password => {
  const regex = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';
  return regex.test(password);
};

export const validateLogin = data => {
  const {email, password} = data;

  if (!isEmailValid(email)) {
    console.log(email);
    console.log('EMAIL INVALIDO');
    return false;
  }

  if (!isPasswordValid(password)) {
    console.log('CONTRASEÑA INVALIDA');
    return false;
  }

  // Log in user
  console.log('LOGIN OK');
};

export const validateRegister = data => {
  const {name, surname, email, password} = data;

  if (!isEmailValid(email)) {
    return false;
  }

  if (!isPasswordValid(password)) {
    return false;
  }
};
