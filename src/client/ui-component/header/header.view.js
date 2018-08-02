const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getHeaderTemplate = () => {
  const headerHtmlStr = `<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
    <span class="mdc-top-app-bar__title">Quizzapp</span>
    </section>
    <section id="iconSection" class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
    <a href="#" class="material-icons chatIcon">chat</a>
    <a href="#" class="sidemenu material-icons mdc-top-app-bar__navigation-icon">menu</a>
    </section>
  </div>
  </header>`
  return htmlToTemplate(headerHtmlStr)
}

