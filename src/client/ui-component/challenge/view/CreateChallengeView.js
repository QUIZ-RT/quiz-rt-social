import TemplateGenerator from "../common/TemplateGenerator"

export default class CreateChallengeView {
  static createSidebar() {
    const challengeSection = document.getElementById("challengeSection")
    const challengeTemplate = CreateChallengeView.createSidebarTemplate()
    challengeSection.appendChild(challengeTemplate)
  }

  static createSidebarTemplate() {
    let challengeTemplate = `<div class="mdl-color--grey-100">
        <main class="mdl-layout__content mdl-cell mdl-cell--10-col">
          <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--10-col">
            <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
              <h2 class="mdl-card__title-text">Create Challenge</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <form action="#">
              <div class="mdc-select mdl-cell mdl-cell--7-col">
                <select class="mdc-select__native-control" id="topic">
                  <option value="" disabled selected>Select your Topic</option>
                  <option value="sport">
                    Sports
                  </option>
                  <option value="Entertainment">
                  Entertainment
                  </option>
                  <option value="Politics">
                  Politics
                  </option>
                </select>
                <!--<label class="mdc-floating-label">Select your Topic</label>-->
                <div class="mdc-line-ripple"></div>
              </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--7-col">
                  <input class="mdl-textfield__input" type="text" id="challengeName" />
                  <label class="mdl-textfield__label" for="challengeName">Challenge Name</label>
                </div>`
    for (let i = 1; i < 8; i += 1) {
      challengeTemplate = challengeTemplate.concat(` 
                      <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--8-col">
                        <input class="mdl-textfield__input" type="text" id="ques${i}" />
                        <label class="mdl-textfield__label" for="ques${i}">Question ${i}</label>
                      </div>
                      <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                        <input class="mdl-textfield__input" type="text" id="ques${i}opt1" />
                        <label class="mdl-textfield__label" for="ques${i}opt1">Option 1</label>
                      </div>
                      <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                        <input class="mdl-textfield__input" type="text" id="ques${i}opt2" />
                        <label class="mdl-textfield__label" for="ques${i}opt2">Option 2</label>
                      </div>
                      <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                        <input class="mdl-textfield__input" type="text" id="ques${i}opt3" />
                        <label class="mdl-textfield__label" for="ques${i}opt3">Option 3</label>
                      </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                      <input class="mdl-textfield__input" type="text" id="ques${i}opt4" />
                      <label class="mdl-textfield__label" for="ques${i}opt4">Option 4</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
                      <input class="mdl-textfield__input" type="text" id="ques${i}ans" />
                      <label class="mdl-textfield__label" for="ques${i}ans">Answer</label>
                    </div>`)
    }
    challengeTemplate = challengeTemplate.concat(` 
                  <div class="mdl-card__actions mdl-card--border">
                      <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="create">Create</button>
                      <button type="reset" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="reset">Reset</button>
                  </div>
              </form>
              </div>
              </main>
            </div>`)

    const challengeTemplt = TemplateGenerator.createAllChildHTMLElement(challengeTemplate)
    return challengeTemplt
  }
}
