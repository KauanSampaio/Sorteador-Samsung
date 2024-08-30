let button = document.querySelector("#sortButton");

button.addEventListener("click", () => {
    // Pegando a lista de nomes e separando linha por linha em um array
    let nameList = document.querySelector("#nameList").value.split("\n");

    // Removendo todos os elementos vazios que estejam presentes no array
    nameList = nameList.filter((element) => element != '');
});