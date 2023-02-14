// Seleciona todos os elementos

const form = document.querySelector("#new-element-form")
const list = document.querySelector("#list")
const input = document.querySelector("#element-input")

// Quando o formulário é submetido adiciona um novo elemento
form.addEventListener("submit", e => {
  e.preventDefault()

  // Criação de novo item
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-element")

  // Adiciona item para a lista
  list.appendChild(item)

  // Limpa input
  input.value = ""

  // Deleta um item quando a evento de clique
  item.addEventListener("click", () => {
    item.remove()
  })
})