const indexElement = document.getElementById('index');

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};

const getGreetingMessage = (hours) => {
  switch (true) {
    case (hours >= 0 && hours <= 7):
      return "Es hora de descansar. Apaga y sigue mañana";
    case (hours > 7 && hours <= 12):
      return "Buenos días, desayuna fuerte y a darle al código";
    case (hours > 12 && hours <= 14):
      return "Echa un rato más pero no olvides comer";
    case (hours > 14 && hours <= 16):
      return "Espero que hayas comido";
    case (hours > 16 && hours <= 18):
      return "Buenas tardes, el último empujón";
    case (hours > 18 && hours <= 22):
      return "Esto ya son horas extras, piensa en parar pronto";
    default:
      return "Buenas noches, es hora de pensar en parar y descansar";
  }
};

const updateClockDisplay = () => {
  const now = new Date();
  const currentHours = now.getHours();

  const dateDisplayElement = document.getElementById('date');
  const messageDisplayElement = document.getElementById('message');
  const timeDisplayElement = document.getElementById('time');

  const currentDateString = formatDate(now);
  const currentTimeString = formatTime(now);

  dateDisplayElement.innerText = currentDateString;
  timeDisplayElement.innerText = currentTimeString;

  if (!indexElement) {
    const greeting = getGreetingMessage(currentHours);
    messageDisplayElement.innerText = greeting;
  }
};

setInterval(updateClockDisplay, 1000);
updateClockDisplay();