import { Box, CircularProgress, Stack } from "@mui/material";
const Loader = () => {
  return (
    <Box minHeight={"90vh"}>
      <Stack>
        <CircularProgress aria-label="Loading…" />;
      </Stack>
    </Box>
  );
};

export default Loader;
