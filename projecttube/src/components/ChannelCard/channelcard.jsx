import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const ChannelCard = ({ video }) => {
  return (
    <Box
      sx={{
        width: "350px",
        borderRadius: "20px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "320px",
        margin: "auto",
      }}
    >
      <CardContent
        sx={{
          dicplay: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          img={video?.snippet.thumbnails.default.url}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: "2",
            border: "1px solid red",
          }}
        ></CardMedia>
        <Typography variant="h6">
          {video?.snippet.title}
          <CheckCircle></CheckCircle>
        </Typography>
        <Typography>
          {video.statistics.subscribeCount && (
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                color: "gray",
              }}
            >
              {parseInt(
                video.statistics.subscribeCount.toLocaleString("en-US"),
              )}
            </Typography>
          )}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
