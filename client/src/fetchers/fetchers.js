


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

export const getAllTeams = async () => {
  try {
    const response = await fetch(`/api/teams`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addTeam = async (data) => {
  try {
    const response = await fetch(`/api/teams`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllGames = async () => {
  try {
    const response = await fetch(`/api/games`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addGame = async (data) => {
  try {
    const response = await fetch(`/api/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
    
  } catch (error) {
    console.log(error);
  }
};