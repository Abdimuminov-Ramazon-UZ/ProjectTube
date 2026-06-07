import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import colors from "../../Constants/index";
import { Category } from "../../index";
const Headpage = () => {
  const [selectedCategory] = useState("New");
  return (
    <Stack>
      <Box sx={{ height: "90vh", p: 2 }}>
        <Container sx={{ maxWidth: "90%" }}>
          <Typography sx={{ fontWeight: "bold", variant: "h3" }}>
            {selectedCategory}{" "}
            <span style={{ color: colors.primary }}>Videos</span>
          </Typography>
          <Category></Category>
        </Container>
      </Box>
    </Stack>
  );
};

export default Headpage;
