const linkAPI = "http://localhost:3000/musicas";
const main = document.querySelector('[data-main]');


async function API () {
    const API = await fetch(linkAPI);
    const listadeMusicas = await API.json();
    criarCardMusic(listadeMusicas);
    aleatoriezar(listadeMusicas);
}
API();

function criarCardMusic (para) {
    para.forEach(musi => {
        main.innerHTML += `
        <div class="musica">
            <div class="thumb"><button><img src="${musi.imagem}" alt="musica"></button></div>
            <div class="inf__musica">
                <h2 class="nome__music">${musi.musica}</h2>
                <h2 class="nome__cantor">${musi.cantor}</h2>
                <p hidden class="id">${musi.id}</p>
            </div>
        </div>
        `
    });
}

function aleatoriezar (para) {
    let listaNumeros = []
    for(let i = 0; i < 10; i++){
        const numeros = Math.floor(Math.random() * para.length);
        listaNumeros.push(numeros);
    }

    const musicas = document.querySelectorAll('.musica');
    for(let musica of musicas){
        const id = Number(musica.querySelector('.id').innerHTML);

        if(listaNumeros.includes(id)){
            musica.style.display = "block";
        }else{
            musica.style.display = "none";
        }
    }
}

export function musicasAddRecent (para) {
    const tamanho = para.length - 10

    let Numeros = []
    for(let i = tamanho; i < para.length; i++){
        Numeros.push(i);
    }

    const musicas = document.querySelectorAll('.musica');
    for(let musica of musicas){
        const id = Number(musica.querySelector('.id').innerHTML);
        
            if(Numeros.includes(id)){
                musica.style.display = `block`
                main.style.flexDirection = `row-reverse`
            }else{
                musica.style.display = `none`
            }
    }

}
