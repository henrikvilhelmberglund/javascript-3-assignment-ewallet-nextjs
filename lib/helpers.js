export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const { first: firstName, last: lastName } = data.results[0].name;
  return { firstName, lastName };
};
