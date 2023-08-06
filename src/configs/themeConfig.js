// Logo Import
import logo from "../assets/logo.png";

// You can customize the template with the help of this file

//Template config options
const themeConfig = {
  app: {
    appName: "Vuexy",
    appLogoImage: logo,
  },
  layout: {
    skin: "light", // light, dark, bordered, semi-dark
    type: "vertical", // vertical, horizontal
    contentWidth: "boxed", // full, boxed
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: "floating", // static , sticky , floating, hidden
      backgroundColor: "white", // BS color options [primary, success, etc]
    }
  },
};

export default themeConfig;
