import { Table } from "@mantine/core";
const elements = [
  { name: "Jjajang", species: "Cat", breed: "Siamese", age: "2yrs 4mos" },
  { name: "Punchoy", species: "Cat", breed: "Siamese", age: "2yrs 4mos" },
];

export const TablePets = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.species}</Table.Td>
      <Table.Td>{element.breed}</Table.Td>
      <Table.Td>{element.age}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={0}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Species</Table.Th>
          <Table.Th>Breed</Table.Th>
          <Table.Th>Age</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
