const app = document.getElementById("app")
const url = "https://rickandmortyapi.com/api/character"


const showResult = result => console.log(result)
// accessing json objects propeties with .
const extractData = result => result.data.results
const clearApp = (res) => { app.innerHTML = ""; return res }

const renderResult = characters => {
    characters.map((character) => {
        console.log(character)
        // document.createElement('button')(app)
        let div = document.createElement("div")
        div.innerHTML = character.name
        app.appendChild(div)
    })
}

app.innerHTML = "datos cargando..."

axios
    .get(url)
    .then(extractData)
    .then(clearApp)
    .then(renderResult)