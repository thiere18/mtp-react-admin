// in src/users.js
import React, { FC } from 'react';
import { NumberField } from 'react-admin';
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

export const DepenseList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="motif" />
          <NumberField source="montant" />
           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton  mutationMode="pessimistic"/> }
        </Datagrid>
      </List>
    </>
  )
};
