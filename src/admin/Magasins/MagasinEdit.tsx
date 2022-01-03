import React, { FC } from 'react';
import { NumberInput } from 'react-admin';
import {
  Edit,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { SaveButton } from 'react-admin';

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
export const MagasinEdit: FC = (props) => (
  <Edit {...props} toolbar={<CustomToolbar />}>
    <SimpleForm>
      <TextInput disabled source="id" variant="outlined" />
      <TextInput source="name" variant="outlined" />
      <NumberInput source="montant" variant="outlined"  />
 
    </SimpleForm>
  </Edit>
);
