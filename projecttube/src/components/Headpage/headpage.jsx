import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import colors from "../../Constants/index";
import { Category, Videos } from "../../index";
import { ApiService } from "../../service/user.service";
const Headpage = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const SetselectedCategoryHandler = (category) =>
    setselectedCategory(category);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?q=${selectedCategory.toLocaleLowerCase()}&part=snippet`,
        ).then((data) => setVideos(data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);
  //if we change selectedCategory state then we get datas as it
  return (
    <Stack>
      <Category
        SetselectedCategoryHandler={SetselectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box sx={{ height: "90vh", p: 2 }}>
        <Container sx={{ maxWidth: "90%" }}>
          <Typography sx={{ fontWeight: "bold", variant: "h3" }}>
            {selectedCategory}
            <span style={{ color: colors.primary }}>Videos</span>
          </Typography>
        </Container>
      </Box>
      <Videos videos={videos} />
    </Stack>
  );
};

export default Headpage;
