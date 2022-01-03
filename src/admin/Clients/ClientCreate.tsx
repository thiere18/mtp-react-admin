import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
required
} from 'react-admin';
export const ClientCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} variant="outlined" />
      <TextInput source="phone" validate={[required()]} variant="outlined" />

    </SimpleForm>
  </Create>
);
