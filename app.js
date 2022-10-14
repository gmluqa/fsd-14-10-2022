const app = document.getElementById("app")
const url = "https://rickandmortyapi.com/api/character"


const showResult = (resultado => console.log(resultado))
const renderResult = (result) => {
    console.log(result)

}

app.innerHTML = "datos cargando..."

axios
    .get(url)
    .then(renderResult)