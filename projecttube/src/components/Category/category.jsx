import { Stack } from "@mui/material";
import { CategoryData } from "../../Constants/category";
import colors from "../../Constants/index";
const Category = () => {
  return (
    <Stack sx={{ height: "auto", flexDirection: "row", overflowX: "scroll" }}>
      {CategoryData.map((item) => (
        <button
          style={{ borderRadius: "0" }}
          key={item.name}
          className="category-btn"
        >
          <span style={{ color: colors.secondary }}>{item.icon}</span>
          <span style={{ opacity: 1, cursor: "pointer" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
