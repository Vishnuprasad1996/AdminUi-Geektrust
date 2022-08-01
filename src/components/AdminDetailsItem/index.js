import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { Component } from "react";

import "./index.css";

class AdminDetailsItem extends Component {
  state = { isCheckboxClicked: false };

  onClickDeleteIcon = () => {
    const { onDeleteListItem, userListDetails } = this.props;
    onDeleteListItem(userListDetails.id);
  };

  onClickCheckBoxItem = () => {
    this.setState((prevState) => ({
      isCheckboxClicked: !prevState.isCheckboxClicked,
    }));
  };

  render() {
    const { isCheckboxClicked } = this.state;
    const { userListDetails } = this.props;
    const { name, email, role } = userListDetails;

    const listItemClassName = isCheckboxClicked
      ? "each-list-item-cont-selected"
      : "each-list-item-cont";

    return (
      <li className={listItemClassName}>
        <input
          checked={isCheckboxClicked}
          onChange={this.onClickCheckBoxItem}
          className="checkbox-items"
          type="checkbox"
        />
        <p className="each-list-item">{name}</p>
        <p className="each-list-item">{email}</p>
        <p className="each-list-item">{role}</p>
        <div className="edit-delete-cont">
          <BiEdit className="icons" />
          <MdOutlineDeleteOutline
            onClick={this.onClickDeleteIcon}
            className="icons"
          />
        </div>
      </li>
    );
  }
}

export default AdminDetailsItem;
