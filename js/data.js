const airports = [
  {
    id: 1,
    name: "مطار القاهرة الدولى",
    location: "30°07′19″N 031°24′20″E",
    city: "القاهرة",
    ICAO: "HECA",
    IATA: "CAI",
  },
  {
    id: 2,
    name: "مطار سفنكس الدولي",
    location: "30°06′35″N 30°53′40″E",
    city: "الجيزة",
    ICAO: "HECW",
    IATA: "SPX",
  },
  {
    id: 3,
    name: "مطار برج العرب الدولي",
    location: "30°55′04″N 029°41′47″E",
    city: "الإسكندرية",
    ICAO: "HEBA",
    IATA: "HBE",
  },
  {
    id: 4,
    name: "مطار العاصمة الإدارية",
    location: "22°22′33″N 031°36′42″E",
    city: "العاصمة الإدارية",
    ICAO: "HECP",
    IATA: "CCE",
  },
  {
    id: 5,
    name: "مطار مرسى مطروح الدولي",
    location: "31°19′27.998″N 27°13′19.999″E",
    city: "مرسى مطروح",
    ICAO: "HEMM",
    IATA: "MUH",
  },
  {
    id: 6,
    name: "مطار شرم الشيخ الدولي",
    location: "27°58′38″N 034°23′41″E",
    city: "شرم الشيخ",
    ICAO: "HESH",
    IATA: "SSH",
  },
  {
    id: 7,
    name: "	مطار طابا الدولي",
    location: "29°35′16″N 034°46′41″E",
    city: "طابا",
    ICAO: "HETB",
    IATA: "TCP",
  },
  {
    id: 8,
    name: "مطار الغردقة الدولي",
    location: "27°10′41″N 033°47′57″E",
    city: "الغردقة",
    ICAO: "HEGN	",
    IATA: "HRG",
  },
  {
    id: 9,
    name: "	مطار أسيوط الدولي",
    location: "27°02′47″N 031°00′43″E",
    city: "أسيوط",
    ICAO: "HEAT",
    IATA: "ATZ",
  },
  {
    id: 10,
    name: "	مطار الأقصر الدولي",
    location: "25°40′15″N 032°42′23″E",
    city: "الاقصر",
    ICAO: "HELX",
    IATA: "LXR",
  },
  {
    id: 11,
    name: "مطار أسوان الدولى",
    location: "23°57′51″N 032°49′11″E",
    city: "أسوان",
    ICAO: "HESN",
    IATA: "ASW",
  },
  {
    id: 12,
    name: "مطار العريش الدولى",
    location: "31°04′24″N 033°50′09″E",
    city: "العريش",
    ICAO: "HECW",
    IATA: "HBE",
  },
  {
    id: 13,
    name: "مطار سانت كاترين الدولى",
    location: "28°41′07″N 34°03′45″E",
    city: "سانت كاترين",
    ICAO: "HESC",
    IATA: "SKV",
  },
  {
    id: 14,
    name: "مطار شرق العوينات",
    location: "28°41′07″N 34°03′45″E",
    city: "شرق العوينات",
    ICAO: "HEOW",
    IATA: "GSQ",
  },
  {
    id: 15,
    name: "مطار أبو سمبل",
    location: "22°22′33″N 031°36′42″E",
    city: "أبو سمبل",
    ICAO: "HEBL",
    IATA: "ABS",
  },
  {
    id: 16,
    name: "مطار سوهاج الدولى",
    location: "22°22′33″N 031°36′42″E",
    city: "أبو سمبل",
    ICAO: "HEMB",
    IATA: "HMB",
  },
  {
    id: 17,
    name: "مطار الردويل الدولى",
    location: "22°22′33″N 031°36′42″E",
    city: "وادى المليز",
    ICAO: "HEUM",
    IATA: "UMV",
  },
  {
    id: 18,
    name: "مطار بورسعيد",
    location: "22°22′33″N 031°36′42″E",
    city: "بورسعيد",
    ICAO: "HEPS",
    IATA: "PSD",
  },
  {
    id: 19,
    name: "مطار الطور",
    location: "22°22′33″N 031°36′42″E",
    city: "الطور",
    ICAO: "HETR",
    IATA: "ELT",
  },
  {
    id: 20,
    name: "مطار واحة الداخلة",
    location: "22°22′33″N 031°36′42″E",
    city: "واحة الداخلة",
    ICAO: "HEDK",
    IATA: "DAK",
  },
  {
    id: 21,
    name: "مطار الخارجة",
    location: "22°22′33″N 031°36′42″E",
    city: "الخارجة",
    ICAO: "HEKG",
    IATA: "UVL",
  },
  {
    id: 22,
    name: "مطار الجورة",
    location: "22°22′33″N 031°36′42″E",
    city: "الجورة",
    ICAO: "HEGR",
    IATA: "EGH",
  },
  {
    id: 23,
    name: "مطار امبابة",
    location: "22°22′33″N 031°36′42″E",
    city: "الجيزة",
    ICAO: "HEEM",
    IATA: "GIM",
  },
  {
    id: 24,
    name: "مطار الوادى الجديد",
    location: "22°22′33″N 031°36′42″E",
    city: "الوادى الجديد",
    ICAO: "HEUV",
    IATA: "UVL",
  },
  {
    id: 25,
    name: "مطار النقب",
    location: "22°22′33″N 031°36′42″E",
    city: "رأس النقب",
    ICAO: "HERA",
    IATA: "RAF",
  },
  {
    id: 26,
    name: "مطار ابورديس",
    location: "22°22′33″N 031°36′42″E",
    city: "ابورديس",
    ICAO: "HEUE",
    IATA: "AUE",
  },
];

