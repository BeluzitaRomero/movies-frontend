document.addEventListener("DOMContentLoaded", (event) => {
  // // Inicializar Select2 para el select de actores
  // $("#actores").select2({
  //   placeholder: "Seleccione actores",
  //   width: "100%",
  // });
  // Cargar directores
  fetch(
    "http://localhost/backend-cac/controllers/DirectorController.php?action=list"
  )
    .then((response) => response.json())
    .then((data) => {
      const directorSelect = document.getElementById("idDirector");
      data.directores.forEach((director) => {
        let option = document.createElement("option");
        option.value = director.idDirector;
        option.text = director.nombreDirector;
        directorSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error al cargar directores:", error);
    });

  fetch(
    "http://localhost/backend-cac/controllers/RepartoController.php?action=list"
  )
    .then((response) => response.json())
    .then((data) => {
      const actorSelect = document.getElementById("actores");
      data.generos.forEach((actor) => {
        const option = document.createElement("option");
        option.value = actor.idActor;
        option.textContent = actor.nombreActor;
        actorSelect.appendChild(option);
      });
    });

  fetch(
    "http://localhost/backend-cac/controllers/GeneroController.php?action=list"
  )
    .then((response) => response.json())
    .then((data) => {
      const generosSelect = document.getElementById("generos");
      data.generos.forEach((genero) => {
        const option = document.createElement("option");
        option.value = genero.idGenero;
        option.textContent = genero.nombreGenero;
        generosSelect.appendChild(option);
      });
    });

  // Manejar el envío del formulario
  document
    .getElementById("peliculaForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      fetch(
        "http://localhost/backend-cac/controllers/PeliculaController.php?action=create",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Obtener el nombre de la película del formulario
            const peliculaNombre = formData.get("titulo");

            // Insertar el nombre de la película en el modal
            document.getElementById("peliculaNombre").textContent =
              peliculaNombre;

            // Mostrar el modal de éxito
            const successModal = new bootstrap.Modal(
              document.getElementById("successModal")
            );
            successModal.show();
            // Borrar el formulario
            document.getElementById("peliculaForm").reset();
          } else {
            alert("Error al agregar película");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
});
