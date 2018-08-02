import {MDCTemporaryDrawer} from "@material/drawer/index"
import {getMenuTemplate, renderViewToContainer} from "./menu.view"

const menuData = [{
  "id": 1,
  "Name": "Dashboard",
  "Status": "Active",
  "href": "Redirect Action",
  "Icon": "dashboard",
},
{
  "id": 2,
  "Name": "Leaderboard",
  "Status": "InActive",
  "href": "Redirect Action",
  "Icon": "devices_other",
},
{
  "id": 3,
  "Name": "Topics",
  "Status": "InActive",
  "href": "Redirect Action",
  "Icon": "sort",
},
{
  "id": 4,
  "Name": "challenges",
  "Status": "InActive",
  "href": "Redirect Action",
  "Icon": "games",
},
{
  "id": 5,
  "Name": "Friends",
  "Status": "InActive",
  "href": "Redirect Action",
  "Icon": "supervisor_account",
},
]
export const createMenu = () => {
  const menuContent = getMenuTemplate(menuData)
  renderViewToContainer(menuContent, "header")
  const drawerEl = document.querySelector(".mdc-drawer")
  const drawer = new MDCTemporaryDrawer(drawerEl)
  document.querySelector(".sidemenu").addEventListener("click", function() {
    drawer.open = true
  })
  drawerEl.addEventListener("MDCTemporaryDrawer:open", function() {
    console.log("Received MDCTemporaryDrawer:open")
  })
  drawerEl.addEventListener("MDCTemporaryDrawer:close", function() {
    console.log("Received MDCTemporaryDrawer:close")
  })
}
