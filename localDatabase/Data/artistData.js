// const { isInteger } = require("formik");

// const ArtistData = [
//     {
//         "name":"",
//         "profileImage":"",
//         "gallery": "",
//         "organisation":{
//             "name":"",
//             "follow": Boolean,
//         },
//         "birthPlace":"",
//         "citizen":"",
//         "typeOfArt":"",
//         "phone_number":"+86-415-238-8888",
//         "website":"",
//         "email":"",
//         "address": {
//             "PostalAddress": "PostalAddress",
//             "addressLocality": "City",
//             "addressRegion": "State",
//             "addressCountry": "Country"
//           },
//         "follow":Boolean,
//         "followers":isInteger,
//         "artWork": [
//             {
//                 "image": "",
//                 "subtitle":"",
//                 "year": "YYYY",
//                 "sold": Boolean,
//                 "galleryName":"",
//                 "price": isInteger,
//                 "makeOffer": Boolean,
//                 "limitedOffer": Boolean,
//                 "unique": Boolean,
//                 "arttype": "Oil on Canvas",
//                 "artsize": "471/5 x 39 2/5in | 120 x 100 cm",
//                 "uniquework" : Boolean,
//                 "authCertificate": Boolean,
//                 "material": "Giclée, screen-print, acrylic and oil paint, and varnish on paper",
//             }
//         ],
//         "bio":""
//     },
// ]

// export default ArtistData;
/******************************************************************************************************************************/
// Generate random name
const names = [
    { firstName: 'Titi', lastName: 'Tatenda' },
    { firstName: 'Maria', lastName: 'Garcia' },
    { firstName: 'Antonio', lastName: 'Rossi' },
    { firstName: 'Emma', lastName: 'Smith' },
    { firstName: 'Luis', lastName: 'Martinez' },
    { firstName: 'Sophia', lastName: 'Russo' },
    { firstName: 'Gabriel', lastName: 'Lopez' },
    { firstName: 'Alessia', lastName: 'Conti' },
    { firstName: 'Elena', lastName: 'Santos' },
    { firstName: 'David', lastName: 'Williams' },
    { firstName: 'Sofia', lastName: 'Ferrari' },
    { firstName: 'Diego', lastName: 'Fernandez' },
    { firstName: 'Isabella', lastName: 'Ricci' },
    { firstName: 'Oliver', lastName: 'Brown' },
    { firstName: 'Lucia', lastName: 'Marquez' },
    { firstName: 'Luca', lastName: 'Romano' },
    { firstName: 'Sophie', lastName: 'Bianchi' },
    { firstName: 'Miguel', lastName: 'Gomez' },
    { firstName: 'Alice', lastName: 'Gatti' },
    { firstName: 'Mateo', lastName: 'Alvarez' },
    { firstName: 'Ava', lastName: 'Costa' },
    { firstName: 'Lorenzo', lastName: 'Moreno' },
    { firstName: 'Luna', lastName: 'Serra' },
    { firstName: 'Elias', lastName: 'Villa' },
    { firstName: 'Emma', lastName: 'Mancini' },
    { firstName: 'Martin', lastName: 'Ramos' },
    { firstName: 'Valentina', lastName: 'Rinaldi' },
    { firstName: 'Enzo', lastName: 'Ferri' },
    { firstName: 'Aria', lastName: 'Fabbri' },
    { firstName: 'Sebastian', lastName: 'Santoro' },
    { firstName: 'Giulia', lastName: 'Greco' },
    { firstName: 'Leo', lastName: 'Perez' },
    { firstName: 'Bianca', lastName: 'Marini' },
    { firstName: 'Adrian', lastName: 'Reyes' },
    { firstName: 'Chiara', lastName: 'Rizzo' },
    { firstName: 'Noah', lastName: 'Lombardi' },
    { firstName: 'Eva', lastName: 'Rossetti' },
    { firstName: 'Julian', lastName: 'Ortega' },
    { firstName: 'Matteo', lastName: 'Barone' },
    { firstName: 'Aurora', lastName: 'Sartori' },
    { firstName: 'Emilio', lastName: 'Crespo' },
    { firstName: 'Lia', lastName: 'Pellegrini' },
    { firstName: 'Lucas', lastName: 'Marchesi' },
    { firstName: 'Camila', lastName: 'Caruso' },
    { firstName: 'Nicolas', lastName: 'Silva' },
    { firstName: 'Gemma', lastName: 'Martini' },
    { firstName: 'Liam', lastName: 'Ferrara' },
    { firstName: 'Mia', lastName: 'Vicente' },
    { firstName: 'Alexander', lastName: 'De Luca' },
    { firstName: 'Valeria', lastName: 'Rojas' },
    { firstName: 'Samuel', lastName: 'Ventura' },
    { firstName: 'Giorgia', lastName: 'Rizzo' },
  ];
  
function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  

// Function to generate a random phone number
function generateRandomPhoneNumber() {
  const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  return `+86-${randomNumber}`;
}

const countries = [
    { name: 'Italy', demonym: 'Italian' },
    { name: 'France', demonym: 'French' },
    { name: 'Spain', demonym: 'Spanish' },
    { name: 'Germany', demonym: 'German' },
    // Add more countries as needed
];

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

const randomCountry = getRandomCountry();
console.log(`Country: ${randomCountry.name}, Demonym: ${randomCountry.demonym}`);


// Function to generate a random email
function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomString = Math.random().toString(36).substring(7);
  return `example${randomString}@${randomDomain}`;
}

// Function to generate a random address
function generateRandomAddress() {
  return {
    PostalAddress: `Street ${Math.floor(Math.random() * 100)}`,
    addressLocality: `City ${Math.floor(Math.random() * 10)}`,
    addressRegion: `State ${Math.floor(Math.random() * 5)}`,
    addressCountry: `Country ${Math.floor(Math.random() * 3)}`,
  };
}

// Function to generate a random artwork
function generateRandomArtwork() {
  return {
    image: `https://source.unsplash.com/random`,
    subtitle: `Subtitle ${Math.floor(Math.random() * 10)}`,
    year: `${Math.floor(Math.random() * 1000)}`,
    sold: false,
    galleryName: `Gallery ${Math.floor(Math.random() * 5)}`,
    price: Math.floor(Math.random() * 1000),
    makeOffer: false,
    limitedOffer: false,
    unique: false,
    arttype: "Oil on Canvas",
    artsize: "471/5 x 39 2/5in | 120 x 100 cm",
    uniquework: false,
    authCertificate: false,
    material: `Material ${Math.floor(Math.random() * 5)}`,
  };
}

const ArtistData = [];

for (let i = 0; i < 50; i++) {
  ArtistData.push({
    name: generateRandomName(),
    profileImage: `https://source.unsplash.com/random/profile`,
    gallery: `Gallery ${i + 1}`,
    organisation: {
      name: `Organisation ${i + 1}`,
      follow: false,
    },
    birthPlace: getRandomCountry(),
    typeOfArt: `TypeOfArt ${i + 1}`,
    phone_number: generateRandomPhoneNumber(),
    website: `https://website${i + 1}.com`,
    email: generateRandomEmail(),
    address: generateRandomAddress(),
    follow: false,
    followers: Math.floor(Math.random() * 1000),
    artWork: Array.from({ length: 25 }, () => generateRandomArtwork()),
    bio: `Bio ${i + 1}`,
  });
}

export default ArtistData;
