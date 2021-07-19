import React from "react";   
import { Container, Header, Icon } from 'semantic-ui-react';

function HomePage() {

    return (
        <Container>
            <Header as="h1" icon textAlign="center">
                <Icon name="book" />
                <Header.Content>
                    Learning Journey
                    <Header.Subheader>Find helpful learning paths and resources.</Header.Subheader>
                </Header.Content>
            </Header>
        </Container>
    );
}

export default HomePage;