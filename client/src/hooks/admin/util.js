//date convert to nice format
export const dateConvert = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString();
};
export const handlePaginateData = (data, currentPage) => {
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export const teamMapper = (data) => {
 return data.map(item=>({id: item['_id'], name: item.name, country: item.country}));
};

export const gameMapper = (data) => {
  return data.map(item=>({id: item['_id'], team1: item.team1.name, team2: item.team2.name, date: dateConvert(item.date)}));
};
