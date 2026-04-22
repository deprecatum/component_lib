import lightBlueStyle from '../../assets/css/themes/blue/theme_light.module.css';
import lightEarthenStyle from '../../assets/css/themes/earthen/theme_light.module.css';
import lightGrayStyle from '../../assets/css/themes/gray/theme_light.module.css'
import darkBlueStyle from '../../assets/css/themes/blue/theme_dark.module.css';
import darkEarthenStyle from '../../assets/css/themes/earthen/theme_dark.module.css';
import darkGrayStyle from '../../assets/css/themes/gray/theme_dark.module.css'

const lightThemes = {
    lightBlue: lightBlueStyle,
    lightEarthen: lightEarthenStyle,
    lightGray: lightGrayStyle,
}

const darkThemes = {
    darkBlue: darkBlueStyle,
    darkEarthen: darkEarthenStyle,
    darkGray: darkGrayStyle,
}

export const Themes = {
    ...lightThemes,
    ...darkThemes
}