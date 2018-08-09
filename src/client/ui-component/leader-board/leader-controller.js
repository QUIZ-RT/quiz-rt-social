import {getLeaderBoardTemplate, renderViewToContainer} from "./leader-view"
import {Store} from './../../boot/Store';

export const createLeaderBoardForChallenges = () => {
  const leaderBoardContent = getLeaderBoardTemplate()
  renderViewToContainer(leaderBoardContent, "main")
}

export const getFilteredGameDetails = (arry) => {
  let html = ""
  let rank = 0

  let newArray = new Array()
  let filteredArray = new Array()
  let score = 0;
  //merging all arrays
  for (let item of arry.games) {
    newArray = newArray.concat(item.players)
  }
 
  //grouping the array by id
  newArray = newArray.reduce((h, a) => Object.assign(h, { [a.id]: (h[a.id] || []).concat(a) }), {})

  newArray = Object.keys(newArray).map(function (key) {
    return [Number(key), newArray[key]];
  });

  //forming the filtered array
  for (let j = 0; j < newArray.length; j++) {
    score = newArray[j]["1"].reduce((a, b) => + a + +b.score, 0);
    filteredArray.push({
      playerName: newArray[j]["1"][0].name,
      playerId: newArray[j]["1"][0].id,
      score: score
    })
  }
  
  //sorting according to the score
  filteredArray = filteredArray
    .sort((a, b) => {
      const scoreA = +a.score
      const scoreB = +b.score

      let comparison = 0
      if (scoreB > scoreA) {
        comparison = 1
      }
      else if (scoreB < scoreA) {
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
  //document.querySelector("tr[id='8']").className = "selectedRow"
}

export const getFilteredDetails = (arry, days) => {

  const startValue = new Date()
  const endValue = new Date(startValue.getTime() - (days * 24 * 60 * 60 * 1000))
  let html = ""
  let rank = 0

  const filteredArray = arry.filter(item => {
    const markerDate = new Date(item.playedOn
    )
    return (markerDate.getTime() <= startValue.getTime() && markerDate.getTime() >= endValue.getTime())
  }).sort((a, b) => {
    const scoreA = +a.score

    const scoreB = +b.score

    let comparison = 0
    if (scoreB > scoreA) {
      comparison = 1
    }
    else if (scoreB < scoreA) {
      comparison = -1
    }
    return comparison
  })
 
  for (const item of filteredArray) {
    rank++
    html = html + `<tr id="${item.userName.replace(' ','').toLowerCase()}">
                     <td class="mdl-data-table__cell--non-numeric material">${rank}</td>
                     <td class="mdl-data-table__cell--non-numeric material">${item.userName}</td>
                     <td>${item.score}</td>
                   </tr>`
  }

  document.getElementById("leaderBody").innerHTML = html  
  const currentState = Store.getState();
  const userName = currentState.menuReducer.currentUserInfo.displayName.replace(' ','').toLowerCase();
  let selection = document.querySelector(`tr[id=${userName}]`);
  if(selection)
     selection.className = "selectedRow"; 

}
