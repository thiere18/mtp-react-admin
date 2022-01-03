import React, { FC } from 'react';
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
export const DepotEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput disabled source="id" variant="outlined" />
      <TextInput source="name" variant="outlined" />
    </SimpleForm>
  </Edit>
);
