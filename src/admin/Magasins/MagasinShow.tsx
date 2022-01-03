import React, { FC } from 'react';
import { DateField } from 'react-admin';
import { NumberField } from 'react-admin';
import { BooleanField } from 'react-admin';
import { ArrayField } from 'react-admin';
import { Datagrid } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const MagasinShow: FC = (props) => {
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
            <TextField label="Id" source="id" />
            <TextField source="name" />
            <TextField source="montant" />
            </Tab>
          <Tab label="depenses" >
          <ArrayField source="depenses">

          <Datagrid >
                <TextField source="id" label="Id" />
                <TextField source="motif" label="motif" />
              <TextField source="montant" label="montant" />
              </Datagrid>
              </ArrayField>
          </Tab>
          <Tab label="Factures" >
          <ArrayField source="invoices">

          <Datagrid >
                <TextField source="id" label="Id" />
                <TextField source="reference" label="référence" />
              <TextField source="value_net" label="totla" />
              <NumberField source="actual_payment" label="payment actuel" />
              <BooleanField source="paid" label="payé" />
              </Datagrid>
              </ArrayField>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};