import { Menus } from './Menu';

import * as React from 'react';
import { FC } from 'react';
import { Layout } from 'react-admin';

export const Layouts: FC= (props) => <Layout {...props} menu={Menus} />;