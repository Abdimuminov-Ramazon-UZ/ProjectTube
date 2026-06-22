import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "320px" },
        //we use xs,md,sm for response design
        boxShadow: "none",
        borderRadius: "0",
        height: "180px",
        margin: "12px",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          sx={{ width: "360px", height: "180px" }}
        ></CardMedia>
      </Link>
      <CardContent
        sx={{
          background: { xs: "black", sm: "red", md: "pink" },
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography sx={{ marginY: "5px", opacity: 0 }}>
            2 days ago
          </Typography>
          <Typography variant={"subtitle1"} sx={{ fontWeight: "bold" }}>
            {video.snippet.title.size}
          </Typography>
          <Typography sx={{ marginY: "5px", opacity: 0 }}>
            five minutes ago
          </Typography>
          <Typography variant={"subtitle2"} sx={{ opacity: 0.6 }}>
            {video.snippet.description.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/channel/${video.id.channelId}`}>
          <Stack
            sx={{
              flexDirection: "row",
              position: "absolute",
              bottom: "10px",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src={video.snippet.thumbnails.high.url}></Avatar>
            <Typography variant={"subtitle2"}>
              {video?.snippet.channelTitle}
              <CheckCircle />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
