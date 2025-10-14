

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    img;
    title;
    url;

    constructor(img, title, url) {
        this.img = img;
        this.title = title;
        this.url = url;

    }

    static mostrarNaTela() {
        const carousel = document.getElementById('imagem');
        const titleP = document.getElementById('carousel-title');

        if (carousel && titleP) {
            let aux = Carousel.arrayCarousel[Carousel._sequence];
            carousel.innerHTML = `<a href="${aux.url}"><img src="./img/${aux.img}" alt="${aux.title}"></a>`;
            titleP.innerHTML = `<h2>${aux.title}</h2>`;
        }
    }


    static Start(arr) {

        window.addEventListener('DOMContentLoaded', function () {
            if (arr && arr.length > 0) {
                Carousel.arrayCarousel = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.mostrarNaTela(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);

                const botaoVoltar = document.querySelector('.botaoVoltar');
                const botaoProximo = document.querySelector('.botaoProximo');

                botaoVoltar.addEventListener('click', Carousel.voltar);
                botaoProximo.addEventListener('click', Carousel.proximo);
            }

            else {
                throw "Method Start need a Array Variable.";
            }

        })
    }

    static Next() {
        Carousel._sequence++;

        //Veerifica se o array ja chegou no final, caso seja verdadeiro, reinicia
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.mostrarNaTela();
    }


    static voltar() {
        Carousel._sequence--
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.mostrarNaTela();
    }

    static proximo() {
        Carousel._sequence++
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
            Carousel.mostrarNaTela();

    }


};

