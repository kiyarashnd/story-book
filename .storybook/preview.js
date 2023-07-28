/** @type { import('@storybook/react').Preview } */
// import React from 'react';
// import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import '@storybook/addon-console';
// import { addDecorators } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// addDecorators(withKnobs);

// export const decoraotrs = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box>
//         <Story />
//       </Box>
//     </ThemeProvider>
//   ),
// ];
