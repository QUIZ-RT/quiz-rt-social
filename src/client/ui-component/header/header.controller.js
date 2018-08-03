import {MDCTopAppBar} from "@material/top-app-bar/index"
import {getHeaderTemplate, renderViewToContainer} from "./header.view"
import {goToLogout} from "../login-page/login.service"
import {Store} from "../../boot/Store"

export const createHeader = () => {
  const headerContent = getHeaderTemplate()
  const logoutBtn = headerContent.querySelector("#logout")
  logoutBtn.addEventListener("click", function() {
    goToLogout()
  })

  renderViewToContainer(headerContent, "#quiz-header")
  const topAppBarElement = document.querySelector(".mdc-top-app-bar")
  const topAppBar = new MDCTopAppBar(topAppBarElement)
  console.log("from header =", topAppBar)
}

Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView !== 'login'){
    createHeader()
  }
})