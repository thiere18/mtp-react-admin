import React, { FC } from 'react';
import { ArrayInput } from 'react-admin';
import { BooleanInput } from 'react-admin';
import { SelectInput } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import { SimpleFormIterator } from 'react-admin';
import { NumberInput } from 'react-admin';
import { CompactForm, RaBox, RaGrid} from 'ra-compact-ui';

import {
  Edit,
  TextInput,

} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from 'react-admin';
import { DeleteButton } from 'react-admin';
import { SaveButton } from 'react-admin';
import { TextField } from 'react-admin';

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

export
  const InvoiceEdit: FC = (props) => (
  <Edit {...props} toolbar={<CustomToolbar />} >
      <CompactForm layoutComponents={[RaBox, RaGrid]} >
        {/* <SimpleForm> */}
        <TextField disabled source="id" variant="outlined" />
        <RaBox display="flex" justifyContent="space-around" >
          <TextInput source="reference" variant="outlined" />
          <NumberInput source="value_net" label="total" variant="outlined" />
          {/* <NumberInput source="value_net" label="total"  variant="outlined"/> */}

        </RaBox>
        <RaBox display="flex" justifyContent="space-around" >

            <NumberInput source="actual_payment" label="Payment actuel"  variant="outlined"/>
            <ReferenceInput source="magasin_id" reference="magasins" variant="outlined">
               <SelectInput optionText="name" optionValue="id"  />
          </ReferenceInput>
          <BooleanInput source="paid" label="paid" variant="outlined" />

          </RaBox>

        <ArrayInput source="items">

            <SimpleFormIterator>
              
            <RaBox display="flex"  justifyContent="space-around" >

                {/* <TextInput source="product"  label="product" variant="outlined"/> */}
                    {/* <NumberInput source="quantity" label="Quantity"  variant="outlined"/> */}
                {/* <NumberInput source="price" label="price" variant="outlined" /> */}
                <ReferenceInput source="designation" reference="products" variant="outlined" >
            <SelectInput optionText="designation" optionValue="designation"  variant="outlined" />
        </ReferenceInput>

              <NumberInput source="quantity" label="Quantity" variant="outlined" />
              </RaBox>

                </SimpleFormIterator>

            </ArrayInput>
        {/* </SimpleForm> */}
        </CompactForm>
  </Edit>
);
