import React, { FC } from 'react';
import { ReferenceField } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField ,NumberField, ChipField} from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const ProductShow: FC = (props) => {
  console.log(props);
  const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>

    </div>
);
  return (
    <>
<Show {...props} aside={<Aside/>} >

        <TabbedShowLayout>
            <Tab label="summary">
            <ChipField label="Id" source="id" />
            <TextField source="reference" label="Reference" />
            <TextField source="designation" label="designatio"/>
            <NumberField source="prix_achat" label="prix achat" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="frais" label="frais" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} />
            <NumberField source="prix_revient" label="Prix revient" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} /> 
            <NumberField source="prix_en_gros" label="Prix en gros" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} /> 
            <NumberField source="prix_magasin" label="Prix magasin" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/> 
            <NumberField source="quantity_per_carton" label="quantité par carton" className="red" /> 
            <NumberField source="quantity_init" label="quantité initiale" className="red" /> 
            <NumberField source="quantity_left" label="quantité restante" className="red" /> 
            <NumberField source="container_id" label="quantité res" className="red" /> 

            <ChipField className="green" source="category.name" /> 
            <DateField source="created_at" label="Date" className="red" /> 
            </Tab>
          <Tab label="Products" >
          <ReferenceField label="Container" source="container_id" reference="containers" >
                <TextField source="reference" />
            </ReferenceField>
            <ReferenceField label="Category" source="category_id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Depot" source="depot_id" reference="depots" >
                <TextField source="name" />
            </ReferenceField>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};