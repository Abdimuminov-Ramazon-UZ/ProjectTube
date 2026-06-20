import { Box, colors, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/user.service";
const Search = () => {
  const [videos, setVideos] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?q=New&part=snippet`,
        ).then((data) => setVideos(data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <Box>
      <Container>
        <Typography>
          Search results for{" "}
          <span style={{ color: colors.amber }}>{id}</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Search;
