function scuberGreetingForFeet(miles) {
  let feetGreeting;
  if (miles > 2500) {
    feetGreeting = `No can do.`;
  } else if (miles >= 2000) {
      feetGreeting = `I will gladly take your thirty bucks.`;
    } else if (miles <= 400) {
        feetGreeting = `This one is on me!`;
      }
  return feetGreeting;
}

function ternaryCheckCity(city){
  let checkCity;
  city === `NYC` ? (checkCity = `Ok, sounds good.`) : (checkCity = `No go.`);
  return checkCity;
}

function switchOnCharmFromTip(tipAmount){
  let tipResponse;
  
  switch (tipAmount) {
    case `generous`:
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = `Thank you.`;
      break;
    default: 
      tipResponse = `Bye.`;
      break;
  }
  return tipResponse;
}