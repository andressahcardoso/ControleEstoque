function login() {

    var name = document.getElementsByName('username')[0].value;
    var senha = document.getElementsByName('password')[0].value;
    console.log("oi")
    console.log(name)
    console.log(senha)


    if (name == "senac" && senha == "123") {
      window.location = "../Produtos/produtos.html"; 
    }
    
    else{
      alert("Senha ou usuário inválido! ");
    }
}