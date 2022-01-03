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

export const ContainerList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
            <TextField source="reference" />

           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton basePath="/containers" mutationMode="pessimistic"/> }
        </Datagrid>
      </List>
    </>
  )
};
