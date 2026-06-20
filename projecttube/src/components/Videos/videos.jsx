import { Grid } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "../../index";

const Videos = ({ videos }) => {
  if (videos.length) {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{}}
      >
        {videos.map((item) => (
          <Grid key={item[1].id.videoId} item xs={2} sm={4}>
            {item[1].id.videoId && <VideoCard video={item[1]}></VideoCard>}
            {item[1].id.channelId && (
              <ChannelCard video={item[1]}></ChannelCard>
            )}
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return <Loader></Loader>;
  }
};

export default Videos;
