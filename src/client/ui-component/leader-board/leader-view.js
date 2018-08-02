const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content.firstElementChild
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getLeaderBoardTemplate = () => {
  const headerHtmlStr = `
                <div class="group">
                    <div class="mdc-select mdc-select--outlined">
                        <select class="mdc-select__native-control selectRange">                          
                          <option value="1" selected>
                            Daily
                          </option>
                          <option value="7">
                            Weekly
                          </option>
                          <option value="30">
                            Monthly
                          </option>
                        </select>
                        <label class="mdc-floating-label">Rank By</label>
                        <div class="mdc-notched-outline">
                          <svg>
                            <path class="mdc-notched-outline__path"></path>
                          </svg>
                        </div>
                        <div class="mdc-notched-outline__idle"></div>
                    </div>
             
                    <div class="rankingTable mdl-shadow--2dp mdl-color--purple-800 display-row justify-content-center" >       
                        <div class="mdl-card__actions mdl-card--border">
                            <div id="mdl-table">
                                <table id='mdl-table' class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                                    <thead>
                                        <tr class="mdl-color--grey-400">
                                            <th>Rank</th>
                                            <th>Player Name</th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody id="leaderBody">
                                      <!--  <tr>
                                            <td class="mdl-data-table__cell--non-numeric material">1</td>
                                            <td>Tony Stark</td>
                                            <td>75412</td>
                                        </tr>
                                        <tr>
                                            <td class="mdl-data-table__cell--non-numeric material">2</td>
                                            <td>Bruce Wayne</td>
                                            <td>74126</td>
                                        </tr>
                                        <tr>
                                            <td class="mdl-data-table__cell--non-numeric material">3</td>
                                            <td class="quantity">10</td>
                                            <td class="price">$2.35</td>
                                        </tr>
                                        <tr class="selectedRow">
                                            <td class="mdl-data-table__cell--non-numeric material">4</td>
                                            <td class="quantity">1</td>
                                            <td class="price">$13.15</td>
                                        </tr>
                                        <tr>
                                            <td class="mdl-data-table__cell--non-numeric material">5</td>
                                            <td class="quantity">12</td>
                                            <td class="price">$5.35</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
`
  return htmlToTemplate(headerHtmlStr)
}

