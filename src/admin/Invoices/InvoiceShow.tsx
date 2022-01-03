import React, { FC } from 'react';
import { ArrayField } from 'react-admin';
import { NumberField } from 'react-admin';
import { BooleanField } from 'react-admin';
import { ChipField } from 'react-admin';
import { Datagrid } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const InvoiceShow: FC = (props) => {
  console.log(props);
  const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
    </div>
);
  return (
    <>
<Show {...props} aside={<Aside/>}>

  <TabbedShowLayout>
      <Tab label="summary">
            <ChipField label="Id" source="id" />
            <TextField source="reference" label="Reference"/>
            <NumberField source="prix_achat" label="prix achat" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="value_net" label="value net" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <NumberField source="actual_payment" label="actual payment" locales="fr-FR" options={{ style: 'currency', currency: 'XOF' }}/>
            <BooleanField source="paid" />
        </Tab>
          <Tab label="items" >
            <ArrayField source="items">
              <Datagrid >
                <TextField source="product" label="produit" />
                <TextField source="quantity" label="quantity" />
                <TextField source="price" label="prix unitaire" />
              </Datagrid>
            </ArrayField>
          </Tab>
    </TabbedShowLayout>
</Show>
    </>
  )
};