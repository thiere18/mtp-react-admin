import React, { FC } from 'react';
import { ArrayField } from 'react-admin';
import { NumberField } from 'react-admin';
import { Datagrid } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const CategoryShow: FC = (props) => {
  console.log(props);

  return (
    <>
<Show {...props}>

      <TabbedShowLayout>
            <Tab label="summary">
            <TextField label="Id" source="id" />
            <TextField source="name" />
            <DateField source="created_at" />

            </Tab>
          <Tab label="Products" >
          <ArrayField source="products" fieldKey="id" >
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