import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ListItemText, TextField, Card, Grid, List, Typography, ListItem, Checkbox, IconButton, ListItemButton, ListItemIcon} from "@mui/material";
import Switch from "@mui/material/Switch";

const MiTodoList = () => {
  const [mostrar, setMostrar] = useState(false);
  const handleChange = () => {
    setMostrar(!mostrar);
  };

  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);

  const [checked, setChecked] = useState([1]);
  const handleToggle = (item) => () => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Grid>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Mi To Do List{" "}
      </Typography>
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
          setTodo("");
        }}
      >
        Agregar
      </Button>
      <Card>
        <Switch
          checked={!mostrar}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        {mostrar &&
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {list.map((item) => {
            const labelId = `checkbox-list-secondary-label-${item}`;
            return (
              <ListItem
                key={item}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                  </IconButton>
                }
                disablePadding
              >
              <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item} />
            </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        }
      </Card>
    </Grid>
  );
};

export { MiTodoList };
