import {MDCTopAppBar} from "@material/top-app-bar/index"
import {getHeaderTemplate, renderViewToContainer} from "./header.view"
import {goToLogout} from "../login-page/login.service"
export const createHeader = () => {
  const headerContent = getHeaderTemplate()
  const logoutBtn = headerContent.querySelector("#logout")
  logoutBtn.addEventListener("click", function() {
    goToLogout()
  })

  renderViewToContainer(headerContent, "body")
  const topAppBarElement = document.querySelector(".mdc-top-app-bar")
  const topAppBar = new MDCTopAppBar(topAppBarElement)
  console.log("from header =", topAppBar)
}