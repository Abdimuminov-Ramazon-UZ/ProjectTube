import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/user.service";
import ChannelCard from "../ChannelCard/channelcard";
import Videos from "../../index"
const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState();
  const [videoS, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(`channels/part=snippet&id=${id}`);
      setchannelDetail(data.items[0]);

      const dataVideo = await ApiService.fetching(
        `search?part=snippet&channelId=${id}`,
      );
      setVideos(dataVideo.items[0]);
    };
    getData();
  }, [id]);
  return (
    <Box
      sx={{
        minHeight: "95vh",
        mt: "10vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
          zIndex: "10",
          backgroundImage: `url(${channelDetail?.brandingSettings?.image.bannerExternalUrl})`,
          backroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <ChannelCard video={channelDetail}></ChannelCard>
      <Container sx={{maxWidth:"90%"}}><Videos videos={videoS}/></Container>
    </Box>
  );
};

export default Channel;
