import {signIn, signUp, logout} from "../../../server/FirebaseAuth/emailAuthentication"
import {showSnackBar} from "../snackbar/snackbar.controller"

export const goToSignin = (username, password) => {
  // console.log(username, "  i am signin  ", password)
  if (username.length === 0) {
    showSnackBar("Username cant be empty", "Error")
  }
  else if (password.length === 0) {
    showSnackBar("Password cant be empty", "Error")
  }
  else {
    signIn(username, password)
  }
}

export const goToSignup = (username, password) => {
// TODO : write signup code here
  signUp(username, password)
  console.log(username, "  i am signup  ", password)
}

export const goToLogout = () => {
  logout()
}
