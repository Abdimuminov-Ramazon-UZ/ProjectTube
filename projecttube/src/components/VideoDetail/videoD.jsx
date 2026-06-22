import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import renderHTML from "react-render-html";
import { Link, useParams } from "react-router-dom";
import { Loader, Videos } from "../../index";
import { ApiService } from "../../service/user.service";
const VideoD = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVidoe] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(
        `/video/part=snippet,statistic&id=${id}`,
      );
      setVideoDetail(data.items[0]);
      const dataRelated = await ApiService.fetching(
        `/search/part=snippet&id&relatedVideoId=${id}&type=video`,
      );
      setRelatedVidoe(dataRelated.items[0]);
      console.log(data);
    };

    getData();
  }, [id]);
  if (videoDetail.snippet) return <Loader />;
  return (
    <Box sx={{ minHeight: "90vh", mb: 10 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ width: { xs: "100%", md: "75%" } }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          ></ReactPlayer>
          {videoDetail.snippet.tags.map((item, idx) => {
            <Chip
              label={item}
              key={idx}
              sx={{
                marginTop: "10px",
                cursor: "pointer",
                nl: "10px",
              }}
              deleteIcon={<Tag />}
              variant="outlined"
              onDelete={() => {}}
            ></Chip>;
          })}
        </Box>
        <Box width={"25%"}>
          {" "}
          <Typography variant="subtitle2" sx={{ p: 2, opacity: ".7" }}>
            {renderHTML(videoDetail.snippet.description)}
          </Typography>
          <Link to={`/video/${videoDetail.id.channelId}`}>
            <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
              <Stack
                sx={{ opacity: 0.7 }}
                direction="row"
                alignItems="center"
                gap="3px"
              >
                <Visibility />
                {parseInt(
                  videoDetail.statistics.viewCount,
                ).toLocaleString()}{" "}
                views
              </Stack>
              <Stack
                sx={{ opacity: 0.7 }}
                direction="row"
                alignItems="center"
                gap="3px"
              >
                <FavoriteOutlined />
                {parseInt(
                  videoDetail.statistics.likeCount,
                ).toLocaleString()}{" "}
                likes
              </Stack>
              <Stack
                sx={{ opacity: 0.7 }}
                direction="row"
                alignItems="center"
                gap="3px"
              >
                <MarkChatRead />
                {parseInt(
                  videoDetail.statistics.commentCount,
                ).toLocaleString()}{" "}
                comment
              </Stack>
            </Stack>
          </Link>
          <Stack direction="row" py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack
                direction="row"
                alignItems="center"
                gap="5px"
                marginTop="5px"
              >
                <Avatar
                  alt={videoDetail.snippet.channelTitle}
                  src={videoDetail.snippet.thumbnails.default.url}
                />
                <Typography variant="subtitle2" color="gray">
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{ width: { xs: "100%", md: "75%" } }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoD;
