import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: FC<any> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Alert-react</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
