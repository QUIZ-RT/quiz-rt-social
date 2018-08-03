import {signIn, signUp, logout} from "../../../server/FirebaseAuth/emailAuthentication"

export const goToSignin = (username, password) => {
  // console.log(username, "  i am signin  ", password)
  if (username.length === 0) {
    window.alert("Username cant be empty")
  }
  else if (password.length === 0) {
    window.alert("Password cant be empty")
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
