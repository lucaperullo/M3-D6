const startEngine = () => {
  fetchUsers();
};

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await response.json();
  console.log(data);

  let search = document.querySelector("#searchbar");
  search.onchange = () => searchFilter();
  return data;
}

const searchFilter = () => {
  let filter = document.querySelector("#search");
};
window.onload = startEngine();
