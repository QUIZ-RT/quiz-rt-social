
const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getHorizontalScrollableContainerTemplate = (dataList, idkey) => {
  const hsContainerStr = `<div class="hsListContainer">
    </div>`
  const hsContainerTemp = htmlToTemplate(hsContainerStr)
  const appendListContainer = hsContainerTemp.querySelector(".hsListContainer")
  let hsContentStr = ""
  dataList.forEach((item) => {
    console.log(item.Img)
    hsContentStr += `<div id="${idkey}_${item.id}" class="mdc-card demo-card demo-card--photo">
    <a class="mdc-card__primary-action demo-card__primary-action" href="#">
        <div class="mdc-card__media mdc-card__media--square demo-card__media" style="background-image: url('./src/client/assets/${item.Img}');">
        </div>
    </a>  
    <a class="mdc-card__primary-action demo-card__primary-action" href="#">
    <div class="mdc-typography--subtitle2 ">
    ${item.Name}
    </div>
    </a>
    </div>`
  })

  const hsContentTemp = htmlToTemplate(hsContentStr)
  appendListContainer.appendChild(hsContentTemp)
  return hsContainerTemp
}
