'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import Provider from '../components/Provider/Provider';
import { useState } from 'react';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <Provider>
      <CacheProvider value={cache}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            {children}
          </MantineProvider>
        </ColorSchemeProvider>
      </CacheProvider>
    </Provider>
  );
}
