const body = document.body
const carrusel = [
  "./assets/img/back1.jpg",
  "./assets/img/back2.jpg",
  "./assets/img/back3.jpg",
  "./assets/img/back4.jpg",
  "./assets/img/back5.jpg",
  "./assets/img/back6.jpg",
  "./assets/img/back7.jpg",
  "./assets/img/back8.jpg",
  "./assets/img/back9.jpg",
  "./assets/img/back10.jpg",
  "./assets/img/back11.jpg",
  "./assets/img/back12.jpg",
  "./assets/img/back13.jpg",
  "./assets/img/back14.jpg",
  "./assets/img/back15.jpg",
  "./assets/img/back16.jpg",
  "./assets/img/back17.jpg",
  "./assets/img/back18.jpg",
  "./assets/img/back19.jpg",
  "./assets/img/back20.jpg"
]
const fondoVariable = () =>{
  const randomNumber = Math.floor(Math.random() * carrusel.length);
  newfondoVariable = carrusel[randomNumber]
  body.style.backgroundImage = `url(${newfondoVariable})`;
}



setInterval(() => {
  fondoVariable()
}, 15000)

fondoVariable()