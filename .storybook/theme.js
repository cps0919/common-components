// .storybook/YourTheme.js

import { create } from '@storybook/theming';
export default create({
    base: 'dark',

    colorPrimary: 'hotpink',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'red',
    appContentBg: 'silver',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: 'black',
    barBg: 'hotpink',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: '季LUCKY',
    brandUrl: 'https://example.com',
    brandImage: 'https://place-hold.it/350x150',
});