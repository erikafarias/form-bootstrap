document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.getElementById("enviar-datos");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");

  enviarBtn.addEventListener("click", () => {
    if (nombre.value && email.value && asunto.value && mensaje.value) {
      alert("Mensaje enviado!");
    } else {
      alert("Completar todos los campos");
    }
  });
});
