import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Navbar from "./layout/Navbar/Navbar";
import Content from "./layout/Content/Content";

export default function App() {
  return (
    <MantineProvider>
      <Navbar />
      <Content />
    </MantineProvider>
  );
}
