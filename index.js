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
  let filter = document.querySelector("#selector").value;
  if (filter === "name") {
    console.log("we re in name selector my friend!");
  } else if (filter === "username") {
    console.log("we re in username selector else my friend!");
  } else if (filter === "email") {
    console.log("we re in email selector else my friend!");
  }
  let query = document.querySelector("#searchbar").value.toLowerCase();
  console.log(query);
};
window.onload = startEngine();
