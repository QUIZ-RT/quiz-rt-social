const htmlToTemplate = (htmlstr) => {
  const formDiv = document.createElement("div")
  formDiv.innerHTML = htmlstr
  return formDiv.firstElementChild
}

// first
export const getUserTemplate = () => {
  const userHtmlContent = `
  <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
  <main class="mdl-layout__content" style = "margin: auto">
  <div class="mdl-card mdl-shadow--6dp">
  <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
  <h6 class="mdl-card__title-text">Login With Google</h6>
  <div style="text-align: right; width: 20%;">
  <img src = "src/client/assets/google-logo.png" style="width:40%" />
  </div>
  </div>
  <div class="mdl-card__supporting-text">
  <form id="loginAction" action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
  <input class="mdl-textfield__input" type="text" id="username" placeholder="Enter username">
  <label class="mdl-textfield__label" for="username"></label>
  </div> <br>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
  <input class="mdl-textfield__input" type="password" id="password" placeholder="Enter password">
  <label class="mdl-textfield__label" for="password"></label>
  </div> <br>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="signin">
  Sign in
  </button> 
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" id="signup">
  Sign up
  </button>
  </form>
  </div>
  <!--  <div class="mdl-card__actions mdl-card--border">
  <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">signup</button>
  </div> -->
  </div>
  </main>
  </div>
  `

  return htmlToTemplate(userHtmlContent)
}

// second
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
