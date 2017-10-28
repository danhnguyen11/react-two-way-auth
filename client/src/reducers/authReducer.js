export default (state = {}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        return {
          user: action.payload
        };
      case 'LOG_OUT':
        return {};
      case 'LOGIN_ERROR':
        return {
            ...state,
            errSignIn: action.payload
        }
      case 'SIGNUP_ERROR':
        return {
            ...state,
            errSignUp: action.payload
        }
      case 'CLEAR_ERROR':
        return {
            ...state,
            errSignIn: null,
            errSignUp: null
        }
      default:
        return state;
    }
  };
  