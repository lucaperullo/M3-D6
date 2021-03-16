const startEngine = () => {
  fetchUsers();
};

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await response.json();
  console.log(data);

  let search = document.querySelector("#searchbar");
  search.onchange = () => searchFilter(data);
  return data;
}

const searchFilter = (data) => {
  let resutl = [];
  let portfolio = document.querySelector(".container-fluid");

  let query = document.querySelector("#searchbar").value.toLowerCase();

  let filter = document.querySelector("#selector").value;

  if (filter === "name") {
    const result = data.filter((name) => query === name.name.toLowerCase());
    resutl.push(result);
    resutl.forEach((element, idx) => {
      portfolio.innerHTML += `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${element[idx].name}</h5>
          <p class="card-text"><b>username</b> : ${element[idx].username}</p>
          <a href="${element[idx].website}"><b>website</b> :${element[idx].website}</a>
          <p class="card-text"><b>phone</b> : ${element[idx].phone}</p>
          <p class="card-text"><b>email</b> : ${element[idx].email}</p>
          <p class="card-text"><small class="text-muted"><b>id</b> : ${element[idx].id}</small></p>
        </div>
        <div id="map"></div>
      </div>`;
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = `${element[idx].address.geo}`;
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
    });

    console.log(resutl);
  } else if (filter === "username") {
    console.log("we re in username selector else my friend!");
  } else if (filter === "email") {
    console.log("we re in email selector else my friend!");
  }

  console.log(query);
};
window.onload = startEngine();
