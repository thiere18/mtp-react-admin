import React, { FC } from 'react';
import { NumberInput, required, ReferenceInput, SelectInput, Create,TextInput} from 'react-admin';
import { CompactForm, RaBox, RaGrid,} from 'ra-compact-ui';


export const ProductCreate: FC = (props) => (
  <Create {...props}>
    <CompactForm layoutComponents={[RaBox, RaGrid]}>
    <RaBox display="flex" justifyContent="space-around" >

            <TextInput source="reference" validate={[required()]} variant="outlined"/>
            <TextInput source="designation" variant="outlined" validate={[required()]} />
        <NumberInput source="prix_achat" label="prix achat" validate={[required()]} variant="outlined" />
        <NumberInput source="frais" label="frais" validate={[required()]} variant="outlined" />

      </RaBox>
      <RaBox display="flex" justifyContent="space-around" >
            <NumberInput source="prix_en_gros" label="prix en gros" validate={[required()]} variant="outlined" />
        <NumberInput source="prix_magasin" label="prix magasin" validate={[required()]} variant="outlined" />
        <NumberInput source="quantity_per_carton" label="quantité par carton" validate={[required()]} variant="outlined" />
            <NumberInput source="quantity_init" label="quantité initiale" validate={[required()]} variant="outlined" />
      </RaBox>
      <RaBox display="flex" justifyContent="space-around" >
      
            <ReferenceInput source="category_id" reference="categories" variant="outlined" >
               <SelectInput optionText="name" optionValue="id" validate={[required()]} variant="outlined" />
        </ReferenceInput>
        <ReferenceInput source="container_id" reference="containers"validate={[required()]} variant="outlined">
               <SelectInput optionText="reference"optionValue="id"  />
           </ReferenceInput>
           <ReferenceInput source="depot_id" reference="depots" validate={[required()]} variant="outlined">
               <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
      </RaBox>

      </CompactForm>
  </Create>
);
