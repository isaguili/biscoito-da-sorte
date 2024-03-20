//variáveis
const firstScreen = document.querySelector(".firstScreen")
const secondScreen = document.querySelector(".secondScreen")
let phrases = ["A vida trará coisas boas se tiver paciência.", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "Não compense na ira o que lhe falta na razão.", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "A maior de todas as torres começa no solo.", "Não há que ser forte. Há que ser flexível.", "O riso é a menor distância entre duas pessoas.", "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.", "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.", "Você é do tamanho do seu sonho.", ]



//eventos
firstScreen.querySelector("img").addEventListener('click', handleClick)
secondScreen.querySelector("button").addEventListener('click', handleClick2)

//funções
function toggleScreen () {
    firstScreen.classList.toggle("hide")
    secondScreen.classList.toggle("hide")
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function handleClick () {
    toggleScreen()
    
    let arrayPosition = randomNumber(0, 9)
     
    secondScreen.querySelector("p").innerText = phrases[arrayPosition]
    console.log(arrayPosition)
}

function handleClick2 () {
    toggleScreen()
}
