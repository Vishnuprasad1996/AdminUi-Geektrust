import { Component } from "react";

import NavBar from "./components/NavBar";
import AdminDetailsItem from "./components/AdminDetailsItem";

import "./App.css";

class App extends Component {
  state = {
    userList: [],
    searchInput: "",
    isSelectAllChecked: false,
    activeSearchByOption: "",
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    const response = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    if (response.ok === true) {
      const data = await response.json();
      this.setState({ userList: data });
    } else {
      this.renderFailureView();
    }
  };

  onEnterSearch = (value) => {
    this.setState({ searchInput: value });
  };

  getFilteredUserList = () => {
    const { userList, searchInput } = this.state;

    const filteredList = userList.filter((eachList) =>
      eachList.name.toLowerCase().includes(searchInput)
    );
    return filteredList;
  };

  onDeleteListItem = (id) => {
    const { userList } = this.state;
    const updatedList = userList.filter((eachItem) => eachItem.id !== id);
    this.setState({ userList: updatedList });
  };

  onClickSelectAll = () => {
    this.setState((prevState) => ({
      isSelectAllChecked: !prevState.isSelectAllChecked,
    }));
  };

  onChangeSearchBy = (value) => {
    this.setState({ activeSearchByOption: value });
  };

  render() {
    const {
      searchInput,
      isSelectAllChecked,
      activeSearchByOption,
    } = this.state;
    const filteredList = this.getFilteredUserList();
    console.log(activeSearchByOption);

    return (
      <div className="admin-ui-bg">
        <NavBar onEnterSearch={this.onEnterSearch} searchInput={searchInput} />
        <div className="admin-details-cont">
          <ul className="list-header">
            <li className="list-item-header">
              <input
                onChange={this.onClickSelectAll}
                checked={isSelectAllChecked}
                className="checkbox"
                type="checkbox"
              />
              <p className="table-head-name name">Name</p>
              <p className="table-head-name email">Email</p>
              <p className="table-head-name role">Role</p>
              <p className="table-head-name ">Actions</p>
            </li>
          </ul>
          <ul className="user-list-item-cont">
            {filteredList.map((eachItem) => (
              <AdminDetailsItem
                onDeleteListItem={this.onDeleteListItem}
                userListDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
