import React, { FC } from 'react';
import { Datagrid } from 'react-admin';
import { ArrayField } from 'react-admin';

import { DateField } from 'react-admin';


import { Show, TextField ,NumberField, ChipField} from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const ContainerShow: FC = (props) => {
  console.log(props);

  return (
    <>
<Show {...props}>

        <TabbedShowLayout>
            <Tab label="summary">
            <ChipField label="Id" source="id" />
            <TextField source="reference" label="Reference"/>
            <NumberField source="prix_achat" label="prix achat" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="prix_transport" label="prix transport" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="charge_local" label="charge local" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="dechargement" label="dechargement" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }} />
            <NumberField source="frais_voyage" label="frais de voyage" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/> 
                      <NumberField source="total" label="Total" /> 
                      <DateField source="created_at" />
        
            </Tab>
                  <Tab label="Products" >

            <ArrayField source="products">
            <Datagrid >
      <TextField source="id" label="Id" />
      <TextField source="reference" label="Reference" />
      <TextField source="designation" label="Designation" />
      <NumberField source="prix_en_gros" label="prix en gros" />
      <NumberField source="prix_magasin" label="prix en magasin" />
      <TextField source="quantity_left" label="Qté" />
    </Datagrid>
</ArrayField>
            </Tab>
   
        </TabbedShowLayout>

    </Show>

    </>
  )
};