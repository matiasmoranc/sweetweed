console.log('test');
//GENERADOR CONTENIDO IG

const galery = document.querySelector('.galery');
const feet = document.querySelector('contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQVJVaGIzM2NwX09hTTB2ZAkRQVTM1b2lsbnlRb2h2ZAFFYT2tZANTZAuN291YlRIR05WOFBiaDY0aXBXdzQ2cVotWTR5MjVRTWticnFwSUo1SEg1Yk9haTRERDNWdHUtOEh3anFUOUxCa2VZARS1kQW1ZAbgZDZD';

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit80&access_token=${token}`;

let contador = 0;
const contenedorUno = document.getElementById('cont-uno');
const contenedorDos = document.getElementById('cont-dos');
const contenedorTres = document.getElementById('cont-tres');
const carousel = document.getElementById('carousel');

fetch(url)
    .then(res => res.json())
    .then(data => CrearHtml(data.data))


function CrearHtml(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        if (i === 0){
            contenedorUno.innerHTML += `
            <div class="image overflow">
                <img loading="lazy" src="${data[0].media_url}" alt="">
                <div class="opacity-hover">
                    <a href="${data[0].permalink}" class="caption">
                        <p>
                            ${data[0].caption.slice(0,100)}
                        </p>
                    </a>
                </div>
            </div>
        `;
        } else if (i === 1){
            contenedorDos.innerHTML += `
            <div class="image overflow">
                <img loading="lazy" src="${data[1].media_url}" alt="">
                <div class="opacity-hover">
                    <a href="${data[1].permalink}" class="caption">
                        <p>
                            ${data[1].caption.slice(0,100)}
                        </p>
                    </a>
                </div>
            </div>
        `;
        } else if (i === 2){
            contenedorTres.innerHTML += `
            <div class="image overflow">
                <img loading="lazy" src="${data[2].media_url}" alt="">
                <div class="opacity-hover">
                    <a href="${data[2].permalink}" class="caption">
                        <p>
                            ${data[2].caption.slice(0,100)}
                        </p>
                    </a>
                </div>
            </div>
        `;
        } else {
            let div = document.createElement('DIV');
            div.classList.add('medio__contenedor');
            div.innerHTML += `
            <div class="image overflow">
                <img loading="lazy" src="${data[i].media_url}" alt="">
                <div class="opacity-hover">
                    <a href="${data[i].permalink}" class="caption">
                        <p>
                            ${data[i].caption.slice(0,100)}
                        </p>
                    </a>
                </div>
            </div>
            `;
            carousel.appendChild(div);
        }
        
    }


    // for (const img of data) {
    //     console.log(img);
    //     galery.innerHTML += `
    //         <div class="image overflow">
    //             <img loading="lazy" src="${img.media_url}" alt="">
    //             <div class="opacity-hover">
    //                 <a href="${img.permalink}" class="caption">
    //                     <p>
    //                         ${img.caption.slice(0,100)}
    //                     </p>
    //                 </a>
    //             </div>
    //         </div>
    //     `;
    // }
}


//MENU HAMBURGUESA
const iconoMenu = document.getElementById('menu-hamb');
// const iconoMenuCerrar = document.getElementById('menu-hamb-cerrar');
const contenidoMenu = document.getElementById('contenido-menu');
const fondoMenu = document.getElementById('fondo-menu');

iconoMenu.addEventListener('click', () => {
    desplegarMenu();
});
// iconoMenuCerrar.addEventListener('click', () => {
//     desplegarMenu();
// });
function desplegarMenu() {
    contenidoMenu.classList.toggle('mostrar')
    fondoMenu.classList.toggle('mostrar')

    //transformar hamb en X
    for (let i = 0; i < iconoMenu.children.length; i++) {        
        if(document.querySelector('#contenido-menu.mostrar')) {
           iconoMenu.children[i].classList.add('cerrar');
        } else {
            iconoMenu.children[i].classList.remove('cerrar');
        }
    }
}   