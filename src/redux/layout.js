// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** ThemeConfig Import
import themeConfig from "../configs/themeConfig.js";

const initialSkin = () => {
  const item = window.localStorage.getItem("skin");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.skin;
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    skin: initialSkin(),
    navbarType: themeConfig.layout.navbar.type,
    contentWidth: themeConfig.layout.contentWidth,
    navbarColor: themeConfig.layout.navbar.backgroundColor,
  },
  reducers: {
    handleSkin: (state, action) => {
      state.skin = action.payload;
      window.localStorage.setItem("skin", JSON.stringify(action.payload));
    },
    handleNavbarType: (state, action) => {
      state.navbarType = action.payload;
    },
    handleNavbarColor: (state, action) => {
      state.navbarColor = action.payload;
    },
    handleContentWidth: (state, action) => {
      state.contentWidth = action.payload;
    },
  },
});

export const {
  handleSkin,
  handleNavbarType,
  handleNavbarColor,
  handleContentWidth,
} = layoutSlice.actions;

export default layoutSlice.reducer;
