import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";

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

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function InteractiveList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [posts, setPosts] = useState([]);

  // Gets all the posts
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts);
  };

  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          {posts.map(post => (
            <List dense={dense}>
              {generate(
                <ListItem key={post.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Link to={"/post/" + post.id}>{post.title}</Link>
                  </ListItemText>
                </ListItem>
              )}
            </List>
          ))}
          ;
        </div>
      </Grid>
    </div>
  );
}
