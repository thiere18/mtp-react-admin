// in src/users.js
import React, { FC } from 'react';
import { DateField } from 'react-admin';
import { NumberField } from 'react-admin';
// import { usePermissions } from 'react-admin';
import { usePermissions } from 'react-admin';

import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DeleteButton,
    ShowButton,
} from 'react-admin';

// const { loading, permissions } = usePermissions();

export const InvoiceList: FC = (props) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List {...props}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="reference" />
          <NumberField source="value_net" label="total"/>
          <NumberField source="payment_due" label="payment due" />
          <BooleanField source="paid" label="status"/>
          <DateField source="created_at" label="date"/>


           <ShowButton/>
          {permissions==='admin'&& <EditButton />}
          {permissions === 'admin' && <DeleteButton basePath="/invoices" mutationMode="pessimistic" /> }
        </Datagrid>
      </List>
    </>
  )
};
