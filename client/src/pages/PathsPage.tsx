import React, { useContext, useEffect } from "react";   
import { GlobalContext } from '../context/globalContext';
import { State } from '../context/rootReducer';
import { Container, Header, Icon, Divider, Item, Transition, Loader } from 'semantic-ui-react';

import ListItem, { ItemData } from '../components/listItem';
import { Path } from "../../../index";

function HomePage() {

    const { isLoading, paths, getPaths } = useContext(GlobalContext) as State;

    useEffect(() => {
        if (typeof getPaths !== "undefined") {
            getPaths();
            console.log(paths);
        }
    }, []);

    const pathAsListItem = (path: Path): ItemData => {
        let item: ItemData = {
            header: path.title,
            author: 'Some User',
            description: 'Lorem ipsum dolor siq amet blah blah blah blah.',
            action: 'See Online',
            itemPage: `/paths/${path._id}`
        }
        return item;
    }

    const pathItems = paths && paths.map((path) => (
        <ListItem item={pathAsListItem(path)} key={path._id}/>
    ));

    return (
        <Container>
            <Header as="h2">
                <Icon name="box" />
                <Header.Content>
                    Learning Paths
                    <Header.Subheader>Find helpful learning paths and resources.</Header.Subheader>
                </Header.Content>
            </Header>

            <Divider />

            <Item.Group divided>
                { isLoading ? (
                    <Loader active inline="centered"/>
                ) : (
                    <Transition.Group>
                        { pathItems }
                    </Transition.Group>
                )}
            </Item.Group>
        </Container>
    );
}

export default HomePage;