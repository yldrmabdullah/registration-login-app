import React from "react";
import {
  Button,
  Form,
  Segment,
  Container,
  Icon,
  Header,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import handleSubmit from "./handleSubmits";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Divider hidden />
        <Header as="h1">Login</Header>
        <Segment>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="Enter your emial..."
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                placeholder="Enter your password..."
              />
            </Form.Field>
            <Button onClick={handleSubmit} color="green" type="submit">
              Log In <Icon name="cloud upload" />
            </Button>
            <Link to="/">
              <Button color="red" type="submit">
                Register
              </Button>
            </Link>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default Login;
