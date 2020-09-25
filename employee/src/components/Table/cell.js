import React, { useContext } from "react";

const Cell = () => {
  const context = useContext(React.createContext({}));

  function formatDate(date) {
    const dateArray = date.split("/");
    const dayArray = dateArray[2].split("T");
    const month = dateArray[1];
    const day = dayArray[0];
    const year = dateArray[0];
    const changedDate = [month, day, year].join("/");
    return changedDate;
  }

  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(({ login, name, image, phone, email, birthday }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="IMG">
                <img
                  src={image}
                  alt={"PROFILE: " + name.last + ", " + name.first}
                />
              </td>
              <td data-th="NAME" className="name-cell align-middle">
                {name.last + ", " + name.first}
              </td>
              <td data-th="PHONE">
                {phone}
              </td>
              <td data-th="EMAIL">
                <a href={"EMAIL:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="BIRTHDAY">
                {formatDate(birthday.date)}
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