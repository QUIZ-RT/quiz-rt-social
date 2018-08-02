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
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>`
  return htmlToTemplate(topicModalHtmlStr)
}

export const getToipcModalBodyContent = (state, id) => {
  const modalBodyContentStr = `
  
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-8-tablet">
        <div class="topicCardContainer">
            <div id="topic_${id}" class="mdc-card demo-card demo-card--photo">
              <a class="mdc-card__primary-action demo-card__primary-action" href="#">
                <div class="mdc-card__media mdc-card__media--square demo-card__media" style="background-image: url('${state.topicImage}');">
                </div>
              </a>  
            </div>   
        </div>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-6-tablet">
          <button id="default-dialog-activation" class="mar-btm-10px mdc-button mdc-button--raised">Play Game</button>
          <button id="default-dialog-activation" class="mar-btm-10px mdc-button mdc-button--raised">Follow</button>
          <button id="default-dialog-activation" class="mar-btm-10px mdc-button mdc-button--raised">Leader Board</button>
      </div>      
    </div>
  </div>  
  `
  return htmlToTemplate(modalBodyContentStr)
}
