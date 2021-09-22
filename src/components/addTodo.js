import { React, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {addTodo} from "../utils/firebaseUtil";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    console.log("Clicked");
    if(todo !== "")
      addTodo(todo);
    else 
      alert("Empty todo cannot be added");
      
    setTodo("");
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <TextField
        color="secondary"
        id="outlined-search"
        label="Add Todo"
        placeholder="Add Todo"
        type="search"
        value={todo}
        onChange={handleChange}
        multiline={true}
        sx={{'margin':'50px', 'width':'80%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleClick} size="medium">
                <AddCircleIcon color="secondary" fontSize="medium" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default AddTodo;
