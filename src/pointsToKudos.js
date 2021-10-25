const orderKudosPointsDesc = require('./orderKudosPointsDesc')

const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

function getKudosForUser(points) {
  const kudosArray = [];

  const orderKudosPoints = orderKudosPointsDesc.orderKudosPointsDesc(KUDOS_TO_POINTS);

  for (let index = 0; index < orderKudosPoints.length; index++) {
    const item = orderKudosPoints[index];

    if (item.value - points <= 0) {
      kudosArray.push(item.name);
      index = -1;
      points -= item.value;
    }
  }

  return kudosArray;
}

module.exports = {
  getKudosForUser
}