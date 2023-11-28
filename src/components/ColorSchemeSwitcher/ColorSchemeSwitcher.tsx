import {
  Switch,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoon,  IconSun } from "@tabler/icons-react";

const ColorSchemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoon
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size="md"
      onLabel={sunIcon}
      offLabel={moonIcon}
      checked={colorScheme === "light"}
      onChange={(event) =>
        setColorScheme(event.currentTarget.checked ? "light" : "dark")
      }
    />
  );
};

export default ColorSchemeSwitcher;
