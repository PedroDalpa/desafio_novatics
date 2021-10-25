const extenso = require('extenso')

const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];


function getKudosValueMessageForUser(kudos) {
  let total = 0;
  kudos.forEach(element => {
    const { value } = KUDOS_TO_REAL.find(item => item.name === element);

    total += value;

  });

  return `Você recebeu ${extenso(total)} reais em retorno aos kudos ${kudos.join(', ')}!`
}

module.exports = {
  getKudosValueMessageForUser
}