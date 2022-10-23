const handleSubmit = () => {
  const { username, email, password, passwordConfirmation } = this.state;
  if (username === "" || email === "") {
    console.log("please fill out the missing fields!");
  } else if (password === "" || passwordConfirmation === "") {
    console.log("please fill out the password form!");
  } else {
    this.handlePassword();
  }
};

export default handleSubmit;
