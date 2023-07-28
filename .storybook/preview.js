/** @type { import('@storybook/react').Preview } */
// import React from 'react';
// import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';

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
