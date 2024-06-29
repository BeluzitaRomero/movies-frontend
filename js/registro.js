document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación de campos
    const name = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const rePass = document.getElementById("pass-repeat").value.trim();

    if (name.length < 6 || name.length > 15) {
      alert("Usuario debe tener entre 6 y 15 caracteres");
      return;
    } else if (pass.length < 6) {
      alert("Contraseña debe tener al menos 6 caracteres");
      return;
    } else if (pass !== rePass) {
      alert("Las contraseñas no coinciden");
      return;
    }

    //Vemos por consola que se tomaron los campos correctamente
    console.log("Usuario:", { name, email, pass });

    // Borrar los campos
    document.getElementById("form-registro").reset();
    alert("Usuario registrado");
  });
});
