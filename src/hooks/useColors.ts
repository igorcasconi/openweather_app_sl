import {useTheme} from 'styled-components/native';

const useColors = () => {
  const theme = useTheme();

  const getThemeColors = (color: string) => {
    if (!color) {
      return '';
    }
    const colorTheme = theme.colors[color] ?? '';
    return colorTheme;
  };

  return getThemeColors;
};

export default useColors;
