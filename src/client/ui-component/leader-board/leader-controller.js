import {getLeaderBoardTemplate, renderViewToContainer} from "./leader-view"

export const createLeaderBoardForChallenges = () => {
  const leaderBoardContent = getLeaderBoardTemplate()
  renderViewToContainer(leaderBoardContent, "main")
}

export const getFilteredDetails = (arry, days) => {
  const startValue = new Date()
  const endValue = new Date(startValue.getTime() - (days * 24 * 60 * 60 * 1000))
  let html = ""
  let rank = 0

  const filteredArray = arry.filter(item => {
    const markerDate = new Date(item.playedOn)
    return (markerDate.getTime() <= startValue.getTime() && markerDate.getTime() >= endValue.getTime())
  }).sort((a, b) => {
    const scoreA = +a.score
    const scoreB = +b.score

    let comparison = 0
    if (scoreA > scoreB) {
      comparison = 1
    }
    else if (scoreA < scoreB) {
      comparison = -1
    }
    return comparison
  })

  for (const item of filteredArray) {
    rank++
    html = html + `<tr id="${item.playerId}">
                     <td class="mdl-data-table__cell--non-numeric material">${rank}</td>
                     <td class="mdl-data-table__cell--non-numeric material">${item.playerName}</td>
                     <td>${item.score}</td>
                   </tr>`
  }

  document.getElementById("leaderBody").innerHTML = html
 // document.querySelector("tr[id='8']").className = "selectedRow"
}
