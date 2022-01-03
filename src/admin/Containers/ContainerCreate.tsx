import React, { FC } from 'react';
import { NumberInput ,required } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput, 
} from 'react-admin';

export const ContainerCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm noValidate alignItems="center">
            <TextInput source="reference" validate={[required()]}variant="outlined" />
            <TextInput source="prix_achat" label="prix achat" validate={[required()]} variant="outlined"/>
            <NumberInput source="prix_transport" validate={[required()]} variant="outlined" />
            <NumberInput source="charge_local" validate={[required()]} variant="outlined" />
            <NumberInput source="dechargement" validate={[required()]} variant="outlined" />
            <NumberInput source="frais_voyage" validate={[required()]}variant="outlined" /> 
            <NumberInput source="frais_dedouanement" validate={[required()]} variant="outlined" /> 

    </SimpleForm>
  </Create>
);
