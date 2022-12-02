var x = document.querySelector("#icone_menu_exit");  /* Menu */
var y = document.querySelector("#icone_menu");

y.parentNode.replaceChild(y, x)

var count = 1

function menu_dropdown() {

    if (count == 1) {
        y.parentNode.replaceChild(x, y)
        count = 2
        console.log(1)
    }

    else {
        x.parentNode.replaceChild(y, x)
        count = 1
        console.log(2)
    }
}

function menu() {
    x.parentNode.replaceChild(y, x)
    count = 1
    console.log(2)
}


var nome_relatorio = 'Produtos'  /* Exportar em PDF */

function PDF() {
    console.log("Tabela PDF")
    
    var doc = new jsPDF()
    doc.text('Tabela de Produtos', 10, 10)
    doc.save(nome_relatorio+'.pdf')

    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'cm',
        format: 'letter'
    })
}


// Adicionar Produtos

function more(valorMaximo){
    var value = parseInt(document.getElementById('qtd-prod').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value >= valorMaximo) {
        value = valorMaximo;
    } else {
        value++;
    }
    document.getElementById('qtd-prod').value = value;
  }
  
  function less(valorMinimo){
    var value = parseInt(document.getElementById('qtd-prod').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value <= valorMinimo) {
        value = 0;
    } else {
        value--;
    }
    document.getElementById('qtd-prod').value = value;
}
