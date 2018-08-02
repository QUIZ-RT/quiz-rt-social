const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}

export const getTopicModalbox = () => {
  const topicModalHtmlStr = `<aside id="topic-mdc-dialog"
    class="mdc-dialog"
    role="alertdialog"
    aria-labelledby="my-mdc-dialog-label"
    aria-describedby="my-mdc-dialog-description">
    <div class="mdc-dialog__surface">
      <header class="mdc-dialog__header">
        <h2 id="topic-mdc-dialog-label" class="mdc-dialog__header__title">
        </h2>
      </header>
      <section id="topic-mdc-dialog-description" class="mdc-dialog__body">
      </section>
      <footer class="mdc-dialog__footer">
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>`
  return htmlToTemplate(topicModalHtmlStr)
}

export const getToipcModalBodyContent = (item) => {
  const modalBodyContentStr = `<div class="topicCardContainer"><div id="topic_${item.id}" class="mdc-card demo-card demo-card--photo">
  <a class="mdc-card__primary-action demo-card__primary-action" href="#">
      <div class="mdc-card__media mdc-card__media--square demo-card__media" style="background-image: url('./src/client/assets/${item.Img}');">
      </div>
  </a>  
  </div>
  </div>`
  return htmlToTemplate(modalBodyContentStr)
}
