import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './Layout.js';

const NoMatchPage = () => {
    return (
        <Layout>
            <Icon name="minus circle" size="big" />
            <strong>Page not found!</strong>
        </Layout>
    );
};

export default NoMatchPage;
