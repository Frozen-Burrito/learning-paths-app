import React, { useContext, useEffect } from "react";   
import { GlobalContext } from '../context/globalContext';
import { State } from '../context/rootReducer';
import { Container, Header, Icon, Divider, Item, Loader, Transition } from 'semantic-ui-react';

import ListItem, { ItemData } from '../components/listItem';
import { Resource } from "../../../index";

function HomePage() {

    const { isLoading, resources, getResources } = useContext(GlobalContext) as State;

    useEffect(() => {
        if (typeof getResources !== "undefined") {
            getResources();
            console.log(resources);
        }
    }, []);

    const resourceAsListItem = (resource: Resource): ItemData => {
        let item: ItemData = {
            header: resource.name,
            author: 'Some User',
            description: 'Lorem ipsum dolor siq amet blah blah blah blah.',
            action: 'See Online',
            onlineUrl: resource.resourceUrl,
        }
        return item;
    }

    const resourceItems = resources && resources.map((resource) => (
        <ListItem item={resourceAsListItem(resource)} key={resource._id}/>
    ));

    return (
        <Container>
            <Header as="h2">
                <Icon name="box" />
                <Header.Content>
                    Resources
                    <Header.Subheader>See useful learning resources</Header.Subheader>
                </Header.Content>
            </Header>

            <Divider />

            <Item.Group divided>
                { isLoading ? (
                    <Loader active inline="centered"/>
                ) : (
                    <Transition.Group>
                        { resourceItems }
                    </Transition.Group>
                )}
            </Item.Group>
        </Container>
    );
}

export default HomePage;