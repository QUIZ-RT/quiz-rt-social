
import {createHorizontalScrollableTemplate} from "../horizontal-scrollable-container/horizontalscrollablecontainer.controller"
const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}

const createDashboardContent = (dataList, headingText, idKey) => {
  const hsSectionStr = `<section class="card-section">
    <h6 class="mdc-typography--headline6">
      ${headingText}
      </h6>
      </section>`
  const hsSection = htmlToTemplate(hsSectionStr)
  const appendListContainer = hsSection.querySelector(".card-section")
  const hsContentTemp = createHorizontalScrollableTemplate(dataList, idKey)
  appendListContainer.appendChild(hsContentTemp)
  return hsSection
}

export const getPopularTopicTemplate = (dataList, headingText) => {
  return createDashboardContent(dataList, headingText, "ptopic")
}

export const getFavTopicTemplate = (dataList, headingText) => {
  return createDashboardContent(dataList, headingText, "ftopic")
}

export const getChallengesTemplate = (dataList, headingText) => {
  return createDashboardContent(dataList, headingText, "mychall")
}

export const getMyChallengesTemplate = (dataList, headingText) => {
  return createDashboardContent(dataList, headingText, "chall")
}
