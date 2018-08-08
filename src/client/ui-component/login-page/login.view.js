const htmlToTemplate = (htmlstr) => {
  const formDiv = document.createElement("div")
  formDiv.innerHTML = htmlstr
  return formDiv.firstElementChild
}

// first
export const getUserTemplate = () => {
  const userHtmlContent = `
  <div>
  <div class="mdl-card__supporting-text login-hero-img" style="padding:20px">
  <div class="login-form">
  <div class="lbl_login">Quizzapp</div>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="signin">
  Signin  With  Google &nbsp; <i class="fas fa-sign-in-alt"></i>
  </button> 
  </div>
  </div>
  `

  return htmlToTemplate(userHtmlContent)
}

// second
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
