let nota1;
let n1;
let nf2;
let med;
let nf;
let quest;
let acert;
let np;
let n2;
let image;
let stat;
let nota2;
let valor;
let valoracert;

function prova() {
    quest = document.getElementById('quest').value;
    acert = document.getElementById('acertos').value;
    valoracert = document.getElementById('valoracert');

    if (quest != '' && acert != '') {
        multi = 10 / Number(quest)
        n2 = document.getElementById('nota2')
        np = Number(acert) * multi
        n2.innerHTML = `${np}`
        valoracert.innerHTML = acert
    }
    

    document.getElementById('acertos').max = quest
}

function calcular() {
    nota1 = document.getElementById('nota1');
    nota2 = document.getElementById('nota2');

    n1 = Number(nota1.value) * 0.4
    nf2 = Number(nota2.innerHTML) * 0.6
    med = document.getElementById('media')
    image = document.getElementById('image')
    stat = document.getElementById('stat')
    nf = n1 + nf2;

    med.innerHTML = `${nf.toFixed(2)}`;

    if (nf >= 5) {
        image.src = "imagens/sim.png"
        document.getElementById('stat').style.color = 'green'
        stat.innerHTML = `Passou!!!`


    } else {
        image.src = "imagens/nao.png"
        document.getElementById('stat').style.color = 'red'
        stat.innerHTML = `REPROVOU`
    }

}

function mudarNota(elm){
    valor = document.getElementById('valor');
    valor.innerHTML = elm;
}

function changeValue(){
    acert = document.getElementById('acertos').value;
    valoracert = document.getElementById('valoracert');
    valoracert.innerHTML = acert;

    prova();
}

