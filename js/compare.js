
//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }


}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass);

        } else {
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos > -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {

    if (carArr.length > 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {

    const carroComparacao = [carArr[0], carArr[1]]

    carroComparacao.forEach((arrayDeCarros, indice) => {
        for(const propriedade in arrayDeCarros){
            let parteDoMeioDaPropriedade = propriedade.toLowerCase();

            if(parteDoMeioDaPropriedade == 'nome'){
                parteDoMeioDaPropriedade = 'modelo'
            }

            const idDaTabela = `compare_${parteDoMeioDaPropriedade}_${indice}`

            const elemento = document.getElementById(idDaTabela)

            if(elemento){
                if(parteDoMeioDaPropriedade == 'image'){
                    elemento.innerHTML = `<img src="${arrayDeCarros[propriedade]}" alt="">`
                }else{
                    elemento.textContent = arrayDeCarros[propriedade]
                }
            }


        }
    } );

    //document.getElementById('compare_image_0').innerHTML =  `<img src="${car1.image}" alt="">`;
    //document.getElementById('compare_image_1').innerHTML = `<img src="${car2.image}" alt="">`; 



}

