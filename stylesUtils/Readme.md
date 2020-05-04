# React Native Style Utility

### Setting the styles variables
You can adjust the styles variables from stylesUtils/variables files.

1. primary: primary color for the mobile application.
2. secondary: secondary color of your choice.
3. success: success color of your choice.
4. danger:danger color of your choice.
5. info: informatics color for the application. 
6. warning: warning color for application.
7. scale: If current style is small or large in dpi set the scale. 
8. typographyPrimary: Primary font for the application.
9. typographySecondary: secondary font for application.

### Typographic classes presented by this system:
Here are the list of text styles.
1.  h1:
2.  h2:
3.  h3:
4.  h4:
5.  h5:
6.  h6:
7.  subtitlePrimary:
8.  subtitleSecondary:
9.  bodyPrimary:
10. bodySecondary:
11. captions:

### How to load the font while using this style utilities?

```js
//import statements
import { Roboto } from "./stylesUtils";
//implementation
  await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          ...Roboto,
        });
```

### color classes presented by this system:
1.  primary:
2.  secondary:
3.  success:
4.  danger:
5.  warning:
6.  info: 
7.  bgPrimary:
8.  bgSecondary:
9.  bgSuccess:
19. bgDanger:
11. bgWarning:
12. bgInfo:




