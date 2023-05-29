window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
  if (localStorage.getItem("token")) {
    headers = {
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    loadEmpleado();
  } else {
    window.location.href = "login.html";
  }
}

function loadEmpleado() {
  axios
    .get(url + "/empleado", headers)
    .then(function (res) {
      console.log(res);
      displayEmpleados(res.data.message);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayEmpleados() {
  var body = document.querySelector("body");
  for (var i = 0; i < loadEmpleado.length; i++) {
    body.innerHTML += `<h3>${empleado[i].first_name}</he>`;
  }
}
