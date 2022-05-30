import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Grid } from "@mui/material";

const RenderCondicionado = () => {
  const [mostrar, setMostrar] = useState(true);
  const handleChange = () => {
    setMostrar(!mostrar)
  }
  return (
    <Grid>
      <Switch
        checked={mostrar}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {mostrar && <p> Hola, soy Diana</p>}
    </Grid>
  );
};

export { RenderCondicionado };
