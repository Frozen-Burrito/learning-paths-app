import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label } from 'semantic-ui-react';

export interface ItemData {
    header: string;
    author: string;
    description: string;
    action: string;
    itemPage?: string;
    onlineUrl?: string;
    imageUrl?: string;
    labels?: Array<string>;
}

export default function ResourceItem(props: { item: ItemData }) {

    const item: ItemData = props.item;

    const defaultImage = "https://react.semantic-ui.com/images/wireframe/image.png";

    return (
        <Item>
            <Item.Image src={item.imageUrl ? item.imageUrl : defaultImage}/>

            <Item.Content>
                <Item.Header as={Link} to={item.itemPage || ''}>{item.header}</Item.Header>

                <Item.Meta>
                    {item.author}
                </Item.Meta>

                <Item.Description>{item.description}</Item.Description>
                <Item.Extra>
                    <Button 
                        primary 
                        floated="right"
                        as={Link} to={item.onlineUrl || ''}
                    >
                        <Icon name="linkify" />
                        {item.action}
                    </Button>
                    { item.labels && item.labels.map(label => <Label>{label}</Label>)}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}