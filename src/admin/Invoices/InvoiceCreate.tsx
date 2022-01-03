import React, { FC } from 'react';
import { ArrayInput } from 'react-admin';
import { SelectInput } from 'react-admin';
import { SimpleFormIterator } from 'react-admin';
import { NumberInput } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  required
} from 'react-admin';


export const InvoiceCreate: FC = (props) => (
  <Create {...props}>

    <SimpleForm>
            <TextInput source="reference" validate={[required()]} variant="outlined" />
            <NumberInput source="value_net" label="total" validate={[required()]} variant="outlined" />
            <NumberInput source="actual_payment" label="Payment actuel" validate={[required()]} variant="outlined" />
            <ReferenceInput source="magasin_id" reference="magasins" variant="outlined">
               <SelectInput optionText="name" optionValue="id" validate={[required()]} variant="outlined" />
      </ReferenceInput>
          <ArrayInput source="items" display="inline-block">
                <SimpleFormIterator>
                <TextInput source="product" label="product" variant="outlined"/>
                    <NumberInput source="quantity" label="Quantity" variant="outlined"/>
                <NumberInput source="price" label="price" variant="outlined"/>
                </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>

  </Create>
);
