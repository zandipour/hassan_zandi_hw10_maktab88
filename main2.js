
let usersList = document.querySelector("#usersList > .row");
let usersList2 = document.querySelector("#usersList2 > .row");
let pageoneusers;
let pagetwousers;
let allUsers;
let strAllUsers ;
$(() => {
    $.ajax({
        url: "https://reqres.in/api/users?page=1",
        type: "GET",
        success: function (response, statusetext, xhr) {
            pageoneusers = response.data
            for (const user of pageoneusers) {
                usersList.innerHTML+=`<div class="col-4 my-3">
            <div class="card " id="page1">
                 <div class="card-body">
                 <img src="${user.avatar}" class="card-img-top " alt="${user.id}">
                    <h5 class="card-title">"${user.first_name} ${user.last_name}"</h5>
                    <p>${user.email}</p>
                     <a href="./info.html" class="btn btn-primary w-100">profile</a>
                 </div>
             </div>
         </div>`;
            }


        },
        error: function (err) {
            console.log(err);
        },
        async: false

    });

    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        type: "GET",
        success: function (response, statusetext, xhr) {
            pagetwousers = response.data
            for (const user of pagetwousers) {
                usersList2.innerHTML+=`<div class="col-4 my-3">
            <div class="card "  id="page2">
                 <div class="card-body">
                 <img src="${user.avatar}" class="card-img-top " alt="${user.id}">
                    <h5 class="card-title">"${user.first_name} ${user.last_name}"</h5>
                    <p>${user.email}</p>
                     <a href="info.html" class="btn btn-primary w-100" id = "btn">profile</a>
                 </div>
             </div>
         </div>`;
            }


        },
        error: function (err) {
            console.log(err);
        },
        async: false

    });
    allUsers = [...pageoneusers, ...pagetwousers];
     strAllUsers = JSON.stringify(allUsers); 
    let root = document.getElementById("root");
    console.log(strAllUsers);
    console.log(typeof strAllUsers);
    renderReadUser(root);
    
    // const id = window.location.search.split("=")[1];
    // let usertarget = strAllUsers.find(el => el.id === id);
    // root.innerHTML = `<h4 class= "m-3" ${usertarget.first_name} ${usertarget.last_name} </h4> <p>${usertarget.email}</p>`
    // const btnProfile = () => {
    //     window.location.href = `./info.html?id=${id}`
    // }
});

function renderReadUser(uid) {

  
    const user = strAllUsers.find(user => user.id === uid);
  
    root.textContent = 'User info';
  
    root.innerHTML = Object.keys(user)
      .map(property => `<p><strong>${property}:</strong> ${user[property]}</p>`)
      .join('');
  
    root.innerHTML = `
      <button class="button" onclick="renderUpdateUser(${uid})">update</button>
      <button class="button" onclick="deleteUser(${uid})">delete</button>`;
  
    
  }
  







