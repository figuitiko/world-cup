


export const fetchLogin = async (data) => {
  const response = await fetch(`/api/users/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  
  return result;
};

export const fetchRegister = async (data) => {
  const response = await fetch(`/api/users/signUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};