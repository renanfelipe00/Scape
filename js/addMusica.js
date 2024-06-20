const botTitulo = document.querySelector('.bot__titulo');
const botSubmit = document.querySelector('.submit__bot');
const nomeInput = document.querySelectorAll('.nome__input input');
const APIlink = 'https://scape-seven.vercel.app/js/musicas.json'

botTitulo.addEventListener('click', () => {
    window.location.href = `../index.html`
});


async function addMusica (cantor, musica, video, imagem) {
    const API = await fetch (APIlink, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            cantor: cantor,
            musica: musica,
            video: video,
            imagem: imagem
        }) 
    });

    if(!API.ok){
        throw new Error('algo deu errado, tente novamente!');
    }

    const listaVids = await API.json();
    return listaVids
}

async function requi (eve) {
    eve.preventDefault();

    const cantor = document.querySelector('#input__Cantor').value;
    const musica = document.querySelector('#input__nomeMusica').value;
    const video = document.querySelector('#input__video').value;
    const imagem = document.querySelector('#input__imagem').value;

    if(cantor == 0 || musica == 0 || video == 0 || imagem == 0){
        alert('preencha todos os campos');
    }else{
        addMusica(cantor, musica, video, imagem);

        window.location.href = `../index.html`
    }

}

botSubmit.addEventListener('click', eve => requi(eve));
