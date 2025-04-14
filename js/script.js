const body = document.body
const photos = [
  "./assets/img/back1.jpg",
  "./assets/img/back2.jpg",
  "./assets/img/back3.jpg",
  "./assets/img/back4.jpg",
  "./assets/img/back5.jpg",
  "./assets/img/back6.jpg",
  "./assets/img/back7.jpg",
  "./assets/img/back8.jpg",
  "./assets/img/back9.jpg",
  "./assets/img/back10.jpg"
]

const changeBackground = () =>{
  const randomNumber = Math.floor(Math.random() * photos.length);
  newBackground = photos[randomNumber]
  body.style.backgroundImage = `url(${newBackground})`;
}


setInterval(() => {
  changeBackground()
}, 15000)

changeBackground()