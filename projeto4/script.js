let tarefas = []

function adicionarTarefa(){
   
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem")

        if (tarefa == ""){

            let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
            mensagem.textContent = mensagemErro;
            mensagem.style.color = "red"
        }else{
            let mensagemSucesso = "Tarefa adicionada com sucesso!";
            mensagem.textContent = mensagemSucesso;
            mensagem.style.color = "green"

            tarefas.push(tarefa)
            renderizarTarefas();

        }


    inputTarefa.value = "";

}


function renderizarTarefas(){
    
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""



   
    for(let i=0; i < tarefas.length; i++){
        
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    

     let botaoRemover = document.createElement("button");
     botaoRemover.className = 'remover';
     botaoRemover.textContent = "Remover";
     botaoRemover.onclick = () => removerTarefa(i);

     let botaoEditar = document.createElement("button");
     botaoEditar.className = 'editar';
     botaoEditar.textContent = "Editar";
     botaoEditar.onclick = () => editarTarefas(i);

    novaTarefa.appendChild(botaoEditar);
    novaTarefa.appendChild(botaoRemover);
    listaTarefas.appendChild(novaTarefa);

    }

}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefas()
}

function editarTarefas(i){
    let tarefaEditada = prompt("Edite a tarefa");
    if(tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

function limparLista(){
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de Tarefas limpa com sucesso."
}