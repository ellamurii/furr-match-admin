import { useState } from "react";
import { Code, Group } from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconPaw,
  IconReport,
  IconHistory,
  IconChartDots3,
} from "@tabler/icons-react";

import classes from "./Navbar.module.css";
import ColorSchemeSwitcher from "../../components/ColorSchemeSwitcher/ColorSchemeSwitcher";

const data = [
  { link: "", label: "Dashboard", icon: IconChartDots3 },
  { link: "", label: "Pets", icon: IconPaw },
  { link: "", label: "Applications", icon: IconReport },
  { link: "", label: "Adoptions", icon: IconHistory },
];

const Navbar = () => {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <ColorSchemeSwitcher/>
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
