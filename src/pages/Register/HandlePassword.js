import { userAdded } from "../../Actions";
import store from "../../Store";

const handlePassword = () => {
  const { username, email, password, passwordConfirmation } = this.state;

  if (password === passwordConfirmation) {
    console.log("SUCCESS!!");
    store.dispatch(
      userAdded({ username: username, email: email, password: password })
    );

    this.props.history.push("/login");
  } else {
    console.log("passwords not matching");
  }
};
export default handlePassword;
