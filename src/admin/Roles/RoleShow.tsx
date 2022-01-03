import React, { FC } from 'react';
import { ArrayField } from 'react-admin';
import { NumberField } from 'react-admin';
import { Datagrid } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const RoleShow: FC = (props) => {
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
          <Tab label="users" >
          <ArrayField source="users" fieldKey="id" >
          <Datagrid >
      <TextField source="id" label="Id" />
      <TextField source="username" label="Username" />
      <TextField source="email" label="Email" />
    </Datagrid>
              
</ArrayField>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};