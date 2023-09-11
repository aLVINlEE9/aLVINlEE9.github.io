import { useEffect, useRef } from "react";
import { Grid, Typography, Divider } from "@mui/material";
import PostComponent from "./Main/Post";
import PostListComponent from "./Main/PostList";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";

function Main() {
  const [currentView] = useRecoilState(currentViewAtom);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentView.view !== "init" && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentView]);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
      ref={mainRef}
    >
      <Typography variant="h4" gutterBottom>
        {currentView.view === "init" ? "Welcome!" : currentView.title}
      </Typography>
      <Divider />
      {currentView.view === "post" && <PostComponent post={currentView.data} />}
      {(currentView.view === "series" || currentView.view === "all") && (
        <PostListComponent data={currentView.data} />
      )}
    </Grid>
  );
}

export default Main;
