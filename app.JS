let spaceship = {
  passengers : [{name: 'Space Dog'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

//created a new variable with values gotten from the first element(0 index) of the captain's favorite food
let capFave = spaceship.crew.captain['favorite foods'][0]
console.log(capFave)

// to target the 0 index from the passengers
let firstPassenger = spaceship.passengers[0]
console.log(firstPassenger)
  
