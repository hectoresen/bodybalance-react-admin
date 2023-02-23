export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_OK = 'AUTH_REGISTER_OK';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_OK = 'AUTH_LOGIN_OK';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

export const CHECK_SESSION = 'CHECK_SESSION';
export const CHECK_SESSION_OK = 'CHECK_SESSION_OK';
export const CHECK_SESSION_ERROR = 'CHECK_SESSION_ERROR';

export const AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT';
export const AUTH_USER_LOGOUT_OK = 'AUTH_USER_LOGOUT_OK';
export const AUTH_USER_LOGOUT_ERROR = 'AUTH_USER_LOGOUT_ERROR';

export const loginUser = (form) => {
  console.log('FORMULARIO FETCH DISPATCH REDUX', form)
/*     return async (dispatch) => {
      dispatch({ type: AUTH_LOGIN });

      const loginUserRequest = await fetch('API URL', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: JSON.stringify(form),
      });
    }; */
  };
  