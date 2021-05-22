import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';


const Layout = ({ children }) => {
    return (
        <Container>
            <Link to="/">
                <Header as="h1">
                    Slack-like chat
                </Header>
            </Link>
            {children}
            <Divider />
        </Container>
    );
};

export default Layout;
