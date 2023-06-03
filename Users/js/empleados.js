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
    loadEmpleado(0);

    //Busqueda al presionar enter
    var inputBusqueda = document.getElementById("busqueda");
    inputBusqueda.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            busqueda();
        }
    });
    //
    
  } else {
    window.location.href = "login.html";
  }
}

function loadEmpleado(metodo) {
  axios
    .get(url + "/empleado", headers)
    .then(function (res) {
      console.log(res);
      if (metodo == 0) {
        displayEmpleados(res.data.message);
      } else {
        busquedaEmpleado(res.data.message);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayEmpleados(empleado) {
  var table = document.querySelector("tbody");
  table.innerHTML = "";
  for (var i = 0; i < empleado.length; i++) {
    table.innerHTML += 
    `<tr>
        <td>${empleado[i].first_name}</td>
        <td>${empleado[i].last_name}</td>
        <td>${empleado[i].phone_number}</td>
        <td>${empleado[i].email}</td>
        <td>${empleado[i].address}</td>
        <td class = "tdAccion">
          <button class="btn btn-primary fa fa-pencil" onClick="editarEmpleado(${empleado[i].employee_id})"></button>
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

function editarEmpleado(id) {
  window.location.href = `editarEmpleado.html?id=${id}`;
}

function busqueda() {
  loadEmpleado(1);
}

function busquedaEmpleado(empleado) {
  var categoria = document.getElementById("categoria").value;
  var busqueda = document.getElementById("busqueda").value;

  const result = empleado.filter((empleado) => {
    if (empleado[categoria].toLowerCase().includes(busqueda.toLowerCase())) {
      return empleado;
    }
  })

  displayEmpleados(result)
}