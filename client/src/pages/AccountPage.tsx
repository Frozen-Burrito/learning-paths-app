import React from "react";   
import { Container, Header, Icon } from 'semantic-ui-react';

function HomePage() {

    return (
        <Container>
            <Header as="h1" icon textAlign="center">
                <Icon name="user" />
                <Header.Content>
                    Connect With Learners
                    <Header.Subheader>Save learning paths, create your own or share them with other people.</Header.Subheader>
                </Header.Content>
            </Header>
        </Container>
    );
}

export default HomePage;