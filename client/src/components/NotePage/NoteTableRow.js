import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withRouter } from "react-router-dom";
import { Delete } from "@material-ui/icons";

const NoteTableRow = ({ itemNumber, note, history }) => {
  const redirect = (path, state) => {
    history.push({
      pathname: path,
      state: state,
    });
  };

  const handleClick = async (e, action) => {
    e.stopPropagation();
    if (action === "view") {
      redirect("/note", { note: note });
    } else {
      const { _id } = note;
      const response = await fetch("api/notes/" + _id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
      const jsonResponse = await response.json();
      if (jsonResponse.msg === "success") {
        window.location.reload();
      }
    }
  };

  function renderDate(dateString) {
    const date = new Date(dateString);

    return `${date.toDateString()}`;
  }

  return (
    <TableRow
      hover
      name={note._id}
      key={note._id}
      onClick={(e) => handleClick(e, "view")}
    >
      <TableCell align="left">{itemNumber}</TableCell>
      <TableCell>{note.title}</TableCell>
      <TableCell>{renderDate(note.updatedAt)}</TableCell>
      <TableCell onClick={(e) => handleClick(e, "delete")}>
        <Delete />
      </TableCell>
    </TableRow>
  );
};

export default withRouter(NoteTableRow);
