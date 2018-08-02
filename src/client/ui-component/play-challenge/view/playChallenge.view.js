import TemplateGenerator from "../../challenge/common/TemplateGenerator"

export default class CreatePlayChallengeView {
  static createSidebar() {
    const playChallengeSection = document.getElementById("playChallengeSection")
    const playChallengeTemplate = CreatePlayChallengeView.createPlayTemplate()
    playChallengeSection.appendChild(playChallengeTemplate)
  }

  static createPlayTemplate() {
    let playChallengeTemplate = `<div class="mdl-color--grey-100">
    <main class="mdl-layout__content mdl-cell mdl-cell--10-col">
      <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--10-col">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 class="mdl-card__title-text">Play a Challenge</h2>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--7-col">
          <label for="challengeId"><strong>Challenge Id:challenge1</strong></label>
        </div>
        <form action="#">`

    for (let i = 1; i < 8; i += 1) {
      playChallengeTemplate = playChallengeTemplate.concat(`
      <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--8-col">
        <table>
          <tr>
            <td>
              <p><span id="ques1">Q ${i}</span> - What of the following is the default value of a local variable?</p>
            </td>
          </tr>
          <tr>
            <td>
              <label class = "mdl-radio mdl-js-radio mdl-js-ripple-effect" for = "option1">
              <input type = "radio" id = "ques1opt1" name = "option" class = "mdl-radio__button" checked>
              <span class = "mdl-radio__label">A.null</span>
              </label>
            <td>
          </tr>
          <tr>
            <td>
              <label class = "mdl-radio mdl-js-radio mdl-js-ripple-effect" for = "option2">
              <input type = "radio" id = "ques1opt2" name = "option" class = "mdl-radio__button">
              <span class = "mdl-radio__label">B.0</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label class = "mdl-radio mdl-js-radio mdl-js-ripple-effect" for = "option3">
              <input type = "radio" id = "ques1opt3" name = "option" class = "mdl-radio__button">
              <span class = "mdl-radio__label">C.Depends upon the type of variable</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label class = "mdl-radio mdl-js-radio mdl-js-ripple-effect" for = "option4">
              <input type = "radio" id = "ques1opt4" name = "option" class = "mdl-radio__button">
              <span class = "mdl-radio__label">D.Not assigned</span>
              </label>
            </td>
          </tr>
          </table>
      </div>  `)
    }

    playChallengeTemplate = playChallengeTemplate.concat(`
    <table>
      <tr>
        <td>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Submit</button>
        </td>
        <td>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Cancel</button>
        </td>
      </tr>
    </table>
    </form>`)
    const playChallengeTemplt = TemplateGenerator.createAllChildHTMLElement(playChallengeTemplate)
    return playChallengeTemplt
  }
}
