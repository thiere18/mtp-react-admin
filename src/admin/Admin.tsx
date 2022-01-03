import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import { Layouts }  from './Layout';
import Dashboard from './Dashboard';
import {BACKEND_URL} from '../config'

import { UserList, UserEdit, UserCreate, UserShow} from './Users';
import { CategoryList, CategoryEdit, CategoryCreate, CategoryShow } from './Categories';
import {DepotList,DepotEdit,DepotCreate,DepotShow} from './Depots'
import {MagasinList,MagasinEdit,MagasinCreate,MagasinShow} from './Magasins'
import { ContainerCreate, ContainerEdit, ContainerShow, ContainerList } from './Containers';
import { ProductCreate, ProductEdit, ProductShow, ProductList } from './Products';
import { InvoiceCreate, InvoiceEdit, InvoiceShow, InvoiceList } from './Invoices';
import { DepenseCreate, DepenseEdit, DepenseShow, DepenseList } from './Depenses';
import { RoleCreate, RoleEdit, RoleShow, RoleList } from './Roles';

import { ClientCreate, ClientEdit, ClientShow, ClientList } from './Clients';

import { AppBar } from 'react-admin';
import { Box, Typography } from '@mui/material';

const MyAppBar :FC = props => (
    <AppBar {...props}>
        <Box flex="1">
            <Typography variant="h6" id="react-admin-title"></Typography>
        </Box>
    </AppBar>
);

const i18nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

const myTheme = ({
  palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
    ].join(','),
    fontSize: 14,
  },
  overrides: {
      MuiButton: { // override the styles of all instances of this component
          root: { // Name of the rule
              color: 'white', // Some CSS
          },
      },
  },
  
});


const httpClient = (url: any, options: any) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};



const dataProvider = simpleRestProvider(`${BACKEND_URL}/api/v1`, httpClient);
console.log(dataProvider)

export const Admin: FC = () => {
  
  return (
    <ReactAdmin
      title="MTP Application"
      theme={myTheme}
      appBar={MyAppBar}
      layout={Layouts}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      {(permissions: 'admin' | 'normal'| 'restricted') => [
        permissions === 'admin' ? ([
          <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}show={UserShow}/>,
          <Resource name="depots" list={DepotList} edit={DepotEdit} create={DepotCreate} show={DepotShow} />,  
          <Resource name="magasins" list={MagasinList} edit={MagasinEdit} create={MagasinCreate} show={MagasinShow} />,
          <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} show={CategoryShow} />,
          <Resource name="containers" list={ContainerList} edit={ContainerEdit} create={ContainerCreate} show={ContainerShow} />,
          <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductShow} />,
          <Resource name="invoices" list={InvoiceList} edit={InvoiceEdit} create={InvoiceCreate} show={InvoiceShow} />,
          <Resource name="depenses" list={DepenseList} edit={DepenseEdit} create={DepenseCreate} show={DepenseShow} />,
          <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} show={RoleShow} />,
          <Resource name="clients" list={ClientList} edit={ClientEdit} create={ClientCreate} show={ClientShow} />,

        ]
        ) : (
            [
              // <Resource name="users" list={UserList} show={UserShow} />,
              <Resource name="depots" list={DepotList} show={DepotShow} />,
              <Resource name="magasins" list={MagasinList} show={MagasinShow} />,
              <Resource name="categories" list={CategoryList} show={CategoryShow} />,
              <Resource name="containers" list={ContainerList}  show={ContainerShow} />,
              <Resource name="products" list={ProductList}  show={ProductShow} />,
              <Resource name="invoices" list={InvoiceList} show={InvoiceShow} />,
              <Resource name="depenses" list={DepenseList} show={DepenseShow} />,
              <Resource name="clients" list={ClientList} show={ClientShow} />,

            ]
         ),
      ]}
    </ReactAdmin>
    
  );
};
