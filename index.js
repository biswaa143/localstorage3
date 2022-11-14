let form = document.getElementsByClassName("userForm")[0];
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phoneNumber");

  let user = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  };

  if (localStorage.getItem(user.email)) {
    // if email alreay exist
    if (confirm("Email already exist !! Overwrite it ? ")) {
      removeUser(user.email);
    } else {
      return;
    }
  }

  showUserOnScreen(user);

  name.value = "";
  email.value = "";
  phoneNumber.value = "";
});

function showUserOnScreen(user) {
    localStorage.setItem(user.email, JSON.stringify(user));
    const parentNode = document.getElementById("userList");
    const childHtml = `<li class="userInfo" id='${user.email}' > ${user.name} ${user.email} ${user.phoneNumber} </li>`;
  
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
  }