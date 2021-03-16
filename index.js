const startEngine = () => {
  setTimeout(() => {
    showLoading();
  }, 5000);
  fetchUsers();
};

const showLoading = () => {
  let allUsers = document.querySelector("#allUsers");
  let searchResults = document.querySelector(".container-fluid");
  let spinner = document.getElementById("loading");
  let nav = document.querySelector(".navbar");
  nav.classList.toggle("d-none");
  spinner.classList.toggle("d-none");
  allUsers.classList.toggle("d-none");
  searchResults.classList.toggle("d-none");
};
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users ");
  const data = await response.json();
  console.log(data);

  let search = document.querySelector("#searchbar");
  search.onchange = () => searchFilter(data);
  showAllUsers(data);
  return data;
};

const searchFilter = (data) => {
  let allUsers = document.querySelector("#allUsers");
  allUsers.classList.toggle("d-none");
  let resutl = [];
  let portfolio = document.querySelector(".container-fluid");

  let query = document.querySelector("#searchbar").value.toLowerCase();

  let filter = document.querySelector("#selector").value;
  function initMap(lat, lng) {
    // The location of Uluru
    let position = {
      lat,
      lng,
    };
    const uluru = position;
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

  if (filter === "name") {
    function initMap(lat, lng) {
      // The location of Uluru
      let position = {
        lat,
        lng,
      };
      const uluru = position;
      // The map, centered at Uluru
      let maps = document.querySelectorAll("#map");
      maps.forEach((element) => {
        const map = new google.maps.Map(element, {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      });
    }
    query.innerText = "";
    console.log("we re in name selector my friend!");
    const result = data.filter((name) => query === name.name.toLowerCase());
    resutl.push(result);

    resutl.forEach((element, idx) => {
      portfolio.innerHTML = `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${element[idx].name}</h5>
          <p class="card-text"><b>username</b> : ${element[idx].username}</p>
          <a href="${element[idx].website}"><b>website</b> :${element[idx].website}</a>
          <p class="card-text"><b>phone</b> : ${element[idx].phone}</p>
          <p class="card-text"><b>email</b> : ${element[idx].email}</p>
          <p class="card-text"><b>address</b> : ${element[idx].address.street}, ${element[idx].address.suite}, ${element[idx].address.city} (${element[idx].address.zipcode}) </p>
          <p class="card-text"><small class="text-muted"><b>id</b> : ${element[idx].id}</small></p>
        </div>
        <div id="map"></div>
      </div>`;
      // Initialize and add the map

      initMap(
        parseFloat(`${element[idx].address.geo.lat}`),
        parseFloat(`${element[idx].address.geo.lng}`)
      );
    });

    console.log(resutl);
  } else if (filter === "username") {
    function initMap(lat, lng) {
      // The location of Uluru
      let position = {
        lat,
        lng,
      };
      const uluru = position;
      // The map, centered at Uluru
      let maps = document.querySelectorAll("#map");
      maps.forEach((element) => {
        const map = new google.maps.Map(element, {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      });
    }
    query.innerText = "";
    console.log("we re in username selector else my friend!");
    const result = data.filter(
      (username) => query === username.username.toLowerCase()
    );
    resutl.push(result);
    resutl.forEach((element, idx) => {
      portfolio.innerHTML = `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${element[idx].name}</h5>
          <p class="card-text"><b>username</b> : ${element[idx].username}</p>
          <a href="${element[idx].website}"><b>website</b> :${element[idx].website}</a>
          <p class="card-text"><b>phone</b> : ${element[idx].phone}</p>
          <p class="card-text"><b>email</b> : ${element[idx].email}</p>
          <p class="card-text"><b>address</b> : ${element[idx].address.street}, ${element[idx].address.suite}, ${element[idx].address.city} (${element[idx].address.zipcode}) </p>
          <p class="card-text"><small class="text-muted"><b>id</b> : ${element[idx].id}</small></p>
        </div>
        <div id="map"></div>
      </div>`;

      initMap(
        parseFloat(`${element[idx].address.geo.lat}`),
        parseFloat(`${element[idx].address.geo.lng}`)
      );
    });

    console.log(resutl);
  } else if (filter === "email") {
    function initMap(lat, lng) {
      // The location of Uluru
      let position = {
        lat,
        lng,
      };
      const uluru = position;
      // The map, centered at Uluru
      let maps = document.querySelectorAll("#map");
      maps.forEach((element) => {
        const map = new google.maps.Map(element, {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      });
    }
    query.innerText = "";
    console.log("we re in email selector else my friend!");
    const result = data.filter((email) => query === email.email.toLowerCase());
    resutl.push(result);
    resutl.forEach((element, idx) => {
      portfolio.innerHTML = `<div class="card">
          <div class="card-body">
            <h5 class="card-title">${element[idx].name}</h5>
            <p class="card-text"><b>username</b> : ${element[idx].username}</p>
            <a href="${element[idx].website}"><b>website</b> :${element[idx].website}</a>
            <p class="card-text"><b>phone</b> : ${element[idx].phone}</p>
            <p class="card-text"><b>email</b> : ${element[idx].email}</p>
            <p class="card-text"><b>address</b> : ${element[idx].address.street}, ${element[idx].address.suite}, ${element[idx].address.city} (${element[idx].address.zipcode}) </p>
            <p class="card-text"><small class="text-muted"><b>id</b> : ${element[idx].id}</small></p>
          </div>
          <div id="map"></div>
        </div>`;

      initMap(
        parseFloat(`${element[idx].address.geo.lat}`),
        parseFloat(`${element[idx].address.geo.lng}`)
      );
    });

    console.log(resutl);
  }

  console.log(query);
};
const showAllUsers = (data) => {
  let div = document.querySelector("#allUsers");
  data.forEach((element) => {
    div.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4"
      <div class="card">
      <div class="card">
          <div class="card-body">
          <div class="picture">
         
            <h5 class="card-title">${element.name}</h5>
            <img src="https://i.stack.imgur.com/l60Hf.png" height=100</img>
            </div>
            <p class="card-text"><b>username</b> : ${element.username}</p>
            <a href="${element.website}"><b>website</b> :${element.website}</a>
            <p class="card-text"><b>phone</b> : ${element.phone}</p>
            <p class="card-text"><b>email</b> : ${element.email}</p>
            <p class="card-text"><b>address</b> : ${element.address.street}, ${element.address.suite}, ${element.address.city} (${element.address.zipcode}) </p>
            <p class="card-text"><small class="text-muted"><b>id</b> : ${element.id}</small></p>
            <div id="map"></div>
          </div>
          </div>
          
        </div>`;
    function initMap(lat, lng) {
      // The location of Uluru
      let position = {
        lat,
        lng,
      };
      const uluru = position;
      // The map, centered at Uluru
      let maps = document.querySelectorAll("#map");
      maps.forEach((element) => {
        const map = new google.maps.Map(element, {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      });
    }
    initMap(
      parseFloat(`${element.address.geo.lat}`),
      parseFloat(`${element.address.geo.lng}`)
    );
  });
};
window.onload = startEngine();
