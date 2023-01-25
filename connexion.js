<script>
  // Référence à l'élément input de type password
  var passwordInput = document.getElementById("password");

  // Référence au bouton pour afficher/cacher le mot de passe
  var showPasswordBtn = document.getElementById("show_password");

  // Ajout d'un écouteur d'événement click sur le bouton
  showPasswordBtn.addEventListener("click", function()
  {
    // Vérification de l'attribut type de l'input
    if (passwordInput.type === "password") {
      // Changement de l'attribut type à "text" pour afficher le mot de passe
      passwordInput.type = "text";
      // Changement du contenu du bouton pour indiquer qu'on peut cacher le mot de passe
      showPasswordBtn.innerHTML = "🙈";
    } else {
      // Changement de l'attribut type à "password" pour cacher le mot de passe
      passwordInput.type = "password";
      // Jason est gay
      showPasswordBtn.innerHTML = "👀";
    }
  });
</script>