const airlines = [
  {
    id: 1,
    name: "مصر للطيران",
    eName: "Egypt Air Airlines",
    logo: "/images/airlines/egyptair.jpg",
    shortName: "MS",
    ratio: 1.3
  },
  {
    id: 2,
    name: "اير كايرو",
    eName: "Air Cairo Airlines",
    logo: "/images/airlines/aircairo.png",
    shortName: "ACA",
    ratio: 1.09
  },
  {
    id: 3,
    name: "طيران سيناء",
    eName: "Sinai Airlines",
    logo: "/images/airlines/sinai.jpg",
    shortName: "SAL",
    ratio: 1.16
  },
  {
    id: 4,
    name: "طيران الاسكندرية",
    eName: "alexandria Airlines",
    logo: "/images/airlines/alexlines.png",
    shortName: "AAL",
    ratio: 1.2
  },
  {
    id: 5,
    name: "العربية للطيران مصر",
    eName: "Air Arabya Airlines",
    logo: "/images/airlines/arabyaairlines.jpg",
    shortName: "EAR",
    ratio: 1.07
  },
  {
    id: 6,
    name: "ألكان اير",
    eName: "Alcan Air Airlines",
    logo: "/images/airlines/alcanair.png",
    shortName: "ALC",
    ratio: 1.22
  },
  {
    id: 7,
    name: "النيل للطيران",
    eName: "Nile Airlines",
    logo: "/images/airlines/nileair.jpg",
    shortName: "NAC",
    ratio: 1.28
  },
  {
    id: 8,
    name: "لوتس للطيران",
    eName: "Lutus Airlines",
    logo: "/images/airlines/lotusairlines.png",
    shortName: "LUA",
    ratio: 1.17
  },
  {
    id: 9,
    name: "فلاى ايجبت",
    eName: "Fly Egypt Airlines",
    logo: "/images/airlines/flyEgypt.webp",
    shortName: "LUA",
    ratio: 0.98
  },
  {
    id: 10,
    name: "طيران نسمة",
    eName: "Nesma Airlines",
    logo: "/images/airlines/lotusairlines.png",
    shortName: "LUA",
    ratio: 1.21,
  },
];
const pricing = [
    {
      id: 6,
      ECO: 1250,
      BC: 2200,
      FC: 3700
    },
    {
      id: 0,
      ECO: 1200,
      BC: 2100,
      FC: 3400
    },
    {
      id: 1,
      ECO: 1150,
      BC: 2000,
      FC: 3300
    },
    {
      id: 2,
      ECO: 1000,
      BC: 1900,
      FC: 3000
    },
    {
      id: 3,
      ECO: 1150,
      BC: 2000,
      FC: 3300
    },
    {
      id: 4,
      ECO: 1200,
      BC: 2100,
      FC: 3700
    },
    {
      id: 5,
      ECO: 1250,
      BC: 2250,
      FC: 3750
    },
]

