import React from "react";
import { Button } from "@mui/material";

function Botton() {
  return (
    <div>
      <Button variant="contained">Button 1</Button>

      <Button variant="outlined">Button 2</Button>

      <Button variant="contained" color="secondary">
        Button 3
      </Button>

      <Button variant="outlined" color="secondary">
        Button 4
      </Button>
    </div>
  );
}

export default Botton;
