const botTitulo = document.querySelector('.bot__titulo');
const main = document.querySelector('[data-main]');



export async function criarPlayer (para) {
    await para.forEach(musi => {
        main.innerHTML = `
        <div class="player__music">
            <iframe width="560" height="315" src="${musi.video}" title="YouTube video player" frameborder="0" class="musica"></iframe>

            <div class="container__bot">
                <div>
                    <button class="bot bot__gostei"><img src="../imgs/gostei__vazio.png" alt="Botão de gostei"></button>
                </div>
                <div>
                    <button class="bot bot__voltar"><img src="../imgs/voltar.png" alt="voltar"></button>
                    <button class="bot bot__pausar__play"><img src="../imgs/pause.png" alt="pausar voltar"></button>
                    <button class="bot bot__proximo"><img src="../imgs/proximo.png" alt="proximo"></button>
                </div>
            </div>
        </div>
        `
    });
}
criarPlayer();
