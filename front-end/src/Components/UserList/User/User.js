import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const User = props => (
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>username</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell>phone</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {/* map(callback function, is annoymous) */}
      {props.users.map((user, index) => {
        return (
          <Table.Row>
            <Table.Cell>
              <Button> edit </Button>
            </Table.Cell>
            <Table.Cell>
              <Button> delete </Button>
            </Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
          >
            <Icon name="user" /> Add User
          </Button>
          <Button size="small">Approve</Button>
          <Button disabled size="small">
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default User;
