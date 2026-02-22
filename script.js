// Seleciona os elementos do DOM
const novaTarefa = document.getElementById("nova-tarefa");
const adicionarTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

// Variáveis globais
let id = 0
let tarefas = [{}];

// Adiciona um evento de clique ao botão "Adicionar Tarefa"
adicionarTarefa.addEventListener("click", (event) => {
    event.preventDefault();

    // Incrementa o ID da tarefa
    id++;

    // Verifica se a tarefa não está vazia
    if (novaTarefa.value.trim() !== "") {
        tarefas.push({
            id: id,
            descricao: novaTarefa.value.trim(),
            concluida: false
        })

        // Cria um novo item de tarefa
        const tarefaItem = document.createElement("li");
        tarefaItem.classList.add("tarefa");
        tarefaItem.setAttribute("id", tarefas.length - 1);
        tarefaItem.innerHTML = `<p>
                                    <input type="checkbox"">${novaTarefa.value.trim()}
                                </p>
                                <button><img src="./img/excluir.png" alt="lixeira"></button>`;
        listaTarefas.appendChild(tarefaItem);

        // Adiciona o evento de clique para marcar a tarefa como concluída
        const checkbox = tarefaItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener('change', () => {
        tarefaItem.classList.toggle('feito')
        })

        // Adiciona o evento de clique para excluir a tarefa
        // Adiciona uma classe de animação para a remoção suave
        const botaoExcluir = tarefaItem.querySelector('button')
        botaoExcluir.addEventListener('click', () => {
            tarefaItem.classList.add('removendo');
            setTimeout(() => {
                tarefaItem.remove();
            }, 400)
        })

        // Limpa o campo de entrada após adicionar a tarefa
        novaTarefa.value = "";
    } else {
        // Exibe um alerta se a tarefa estiver vazia
        alert("Por favor, insira uma tarefa válida.");
    }
});

