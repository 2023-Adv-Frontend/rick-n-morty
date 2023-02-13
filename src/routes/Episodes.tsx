import React, { useEffect } from "react";
import Hero from "../components/Hero";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useApollo, { Episode } from "../data-fetching/useApollo";
import { Loader } from "lucide-react";
import { Divider } from "@mui/material";
import styles from "./Episodes.module.css";

const Episodes = () => {
  const { loading, data, error } = useApollo();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Hero />
      <div className={styles.container}>
        {loading && <Loader />}
        {data &&
          data.episodes.results.map((episode: Episode) => {
            return (
              <>
                <List key={episode.episode}>
                  <ListItem disablePadding>
                    <ListItemText
                      primary={episode.name}
                      secondary={episode.episode}
                    />
                  </ListItem>
                </List>
                <Divider />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Episodes;
