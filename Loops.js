// Programa de Lista de Contatos com Loops

let contatos = [{
    nome: "Maxwell Wright",
    telefone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@convallis.edu"
}];

while (true) {
    let opcao = prompt("Escolha uma opção:\n- primeiro: exibir o primeiro contato\n- último: exibir o último contato\n- todos: exibir todos os contatos\n- novo: adicionar um novo contato\n- encerrar: sair do programa");

    switch (opcao) {
        case "primeiro":
            if (contatos.length > 0) {
                let primeiro = contatos[0];
                alert("Primeiro contato:\nNome: " + primeiro.nome + "\nTelefone: " + primeiro.telefone + "\nEmail: " + primeiro.email);
            } else {
                alert("Nenhum contato na lista.");
            }
            break;
        case "último":
            if (contatos.length > 0) {
                let ultimo = contatos[contatos.length - 1];
                alert("Último contato:\nNome: " + ultimo.nome + "\nTelefone: " + ultimo.telefone + "\nEmail: " + ultimo.email);
            } else {
                alert("Nenhum contato na lista.");
            }
            break;
        case "todos":
            if (contatos.length > 0) {
                let todosContatos = "Todos os contatos:\n";
                for (let i = 0; i < contatos.length; i++) {
                    let contato = contatos[i];
                    todosContatos += (i + 1) + ". Nome: " + contato.nome + ", Telefone: " + contato.telefone + ", Email: " + contato.email + "\n";
                }
                alert(todosContatos);
            } else {
                alert("Nenhum contato na lista.");
            }
            break;
        case "novo":
            let nome = prompt("Digite o nome:");
            let telefone = prompt("Digite o telefone:");
            let email = prompt("Digite o email:");
            if (nome && telefone && email) {
                contatos.push({ nome: nome.trim(), telefone: telefone.trim(), email: email.trim() });
                alert("Contato adicionado: " + nome.trim());
            } else {
                alert("Entrada inválida. Tente novamente.");
            }
            break;
        case "encerrar":
            alert("Programa encerrado.");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }

    if (opcao === "encerrar") {
        break;
    }
}