// .storybook/YourTheme.js

import { create } from '@storybook/theming';
// import logoUrl from '../assets/logo.png'

export default create({
    base: 'light',
    brandTitle: 'Troika',
    // brandImage: logoUrl,

    textColor: '#BC5C00',
    barTextColor: '#FCFCFC',
    barSelectedColor: '#c2b6h2',
    barBg: '#BC5C00',

    appContentBg: '#FCFCFC',
    appBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 12,
});
