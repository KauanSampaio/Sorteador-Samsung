let teamSortButton = document.querySelector("#teamSortButton");
teamSortButton.addEventListener("click", () => {
    // Pegando a lista de nomes e separando linha por linha em um array
    let nameList = document.querySelector("#nameList").value.split("\n");

    // Removendo todos os elementos vazios que estejam presentes no array
    nameList = nameList.filter((element) => element != '');

    // Pegando a quantidade de times e o elemento onde será criado a tabela
    let numTeams = document.querySelector("#numTeams").value;
    // Tratando a entrada de dados no input de quantidade de times
    if(!numTeams || numTeams <=0 || numTeams > nameList.length) {
        alert("Quantidade de times inválida! Tente novamente.");
        return;
    }

    let divTable = document.querySelector("#teamsTable");
    
    // Criando a tabela
    let newTable = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableBody = document.createElement("tbody");

    // Populando o cabeçalho da tabela
    for(let i = 1; i<=numTeams; i++) {
        let headerRow = document.createElement("th");
        headerRow.style.border = "2px solid #3446b3";
        headerRow.appendChild(document.createTextNode(`Time ${i}`));
        tableHeader.appendChild(headerRow);
    }

    // Sorteando os times e populando o corpo da tabela
    let realNumberOfNames = nameList.length;
    for(let i = 0; i < parseInt((realNumberOfNames / numTeams)); i++) {
        let bodyRow = document.createElement("tr");
        for(let j = 0; j < numTeams; j++) {
            let numSorted = parseInt(Math.random() * (nameList.length - 0) + 0);
            let bodyRowContent = document.createElement("td");
            bodyRowContent.appendChild(document.createTextNode(nameList[numSorted]));
            bodyRow.appendChild(bodyRowContent);
            nameList.splice(numSorted, 1);
        }
        bodyRow.style.border = "1px solid #3446b3";
        tableBody.appendChild(bodyRow);
    }

    // Verificando se sobraram nomes sem serem sorteados
    if(nameList.length != 0){
        // Caso tenham sobrado, sorteia eles entre os times até não restarem nenhum
        realNumberOfNames = nameList.length;
        let bodyRow = document.createElement("tr");
        for(let i = 0; i<realNumberOfNames; i++) {
            let numSorted = parseInt(Math.random() * (nameList.length - 0) + 0);
            let bodyRowContent = document.createElement("td");
            bodyRowContent.appendChild(document.createTextNode(nameList[numSorted]));
            bodyRow.appendChild(bodyRowContent);
            nameList.splice(numSorted, 1);
        }
        bodyRow.style.border = "1px solid #3446b3";
        tableBody.appendChild(bodyRow);
    }

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