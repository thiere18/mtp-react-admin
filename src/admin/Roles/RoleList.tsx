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

export const RoleList: FC = (props) => {

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
           <ShowButton/>
          <EditButton />
          <DeleteButton  mutationMode="pessimistic"/>
        </Datagrid>
      </List>
    </>
  )
};
