import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout.js';

const HomePage = () => {
    return (
        <Layout>
            <p>
                <Link to="/Login">Navigate to Login</Link>
            </p>
        </Layout>
    );
};

export default HomePage;
