import React, { FC } from 'react';
import { ArrayField } from 'react-admin';
import { Datagrid } from 'react-admin';
import { ChipField } from 'react-admin';
import { NumberField } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const DepenseShow: FC = (props) => {
  console.log(props);

  return (
    <>
<Show {...props}>

      <TabbedShowLayout>
            <Tab label="summary">
            <TextField label="Id" source="id" />
            <TextField source="motif" />
            <NumberField source="montant" />
            <ChipField source="magasin.name" label="Magasin" />

            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};