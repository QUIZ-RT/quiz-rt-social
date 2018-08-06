const htmlToTemplate = (htmlstr) => {
  const formDiv = document.createElement("div")
  formDiv.innerHTML = htmlstr
  return formDiv.firstElementChild
}

// first
export const getUserTemplate = () => {
  const userHtmlContent = `
  <div class="mdl-layout mdl-js-layout">
  <main class="mdl-layout__content" style = "margin: auto">
  <div class="mdl-card mdl-shadow--6dp">
  <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
  <h6 class="mdl-card__title-text">Quiz RT Login</h6>
  <!-- <div style="text-align: right; width: 20%;">
  <img src = "src/client/assets/google-logo.png" style="width:40%" />
  </div> -->
  </div>
  <div class="mdl-card__supporting-text" style="padding:20px">
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="signin">
  Signin  With  Google 
  </button> 
  </div>
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
