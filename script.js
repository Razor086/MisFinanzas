document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pilotForm");
  const successMsg = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Capturar datos del usuario
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        business: document.getElementById("business").value,
        date: new Date().toISOString(),
      };

      console.log("Registro Prueba Piloto:", formData);

      // Mostrar mensaje de éxito y ocultar formulario
      form.reset();
      form.classList.add("hidden");
      successMsg.classList.remove("hidden");
    });
  }
});
