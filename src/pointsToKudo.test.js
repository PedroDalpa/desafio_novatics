const pointsToKudo = require('./pointsToKudos');

test('test getKudosForUser', () => {
  expect(pointsToKudo.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(pointsToKudo.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(pointsToKudo.getKudosForUser(100)).toEqual(['SUPER']);
});