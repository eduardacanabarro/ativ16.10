function validarForm() {
    var senha = document.getElementById("senha").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (senha.length < 8) {
        alert("A senha deve ter 8 caracteres.");
        return false;
    }

    if (nome === "" || email === "") {
        alert("Nome e email são campos obrigatórios.");
        return false;
    }

    // Se a senha tem pelo menos 8 caracteres e nome/email não estão vazios, o formulário é enviado
    return true;
}
