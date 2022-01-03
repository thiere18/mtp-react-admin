import React, { FC } from 'react';
import { ArrayField } from 'react-admin';
import { Datagrid } from 'react-admin';
import { TextInput } from 'react-admin';
import { DateField } from 'react-admin';


import { Show, TextField } from 'react-admin';
import { TabbedShowLayout } from 'react-admin';
import { Tab } from 'react-admin';


export const ClientShow: FC = (props) => {
  console.log(props);

  return (
    <>
<Show {...props}>

      <TabbedShowLayout>
            <Tab label="summary">
            <TextField label="Id" source="id" />
            <TextField source="name" /> 
            <TextField source="phone" /> 

             <DateField source="created_at" label="Date" /> 

            </Tab>
          <Tab label="Dettes" >
          <ArrayField source="dettes" fieldKey="id" >
    <Datagrid rowClick="show" >
        {/* <TextField source="designation" /> */}
                {/* <TextField source="id" />
                <TextField source="reference" />
                <TextInput source="reference" />
                <TextInput source="reference" />
                <TextInput source="reference" />
                <TextInput source="reference" /> */}

        {/* <TextField source="prix_magasin" /> */}
 </Datagrid>
              
</ArrayField>
            </Tab>
        </TabbedShowLayout>

    </Show>

    </>
  )
};