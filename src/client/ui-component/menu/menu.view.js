
const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getMenuTemplate = (menuData) => {
  let menuItemStr = ""
  if (menuData.length > 0) {
    menuData.forEach((item) => {
      menuItemStr += `<a id="menu_${item.id}" class="headermenu mdc-list-item mdc-list-item--selected demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">${item.Icon}</i>${item.Name}
          </a>`
    })
  }

  const menuHtmlStr = `<aside class="mdc-drawer mdc-drawer--temporary" dir="rtl">
    <nav class="mdc-drawer__drawer" dir="rtl">
      <header class="mdc-drawer__header">
        <div class="mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg">
          Header here
        </div>
      </header>
      <nav class="mdc-drawer__content mdc-list-group">
        <div id="icon-with-text-demo" class="mdc-list">
        ${menuItemStr}
        </div>
      </nav>
    </nav>
  </aside>`
  return htmlToTemplate(menuHtmlStr)
}
