import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Channel, Headpage, Navbar, Search, VideoD } from "./index";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Headpage />}></Route>
        <Route path="/channel/:id" element={<Channel />}></Route>
        <Route path="/video/:id" element={<VideoD />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
