
import { themes } from '@storybook/theming';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: 'black',
      },
      {
        name: 'light',
        value: 'white'
      }
    ],
  },
  darkMode: {
    light: { ...themes.normal, brandTitle: '季LUCKY', },
    // Override the default dark theme
    dark: { ...themes.dark, },
    // Override the default light theme
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}
