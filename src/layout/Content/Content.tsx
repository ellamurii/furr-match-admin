import { Flex, ScrollArea } from "@mantine/core";
import { TablePets } from "../../components/Pets/TablePets";

const Content = () => {
  return (
    <Flex style={{ flex: 1 }}>
      <ScrollArea w="100%">
        <TablePets />
      </ScrollArea>
    </Flex>
  );
};

export default Content;
