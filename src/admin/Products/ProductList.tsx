// in src/users.js
import React, { FC } from 'react';

import { TextInput } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { ReferenceField } from 'react-admin';

// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  EditButton,

} from 'react-admin';

// const { loading, permissions } = usePermissions();

export const ProductList: FC = (props) => {
  const { permissions } = usePermissions();
  const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
  ];
  const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>

    </div>
);
  return (
    <>
      <List aside={<Aside/>} filters={postFilters} {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
                  <TextField source="reference" />
                  <TextField source="designation" />
                  <TextField source="prix_magasin" label="prix magasin" />
                  <TextField source="quantity_left" label="Qté" />
                  <ReferenceField label="Container" source="container_id" reference="containers">
                <TextField source="reference" />
            </ReferenceField>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton basePath="/containers" mutationMode="pessimistic"/> }
        </Datagrid>
      </List>
    </>
  )
};
