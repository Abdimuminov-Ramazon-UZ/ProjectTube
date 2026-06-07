import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import colors from "../../Constants/index";
import { Logo } from "../../Constants/logo";
import { SearchBar } from "../../index";
const Navbar = () => {
  return (
    <Stack
      p={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "sticky",
        zIndex: 999,
        top: 0,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" height={30} />
      </Link>

      <SearchBar></SearchBar>
      <Box />
    </Stack>
  );
};

export default Navbar;