const direct_flights = [
  {id: 0,
    departureTime: "00:10:00",
    arrivalTime: "01:21:00",
    duration: [1,11],
    stops: [],
  },
  {
    id: 1,
    departureTime: "00:10:00",
    arrivalTime: "01:21:00",
    duration: [1,11],
    stops: ['HMB', 'CAI'],
  },
  {
    id: 2,
    departureTime: "01:45:00",
    arrivalTime: "02:59:00",
    duration: [1,14],
    stops: [],
  },
  {
    id: 3,
    departureTime: "02:32:00",
    arrivalTime: "03:35:00",
    duration: [1, 3],
    stops: [],
  },
  {
    id: 4,
    departureTime: "03:11:00",
    arrivalTime: "04:28:00",
    duration: [1, 17],
    stops: [],
  },
  {
    id: 5,
    departureTime: "04:51:00",
    arrivalTime: "06:03:00",
    duration: [1, 12],
    stops: [],
  },
  {
    id: 6,
    departureTime: "05:37:00",
    arrivalTime: "06:51:00",
    duration: [1, 14],
    stops: [],
  },
  {
    id: 7,
    departureTime: "07:05:00",
    arrivalTime: "08:30:00",
    duration: [1, 25],
    stops: [],
  },
  {
    id: 8,
    departureTime: "09:11:00",
    arrivalTime: "10:40:00",
    duration: [1, 30],
    stops: [],
  },
  {
    id: 9,
    departureTime: "10:00:00",
    arrivalTime: "11:28:00",
    duration: [1, 28],
    stops: [],
  },
  {
    id: 10,
    departureTime: "11:05:00",
    arrivalTime: "12:31:00",
    duration: [1, 26],
    stops: [],
  },
];

function addElem(elem, text, attrs) {
  const element = document.createElement(elem);
  for (attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
  element.innerHTML = text;
  return element;
}

function randomNumber(start, period){
  return start + Math.floor(Math.random() * period)
}

const generateFlights = (numberOfFlights) => {
  const flights = [];

  for (let i = 0; i < numberOfFlights; i++) {
    // Generate departure time
    const departureHours = Math.floor(Math.random() * 24);
    const departureMinutes = Math.floor(Math.random() * 60);
    const departureTimeString = `${String(departureHours).padStart(2, '0')}:${String(departureMinutes).padStart(2, '0')}:00`;

    const margin = Math.floor(Math.random()*10)
    // Calculate arrival time with 1 hour and 15 minutes difference
    const arrivalHours = departureHours + 1;
    const arrivalMinutes = departureMinutes + 5 + margin;
    const arrivalTimeString = `${String(arrivalHours).padStart(2, '0')}:${String(arrivalMinutes).padStart(2, '0')}:00`;

    // Generate random duration
    const duration = [1, 5+margin];

    flights.push({
      departureTime: departureTimeString,
      arrivalTime: arrivalTimeString,
      duration,
      stops: []
    });
  }

  return flights;
};

// Generate 10 flights

// const flights = generateFlights(randomNumber(10, 15));
// console.log(flights);

// const minDepartureTime = "00:00:00"; // Minimum departure time
// const maxDepartureTime = "23:50:00"; // Maximum departure time
// const numObjects = 10; // Number of objects to generate

// function parseTime(timeString) {
//   const [hours, minutes, seconds] = timeString.split(':');
//   if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
//     throw new Error('Invalid time format'); // Handle invalid time format
//   }
//   return hours * 3600 + minutes * 60 + seconds;
// }

// function formatTime(timestamp) {
//   const hours = Math.floor(timestamp / 3600);
//   const minutes = Math.floor((timestamp % 3600) / 60);
//   const seconds = Math.floor(timestamp % 60);
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// const flights = [];

// for (let i = 0; i < numObjects; i++) {
//   // Generate random departure time
//   const randomTimeOffset = Math.random() * (parseTime(maxDepartureTime) - parseTime(minDepartureTime));
//   const departureTime = addTime(parseTime(minDepartureTime), randomTimeOffset);
//   const departureTimeString = formatTime(departureTime);

//   // Calculate arrival time
//   const arrivalTime = addTime(departureTime, 45 * 60); // 1 hour and 15 minutes in seconds
//   const arrivalTimeString = formatTime(arrivalTime);

//   // Generate random duration
//   const randomHours = Math.floor(Math.random() * 2) + 1;
//   const randomMinutes = Math.floor(Math.random() * 60);
//   const duration = [randomHours, randomMinutes];

//   // Create the object and add it to the array
//   flights.push({
//     departureTime: departureTimeString,
//     arrivalTime: arrivalTimeString,
//     duration: duration,
//   });
// }

// console.log(flights); // Display the generated array of objects