document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("generoForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);

      fetch(
        "http://localhost/backend-cac/controllers/GeneroController.php?action=create",
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
            alert("Error al agregar género");
          }
        })
        .catch((error) => console.error("Error:", error));
    });
});
