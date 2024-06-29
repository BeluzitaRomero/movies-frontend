document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación de campos
    const user = document.getElementById("nombre-usuario").value.trim();
    const pass = document.getElementById("password").value.trim();
    if (!user || !pass) {
      alert("Por favor, completa todos los campos.");
      return;
    } else if (user.length < 6 || user.length > 15 || pass.length < 6) {
      alert("Usuario y contraseña deben tener entre 6 y 15 caracteres");
      return;
    }

    //Vemos por consola que se tomaron los campos correctamente
    console.log("Usuario:", { user, password });

    // Borrar los campos
    document.getElementById("form").reset();
    alert("Login exitoso");
  });
});
