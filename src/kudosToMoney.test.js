const kudosToMoney = require('./kudosToMoney')
const pointsToKudo = require('./pointsToKudos');

test('test getKudosValueMessageForUser', () => {
  expect(kudosToMoney.getKudosValueMessageForUser(pointsToKudo.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
});