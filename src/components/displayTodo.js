import { React, useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { getTodo, deleteTodo } from "../utils/firebaseUtil";

const DisplayTodo = () => {
  const [todoList, settodoList] = useState([]);

  useEffect(() => {
    var unsubscribe = getTodo(settodoList).then((data) => {
        return data.unsubscribe;
    });

    return () => {
      unsubscribe();
    }
  }, []);


  const handleDelete = async (id) => {
    await deleteTodo(id);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Task Number</TableCell>
              <TableCell>Task</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((data, index) => (
              <TableRow key={data.id}>
                <TableCell>{index}</TableCell>
                <TableCell>{data.task}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDelete(data.id)} variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayTodo;
