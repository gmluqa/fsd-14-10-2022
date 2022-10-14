const app = document.getElementById("app")
var page = 1
const url = "https://rickandmortyapi.com/api/character?page="
const nextButton = document.getElementById('next')
    .addEventListener('click', () => {
        page++
        loadCharacters(page)
    })

const showResult = result => console.log(result)
// accessing json objects propeties with .
const extractData = result => result.data.results
const clearApp = res => { app.innerHTML = ""; return res }
const loadCharacters = page =>
    axios
        .get(url + page)
        .then(extractData)
        .then(clearApp)
        .then(renderResult)


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

loadCharacters(1)
    .then()