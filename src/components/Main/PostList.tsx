import React from "react";
import {
  Typography,
  Pagination,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Box,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../../recoil/store";
import { useFetchPost } from "../../hooks/useFetchPost";
import { useEffect } from "react";
import { removeTags } from "../../utils";

const PostListComponent: React.FC<any> = ({ data }) => {
  if (!data) return null; // data가 없으면 아무것도 반환하지 않음
  const { posts, total_count } = data;

  const [, setCurrentView] = useRecoilState(currentViewAtom);
  const { postData, fetchPostData } = useFetchPost();

  const handleClickPost = (postId: number) => {
    fetchPostData(postId);
  };

  useEffect(() => {
    if (postData) {
      setCurrentView({
        view: "post",
        data: postData.data,
        title: postData.data.post.title,
        id: postData.data.post.id,
      });
    }
  }, [postData]);

  const renderPosts = () => {
    return posts.map((post: any, index: number) => (
      <Grid item xs={12} key={index}>
        <CardActionArea
          component="a"
          href="#"
          onClick={() => handleClickPost(post.id)}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "200px",
              position: "relative",
              margin: "10px 0",
            }}
          >
            <CardContent sx={{ paddingTop: "13px" }}>
              <Typography variant="subtitle1" color="text.secondary" mb="10px">
                작성일: {new Date(post.created_at).toLocaleDateString()}
              </Typography>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                component="div"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {removeTags(post.content).slice(0, 250)}
              </Typography>
              <Box sx={{ position: "absolute", bottom: "10px" }}>
                <Typography variant="subtitle1" color="secondary">
                  작성자: {post.author}
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <ThumbUpIcon fontSize="small" /> {post.likes_count}{" "}
              <CommentIcon fontSize="small" /> {post.comments_count}
            </Box>
            <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
              {post.tags.map((tag: any, index: number) => (
                <Chip key={index} label={tag} variant="outlined" />
              ))}
            </Box>
          </Card>
        </CardActionArea>
      </Grid>
    ));
  };

  return (
    <div>
      {renderPosts()}
      <Pagination
        count={Math.ceil(total_count / 10)}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default PostListComponent;
