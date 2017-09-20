// AJAX REQUEST FOR SIGNUP(USING BACKEND ROUTE)
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

// AJAX REQUEST FOR LOGIN(USING BACKEND ROUTE)
export const login = userCredentials => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: userCredentials
  })
);

// AJAX REQUEST FOR LOGOUT(USING BACKEND ROUTE)
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
