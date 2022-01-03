import React, { FC } from 'react';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const UserShow: FC = (props) => {
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
            <TextField label="Id" source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <DateField source="create_at" />
            </Tab>
            <Tab label="invoices" >
            </Tab>
            <Tab label="permissions" >
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};