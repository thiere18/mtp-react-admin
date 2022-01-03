import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,

} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { SaveButton } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import { SelectInput } from 'react-admin';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const CustomToolbar  : FC= (props) => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteButton mutationMode="pessimistic" />
    </Toolbar>
);
export const UserEdit: FC = (props) => (
  <Edit {...props} toolbar={<CustomToolbar />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <PasswordInput source="password" />
      <ReferenceInput source="role_id" reference="roles" variant="outlined">
               <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
    </SimpleForm>
  </Edit>
);
