function adicionarTarefa(){
   
    //Puxa o input para a variavel
    const inputTarefa = document.getElementById("inputTarefa");
    //Passa o valor do input para a variavel
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem")

        //se o valor do input for vazio então mostre uma mensagem
        if (tarefa == ""){
            //mostre uma mensagem de erro
            let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
            mensagem.textContent = mensagemErro;
            mensagem.style.color = "red"
        }else{
            //Após adicionar a tarefa, a mensagem é adicionada pelo id
            let mensagemSucesso = "Tarefa adicionada com sucesso!";
            //Pega o elemento mensagem pelo ID e adiciona a variavel mensagem
            mensagem.textContent = mensagemSucesso;
            mensagem.style.color = "green"

            //Pega a ul pelo ID
            const listaTarefas = document.getElementById("listaTarefas");
            //Cria um novo elemento Li
            const novaTarefa = document.createElement("li");
            //Adiciona o valor da variavel tarefa na variavel novaTarefa(li)
            novaTarefa.textContent = tarefa;
            //Adiciona o elemento filho(li = novaTarefa) no pai (ul=listaTarefas)
            listaTarefas.appendChild(novaTarefa);
        }


    //limpa o input do usúario
    inputTarefa.value = "";

}
