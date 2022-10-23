import store from "../Store";

const handleSubmit = () => {
  const { email, password } = this.state;

  if (
    store.getState().addUser.email === email &&
    store.getState().addUser.password === password
  ) {
    this.props.history.push("/main");
  } else {
    console.log("email or password is wrong!");
    console.log(store.getState().addUser);
  }
};
export default handleSubmit;
