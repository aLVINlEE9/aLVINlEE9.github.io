import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useFetchLatestPosts } from "../hooks/useFetchLatestPosts";
import { useFetchSeriesList } from "../hooks/useFetchSeriesList";

interface Post {
  id: number;
  title: string;
  content: string;
  series_name: string;
  tags: string[];
  author: string;
  created_at: string;
  updated_at: string | null;
  likes_count: number;
  comments_count: number;
}

interface SidebarProps {
  title: string;
  description: string;
  todayHits: number;
  totalHits: number;
}

const sidebar: SidebarProps = {
  title: "About",
  description: "Hello! I'm Alvin Lee, residing in Seoul. I'm a quant trader.",
  todayHits: 0,
  totalHits: 0,
};

export default function Blog() {
  const { postData, fetchPostData } = useFetchLatestPosts();
  const { seriesListData, fetchSeriesListData } = useFetchSeriesList();

  useEffect(() => {
    fetchPostData(1, 4);
    fetchSeriesListData();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Header title="alvin_log" />
        <main>
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Latest Updates
            <hr />
          </Typography>
          <Grid container spacing={4}>
            {postData &&
              postData.data.posts.map((post: Post, index: number) => (
                <FeaturedPost post={post} key={index} />
              ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              series={seriesListData ? seriesListData : []}
              todayHits={sidebar.todayHits}
              totalHits={sidebar.totalHits}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
    </>
  );
}
