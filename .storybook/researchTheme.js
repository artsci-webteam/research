// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import brand_image from '../src/assets/images/research-secondary.svg'

export default create({
  base: 'light',

  colorPrimary: '#d01c29',
  colorSecondary: '#151515',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#151515',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#63666A',
  barSelectedColor: '#151515',
  barBg: '#d01c29',

  // Branding
  brandTitle: ' Research Design System',
  brandUrl: 'https://research-dev.artsci.wustl.edu',
  brandImage: brand_image,
});
