const nameSortButton = document.querySelector("#nameSortButton");
nameSortButton.addEventListener("click", () => {
    // Pegando a lista de nomes e separando linha por linha em um array
    let nameList = document.querySelector("#nameList").value.split("\n");

    // Removendo todos os elementos vazios que estejam presentes no array
    nameList = nameList.filter((element) => element != '');

    // Pegando a quantidade de nomes e o elemento onde será criado a tabela
    let numNames = document.querySelector("#numNames").value;
    
    // Tratando a entrada de dados no input de quantidade de nomes
    if(!numNames || numNames <=0 || numNames > nameList.length) {
        alert("Quantidade de pessoas inválida! Tente novamente.");
        return;
    }

    let divTable = document.querySelector("#namesTable");

    // Criando a tabela
    let newTable = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableBody = document.createElement("tbody");

    // Criando o cabeçalho da tabela
    let headerRow = document.createElement("th");
    headerRow.style.border = "2px solid #3446b3";
    headerRow.appendChild(document.createTextNode(`Nomes`));
    tableHeader.appendChild(headerRow);

    // -------------- Lógica Aqui --------------
    // Sorteando os nomes e populando o corpo da tabela
    for(let i = 0; i < numNames; i++) {
        let bodyRow = document.createElement("tr");
        
        let numSorted = parseInt(Math.random() * (nameList.length - 0) + 0);
        let bodyRowContent = document.createElement("td");
        bodyRowContent.appendChild(document.createTextNode(nameList[numSorted]));
        bodyRow.appendChild(bodyRowContent);
        nameList.splice(numSorted, 1);

        bodyRow.style.border = "1px solid #3446b3";
        tableBody.appendChild(bodyRow);
}
    // -----------------------------------------

    tableBody.style.border = "1px solid #3446b3";
    
    // Populando a tabela com todos os dados
    newTable.appendChild(tableHeader);
    newTable.appendChild(tableBody);

    // Gerando a tabela na tela
    divTable.appendChild(newTable);

    // Ajustando a borda da tabela
    newTable.style.border = "2px solid #3446b3";

    document.querySelector("#sortForm").innerHTML = "";
    document.querySelector("#drawAgain").innerHTML = `
        <button type="button" id="drawAgainButton" onClick="window.location.reload()">Sortear Novamente</button>
    `;
});