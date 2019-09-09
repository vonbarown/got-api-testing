const app = document.getElementById('root')
const logo = document.createElement('img')
// logo.src = ''

const container = document.createElement('div')
container.setAttribute('class', 'container')


app.appendChild(container);







//creating a request variable and assigning it a new XMLHttpRequest
let request = new XMLHttpRequest();

//now opening a connection, using the GEt request on url endpoint
request.open('GET', 'https://anapioficeandfire.com/api/houses', true)

request.onload = function () {
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(house => {

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = house.name

            //element creation
            const words = document.createElement('p');
            const region = document.createElement('p');
            const founded = document.createElement('p')

            if (house.words === '') {
                words.textContent = `I'm boring`
            } else {
                words.textContent = house.words
            }

            founded.textContent = house.founded
            region.textContent = `Region: ${house.region}`


            //appending the cards to the container
            container.appendChild(card)

            // each card has h1 and p tags
            card.appendChild(h1)
            card.appendChild(words)
            card.appendChild(founded)
            card.appendChild(region)


            console.log(house.name);
        });
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Winter is here`
        app.appendChild(errorMessage)

    }

}

//sending request
request.send()