// in src/users.js
import React, { FC } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

// const { loading, permissions } = usePermissions();

export const UserList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton  mutationMode="pessimistic"/> }
        </Datagrid>
      </List>
    </>
  )
};
