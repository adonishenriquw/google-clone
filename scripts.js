document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchQuery = document.getElementById("search-box").value;
    // Aqui você pode adicionar a lógica para realizar a pesquisa
    console.log("Pesquisando por:", searchQuery);
  });
