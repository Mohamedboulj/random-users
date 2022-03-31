import "./App.css";
import { Component } from "react";
import { Cardlist } from "./components/card/card.component";
import { Searchbox } from "./components/Searchcomponent/search.Component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
    let { searchField, users } = this.state;
    let filteredList = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <Searchbox placeholder="Search Users" handleChange={(event) => {this.setState({ searchField: event.target.value })}} />
        <h2>Random users</h2>
        <Cardlist users={filteredList} />
      </div>
    );
  }
}
export default App;
