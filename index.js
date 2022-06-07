function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!'
  }
  else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC") ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipString){
  // Write your code here!
  if (tipString === "generous") {
    return "Thank you so much."
  }
  else if (tipString === "not as generous") {
    return "Thank you."
  }
  else if (tipString === "thanks for everything") {
    return "Bye."
  }
}