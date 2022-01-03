import React, { FC } from 'react';
import { SelectInput } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import { NumberInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
required
} from 'react-admin';
export const DepenseCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="motif" validate={[required()]} variant="outlined" />
      <NumberInput source="montant" validate={[required()]} variant="outlined" />
      {/* <TextInput source="name" validate={[required()]} variant="outlined" /> */}
      <ReferenceInput source="magasin_id" reference="magasins" variant="outlined" >
               <SelectInput optionText="name" optionValue="id" validate={[required()]} variant="outlined" />
        </ReferenceInput>
    </SimpleForm>
  </Create>
);
