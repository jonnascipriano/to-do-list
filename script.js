const novaTarefa = document.getElementById("nova-tarefa");
const adicionarTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

let id = 0
let tarefas = [{}];

adicionarTarefa.addEventListener("click", (event) => {
    event.preventDefault();

    id++;

    if (novaTarefa.value.trim() !== "") {
        tarefas.push({
            id: id,
            descricao: novaTarefa.value.trim(),
            concluida: false
        })

        const tarefaItem = document.createElement("li");
        tarefaItem.classList.add("tarefa");
        tarefaItem.setAttribute("id", id);
        tarefaItem.innerHTML = `<p>
                                    <input type="checkbox"">${novaTarefa.value.trim()}
                                </p>
                                <button><img src="./img/excluir.png" alt="lixeira"></button>`;
        listaTarefas.appendChild(tarefaItem);
        novaTarefa.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }

    console.log(tarefas);
});
