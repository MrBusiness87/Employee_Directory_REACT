import React from "react";

function Cell ({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    console.log (dateArray);
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
          const appstyle = {
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }
          return (
            <tr key={login.uuid}>
              <td data-th="IMG" className="align-middle" style={appstyle}>
                <img
                  src={picture.medium}
                  alt={"IMAGE FOR: " + name.last + ", " + name.first}
                  className="img-responsive"
                />
              </td>
              <td data-th="NAME" className="name-cell align-middle" style={appstyle}>
                {name.last + ", " + name.first}
              </td>
              <td data-th="PHONE" className="align-middle" style={appstyle}>
                {phone}
              </td>
              <td data-th="EMAIL" className="align-middle" style={appstyle}>
                <a href={"EMAIL:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="BIRTHDAY" className="align-middle" style={appstyle}>
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