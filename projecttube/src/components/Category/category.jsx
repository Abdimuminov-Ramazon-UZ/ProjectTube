import { Stack } from "@mui/material";
import { CategoryData } from "../../Constants/category";
import colors from "../../Constants/index";
const Category = ({ SetselectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack sx={{ height: "auto", flexDirection: "row", overflowX: "scroll" }}>
      {CategoryData.map((item) => (
        <button
          style={{
            borderRadius: "0",
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "#fff",
          }}
          key={item.name}
          className="category-btn"
          onClick={() => SetselectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color:
                item.name == selectedCategory
                  ? colors.primary
                  : colors.secondary,
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1, cursor: "pointer", margin: "2px" }}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
