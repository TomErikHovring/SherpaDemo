import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

export default function Header() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  }));

  const classes = useStyles();

  return (
    <div
      className={classes.demo}
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#E4E4E4",
        marginLeft: "-10px",
        marginTop: "-10px",
        marginRight: "-10px"
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Avatar
          style={{
            marginTop: "7px",
            marginLeft: "5px",
            marginRight: "10px"
          }}
        >
          {`<`}
        </Avatar>
      </Link>
      <Typography variant="h3">Sherpa Demo</Typography>
    </div>
  );
}
