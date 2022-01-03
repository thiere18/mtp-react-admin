import React, { FC } from 'react';
import { NumberInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
required
} from 'react-admin';
export const MagasinCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} variant="outlined" />
      <NumberInput source="montant" validate={[required()]} variant="outlined" />
    </SimpleForm>
  </Create>
);
