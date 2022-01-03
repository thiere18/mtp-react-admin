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
export const ContainerEdit: FC = (props) => (
  <Edit {...props} toolbar={<CustomToolbar />}>
    <SimpleForm>
            <TextInput disabled source="id" variant="outlined"/>
            <TextInput source="reference" variant="outlined"/>
            <NumberInput source="prix-achat" label="prix achat"variant="outlined" />
            <NumberInput source="prix_transport" label="prix transport"variant="outlined" />
            <NumberInput source="charge_local" label="charge local"variant="outlined" />
            <NumberInput source="dechargement" label="dechargement" variant="outlined" />
            <NumberInput source="frais_voyage" label="frais de voyage" variant="outlined"/> 
    </SimpleForm>
  </Edit>
);
