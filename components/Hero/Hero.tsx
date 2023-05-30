"use client";
import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { IconBrandSpotify } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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

export function HeroTitle() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Create {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'darkgreen', to: 'green' }} inherit>
            AI-curated
          </Text>{' '}
          Spotify playlists in seconds.
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="/api/auth/spotify"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'darkgreen', to: 'green' }}
            leftIcon={<IconBrandSpotify size={20} />}
          >
            Login with Spotify
          </Button>

          <Button
            component="a"
            href="/faq"
            size="xl"
            variant="default"
            className={classes.control}
          >
            FAQ
          </Button>
        </Group>
      </Container>
    </div>
  );
}