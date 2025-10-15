
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

    Enviar(data.nome)

    console.log(data)


}

function Enviar(parametro) {

    //var nome = document.getElementById("nomeid");
    
    if (parametro != "") {
        alert('Obrigado sr(a) ' + parametro + ' os seus dados foram encaminhados com sucesso');
    }

}

