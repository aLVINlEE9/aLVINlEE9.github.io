import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRecoilState } from "recoil";
import { currentViewAtom } from "../recoil/store";
import { useFetchPost } from "../hooks/useFetchPost";
import { useEffect } from "react";
import { removeTags } from "../utils";

interface FeaturedPostProps {
  post: {
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
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;
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

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="div" onClick={() => handleClickPost(post.id)}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {new Date(post.created_at).toLocaleDateString()}
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
              {removeTags(post.content).slice(0, 100)}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image="https://source.unsplash.com/random?wallpapers"
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
