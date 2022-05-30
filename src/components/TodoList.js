import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ListItemText, TextField } from "@mui/material";
import { Grid, List, Typography, ListItem } from "@mui/material";

const TodoList = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="To Do"
        variant="outlined"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          setList([...list, todo]);
          setTodo('');
        }}
      >
        Agregar
      </Button>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {" "}
          Mi To Do List{" "}
        </Typography>
        <List>
          {list.map((item) => {
            return <ListItem>
            <ListItemText
              primary={item}
            />
          </ListItem>;
          })}
        </List>
      </Grid>
    </div>
  );
};

export { TodoList };
