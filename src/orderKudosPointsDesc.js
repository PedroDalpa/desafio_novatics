function orderKudosPointsDesc(kudosToPoints) {
  kudosToPoints.sort(function (a, b) {
    if (a.value > b.value) {
      return -1

    } else if (a.value < b.value) {
      return 1

    } else {
      return 0
    }
  })

  return kudosToPoints
}

module.exports = {
  orderKudosPointsDesc
}