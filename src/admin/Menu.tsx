import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import { usePermissions } from 'react-admin';

export const Menus: React.FC = (props) => {
    const { permissions } = usePermissions();
return(
    <Menu {...props}>
        
        {permissions === 'admin' &&
            <>
                <DashboardMenuItem />
                <MenuItemLink to="/users" primaryText="Utilisateur" leftIcon={<PeopleIcon />} />
                <MenuItemLink to="/roles" primaryText="Roles" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/categories" primaryText="Categories" leftIcon={<ChatBubbleIcon />} />
                <MenuItemLink to="/depots" primaryText="Depots" leftIcon={<PeopleIcon />} />
                <MenuItemLink to="/containers" primaryText="Conteneurs" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/invoices" primaryText="Factures" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/products" primaryText="Produits" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/depenses" primaryText="Depenses" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/clients" primaryText="Clients" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/magasins" primaryText="Magasins" leftIcon={<LabelIcon />} />
            </>
        },
              {permissions === 'normal' &&
            <>
                <DashboardMenuItem />
                {/* <MenuItemLink to="/users" primaryText="Utilisateur" leftIcon={<PeopleIcon />} /> */}
                {/* <MenuItemLink to="/roles" primaryText="Roles" leftIcon={<LabelIcon />} /> */}
                <MenuItemLink to="/categories" primaryText="Categories" leftIcon={<ChatBubbleIcon />} />
                <MenuItemLink to="/depots" primaryText="Depots" leftIcon={<PeopleIcon />} />
                <MenuItemLink to="/containers" primaryText="Conteneurs" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/invoices" primaryText="Factures" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/products" primaryText="Produits" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/depenses" primaryText="Depenses" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/clients" primaryText="Clients" leftIcon={<LabelIcon />} />
                <MenuItemLink to="/magasins" primaryText="Magasins" leftIcon={<LabelIcon />} />
            </>
        }
    </Menu>
    
)};