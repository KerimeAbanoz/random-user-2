import React from "react";
import { AiTwotoneMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import AddUser from "./AddUser";

const Users = ({ data, getUser }) => {
  const {
    email,
    phone,
    name: { title, first, last },
    picture,
    location: { street },
  } = data;

  const [tableValue, setTableValue] = useState([]);
  const [propert, setPropert] = useState("");
  const [userValue, setUserValue] = useState("");

  const usersValue = {
    email: email,
    phone: phone,
    name: title + " " + first + " " + last,
    street: street.name + " " + street.number,
  };

  const handleChange = (e) => {
    // e.target.style.background = "red";
    if (e.target.classList.contains("icon")) {
      setPropert(e.target.id);
      const value = e.target.id;
      setUserValue(usersValue[value]);
    }
  };

  const handleChangeUser = () => {
    getUser();
    setUserValue(usersValue.name);
  };

  const handleAddUser = () => {
    setTableValue([...tableValue, usersValue]);
  };
  return (
    <>
      <div className="pic-area">
        <img className="person-image" src={picture?.large} alt="img" />
      </div>

      <div className="shown-info">
        <p className="info-name">My {propert || "name"} is</p>
        <p className="user-value">{userValue || usersValue.name}</p>
      </div>

      <div className="icons" onMouseOver={handleChange}>
        <BsPerson className="icon" id="name" />
        <AiTwotoneMail className="icon" id="email" />
        <AiOutlinePhone className="icon" id="phone" />
        <GoLocation className="icon" id="location" />
      </div>

      <div className="buttons">
        <button className="button" onClick={handleChangeUser}>
          New User
        </button>
        <button className="button" onClick={handleAddUser}>
          Add User
        </button>
      </div>

        <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <AddUser tableValue={tableValue} />
            </tbody>
          </table>

    </>
  );
};

export default Users;
