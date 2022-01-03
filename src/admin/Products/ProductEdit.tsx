import React, { FC } from 'react';
import { SelectInput } from 'react-admin';
import { ReferenceInput } from 'react-admin';
import { Edit } from 'react-admin';
import { NumberInput } from 'react-admin';
import {
  TextInput, 
} from 'react-admin';
import { CompactForm, RaBox, RaGrid,} from 'ra-compact-ui';
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
export const ProductEdit: FC = (props) => (
  <Edit {...props} toolbar={<CustomToolbar />} >
    <CompactForm layoutComponents={[RaBox, RaGrid]}>
    <TextInput source="id" disabled />

    <RaBox display="flex" justifyContent="space-around" >

            <TextInput source="reference"  variant="outlined"/>
            <TextInput source="designation" variant="outlined"  />
        <NumberInput source="prix_achat" label="prix achat"  variant="outlined" />
        <NumberInput source="frais" label="frais"  variant="outlined" />

      </RaBox>
      <RaBox display="flex" justifyContent="space-around" >
            <NumberInput source="prix_en_gros" label="prix en gros"  variant="outlined" />
        <NumberInput source="prix_magasin" label="prix magasin"  variant="outlined" />
        <NumberInput source="quantity_per_carton" label="quantité par carton"  variant="outlined" />
            <NumberInput source="quantity_init" label="quantité initiale"  variant="outlined" />
      </RaBox>
      <RaBox display="flex" justifyContent="space-around" >
      
            <ReferenceInput source="category_id" reference="categories" variant="outlined" >
               <SelectInput optionText="name" optionValue="id"  variant="outlined" />
        </ReferenceInput>
        <ReferenceInput source="container_id" reference="containers" variant="outlined">
               <SelectInput optionText="reference"optionValue="id"  />
           </ReferenceInput>
           <ReferenceInput source="depot_id" reference="depots"  variant="outlined">
               <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
      </RaBox>

      </CompactForm>
  </Edit>
);
