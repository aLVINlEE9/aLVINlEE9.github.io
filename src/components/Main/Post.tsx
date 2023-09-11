import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  TextField,
  CardHeader,
  IconButton,
  Box,
} from "@mui/material";
import {
  ThumbUpAltOutlined,
  ModeCommentOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import Markdown from "markdown-to-jsx";

const PostComponent = ({ post }: any) => {
  const { content, tags, likes_count, comments } = post.post;

  return (
    <>
      <Box sx={{ height: "20px" }} />
      <Card>
        <CardHeader
          action={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="add to likes" size="small">
                <ThumbUpAltOutlined fontSize="small" />
                {likes_count}
              </IconButton>
              <IconButton aria-label="share" size="small">
                <ModeCommentOutlined fontSize="small" />
                {comments.length}
              </IconButton>
            </Box>
          }
          title={tags.map((tag: string) => (
            <Chip label={tag} key={tag} />
          ))}
        />
        <CardContent>
          <Typography variant="body2" component="div">
            <Markdown>{content}</Markdown>
          </Typography>
        </CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
        >
          <IconButton aria-label="share post" size="small">
            <ShareOutlined fontSize="small" />
          </IconButton>
        </Box>
      </Card>
      <Box sx={{ height: "20px" }} />
      {comments.map((comment: string, index: number) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            my: 1,
          }}
          key={index}
        >
          <Chip label={comment} variant="outlined" />
        </Box>
      ))}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          defaultValue=""
          variant="standard"
          color="secondary"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="outlined" color="secondary" sx={{ ml: 1 }}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default PostComponent;
