import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../Constants/index";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        marginRight: "5px",
      }}
    >
      <input type="text" placeholder="Search.." className="search-bar" />
      <IconButton type="submit">
        <Search value={value} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
