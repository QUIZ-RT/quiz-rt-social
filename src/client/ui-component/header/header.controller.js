import {MDCTopAppBar} from "@material/top-app-bar/index"
import {getHeaderTemplate, renderViewToContainer} from "./header.view"

export const createHeader = () => {
  const headerContent = getHeaderTemplate()
  renderViewToContainer(headerContent, "body")
  const topAppBarElement = document.querySelector(".mdc-top-app-bar")
  const topAppBar = new MDCTopAppBar(topAppBarElement)
  console.log(topAppBar)
}
