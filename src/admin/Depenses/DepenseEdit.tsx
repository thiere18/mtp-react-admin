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
import { NumberInput } from 'react-admin';
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
export const DepenseEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput disabled source="id" variant="outlined" />
      <TextInput source="motif"  variant="outlined" />
      <NumberInput source="montant"  variant="outlined" />
      {/* <TextInput source="name"  variant="outlined" /> */}
      <ReferenceInput source="magasin_id" reference="magasins" variant="outlined" >
               <SelectInput optionText="name" optionValue="id"  variant="outlined" />
        </ReferenceInput>
    </SimpleForm>
  </Edit>
);
