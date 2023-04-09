const localStorageName = 'to-do-list'

function validateIfExistsNewTask()
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('text-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask()
{
    let input = document.getElementById('text-task')
    input.style.border = ''
    
    //validação
    if(!input.value)
    {
        input.style.border = '3px solid red'
        alert("Digite algo para inserir na lista de tarefas!")
    }

    else if(validateIfExistsNewTask())
    {
        alert("Já existe uma tarefa com essa descrição!!")
    }

    else
    {
        //adicionar ao armazenamento local
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName, JSON.stringify(values))
        showValues()
        
    }
    input.value = ''
}
function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list-task')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += 
        `<li> ${values[i]['name']} 
        <span>
        <button id="done" onclick='doneTask("${values[i]['name']}")' title = "Realizar tarefa">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
        </button>
        <button id="delete" onclick='removeTask("${values[i]['name']}")' title = "Excluir tarefa">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
        </button>
        </span>
        </li>`
    }
}

function removeTask(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName, JSON.stringify(values))

    showValues()
}

function doneTask(data)
{
    let value = data
    inputValue = document.getElementsByTagName('li')
    
}

showValues()