const app = document.getElementById("app")
const url = "https://rickandmortyapi.com/api/character"


const showResult = result => console.log(result)
// accessing json objects propeties with .
const extractData = result => result.data.results
const clearApp = () => app.innerHTML = ""

const renderResult = characters => {
    clearApp()
    characters.map(() => {
        // document.createElement('button')(app)
        let button = app.appendChild(document.createElement("button"))
        app.appendChild(button)
    })
}

app.innerHTML = "datos cargando..."

axios
    .get(url)
    .then(extractData)
    .then(renderResult)