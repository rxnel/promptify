'use client';
import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { IconBrandSpotify } from '@tabler/icons';
import { signIn } from 'next-auth/react';
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(200),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  const loginSpotify = () => {
    signIn('spotify', { callbackUrl: '/create' });
  };

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Create{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'lightgreen', to: 'darkgreen' }}
            inherit
          >
            AI-curated
          </Text>{' '}
          Spotify playlists effortlessly.
        </h1>

        <Text className={classes.description} color="dimmed">
          Simply enter a prompt and let the AI do the heavy lifting. Say good-bye to spending hours
          curating playlists.
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            onClick={loginSpotify}
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'darkgreen', to: 'green' }}
            leftIcon={<IconBrandSpotify size={35} />}
          >
            Login with Spotify
          </Button>

          <Button component="a" href="/faq" size="xl" variant="default" className={classes.control}>
            FAQ
          </Button>
        </Group>
      </Container>
    </div>
  );
}
