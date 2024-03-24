document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aquí iría la lógica para verificar el usuario y contraseña
  // Por ejemplo, puedes compararlos con valores predeterminados o hacer una solicitud a un servidor

  if (username === "usuario" && password === "contraseña") {
    // Inicio de sesión exitoso
    document.getElementById("message").textContent = "Inicio de sesión exitoso!";
    // Aquí redireccionarías al usuario a otra página
  } else {
    // Inicio de sesión fallido
    document.getElementById("message").textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
  }
});
