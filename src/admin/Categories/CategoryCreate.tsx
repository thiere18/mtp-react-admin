import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
required
} from 'react-admin';
export const CategoryCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} variant="outlined" />
    </SimpleForm>
  </Create>
);
