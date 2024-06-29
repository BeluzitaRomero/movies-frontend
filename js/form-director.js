document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("directorForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      console.log(formData); // Verifica qué datos se están capturando

      fetch(
        "http://localhost/backend-cac/controllers/DirectorController.php?action=create",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const successModal = new bootstrap.Modal(
              document.getElementById("successModal")
            );
            successModal.show();
            this.reset();
          } else {
            alert("Error al agregar director");
          }
        })
        .catch((error) => console.error("Error:", error));
    });
});
