window.onload = init;
var headers = {};
var url = "http://localhost:3000";
var urlParams = new URLSearchParams(window.location.search);
    empleadoID = urlParams.get("id");

function init() {
    if (localStorage.getItem("token")) {
      headers = {
        headers: {
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };
      
        document.querySelector(".btn-primary").addEventListener("click", putEmpleado);
    } else {
      window.location.href = "login.html";
    }   
}

function putEmpleado() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;

    axios({
        method: 'put',
        url: `${url}/empleado/${empleadoID}`,
        data: {
            first_name: nombre,
            last_name: apellido,
            phone_number: telefono,
            email: email,
            address: direccion
        },
        headers: headers.headers
    }).then((res) => {
        console.log(res);
        alert("Edición exitosa");
        window.location.href = 'empleados.html';
    }).catch((err) => {
        console.log(err);
    });
}