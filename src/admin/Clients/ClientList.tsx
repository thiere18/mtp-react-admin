// in src/users.js
import React, { FC } from 'react';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

// const { loading, permissions } = usePermissions();

export const ClientList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" variant="outlined" />
      <TextField source="phone"  variant="outlined" />
           <ShowButton/>
          <EditButton />
           <DeleteButton  mutationMode="pessimistic"/> 
        </Datagrid>
      </List>
    </>
  )
};
