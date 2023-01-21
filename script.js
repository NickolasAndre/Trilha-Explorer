const form = window.document.getElementById("form-habits")
const nlwSetup = new NLWSetup(form)
const button = window.document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add(){
    // para teste desativar esse
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    // const today = "01/01" //para testar colocar esse
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Dia já incluso!')
        return
    }
    alert('Adicionado com sucesso✅')
    nlwSetup.addDay(today)
}

function save(){

    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
