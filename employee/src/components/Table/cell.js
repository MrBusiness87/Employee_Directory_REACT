import React from "react";

function Cell ({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const dayArray = dateArray[2].split("T");
    const month = dateArray[1];
    const day = dayArray[0];
    const year = dateArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          const appStyle = {
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
            textDecoration: "none",
          }

          return (
            <tr key={login.uuid}>
              <td data-th="IMG" style={appStyle}>
                <img
                  src={picture.medium}
                  alt={"IMAGE FOR: " + name.last + ", " + name.first}
                  className="img-responsive"
                />
              </td>
              <td data-th="NAME" className="name-cell align-middle" style={appStyle}>
                {name.last + ", " + name.first}
              </td>
              <td data-th="PHONE" style={appStyle}>
                {phone}
              </td>
              <td data-th="EMAIL" style={appStyle}>
                <a href={"EMAIL:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="BIRTHDAY" style={appStyle}>
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default Cell;