import React, { FC } from 'react';
import { SelectInput } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required
} from 'react-admin';

export const UserCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" validate={[required()]} variant="outlined" />
      <TextInput source="email"  validate={[required()]} variant="outlined"  />
      <PasswordInput source="password" validate={[required()]} variant="outlined" />
      <ReferenceInput source="role_id" reference="roles" validate={[required()]} variant="outlined">
               <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
    </SimpleForm>
  </Create>
);
