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

function displayEmpleados(empleado) {
  var table = document.querySelector("tbody");
  for (var i = 0; i < empleado.length; i++) {
    table.innerHTML += 
    `<tr>
        <td>${empleado[i].first_name}</td>
        <td>${empleado[i].last_name}</td>
        <td>${empleado[i].phone_number}</td>
        <td>${empleado[i].email}</td>
        <td>${empleado[i].address}</td>
        <td class = "tdAccion">
          <button class="btn btn-primary"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger" onClick="deleteEmpleado(${empleado[i].employee_id})"><i class="fa fa-trash"></i></button>
        </td>
    </tr>`;
  }
}

function deleteEmpleado(id) {
  axios
    .delete(url + "/empleado/" + id, headers)
    .then(function (res) {
      console.log(res);
      alert("Empleado eliminado");
      window.location.href = "empleados.html";
    })
    .catch(function (err) {
      console.log(err);
    });
}