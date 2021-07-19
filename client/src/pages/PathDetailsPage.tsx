import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Icon, Divider, Loader, Comment, Breadcrumb } from "semantic-ui-react";

import { Step, Resource } from '../../../index';
import { State } from '../context/rootReducer';
import { GlobalContext } from "../context/globalContext";
import CustomAccordion, { AccordionData } from "../components/customAccordion";

function PathDetailsPage(props: any) {

    const pathId = props.match.params.pathId;
    const { isLoading, paths, getPaths } = useContext(GlobalContext) as State; 

    useEffect(() => {
        if (typeof getPaths !== "undefined") {
            getPaths();
        }
    }, []);

    if (isLoading) return (
        <Container>
            <Loader active inline="centered"/>
        </Container>
    );

    let path = paths && paths.filter(item => item._id == pathId).pop();
    console.log(path);

    if (!path) return (
        <Container>
            <h1>Something Went Wrong.</h1>
        </Container>
    );

    const stepAccordion = path.steps.map(step => {
        const item: AccordionData = {
            title: step.title,
            content: step.description,
        };
        return item;
    });

    const resourceAccordion = path.resources.map(resource => {
        const item: AccordionData = {
            title: resource.name,
            content: resource.resourceUrl
        };
        return item;
    });

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Section link as={Link} to="/paths">Learning Paths</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{path.title}</Breadcrumb.Section>
            </Breadcrumb>

            <Header as="h2">
                <Header.Content>
                    {path.title}
                    <Header.Subheader>This is a short description of the learning path</Header.Subheader>
                </Header.Content>
            </Header>

            <Comment.Group>
                <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                    <Comment.Content>
                        <Comment.Author>Some User</Comment.Author>
                        <Comment.Metadata>
                            <div>2 days ago</div>
                        </Comment.Metadata>
                    </Comment.Content>
                </Comment>
            </Comment.Group>

            <Divider />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis facere vero mollitia officiis porro deleniti. Neque, inventore illum dolorum nulla soluta necessitatibus rem consequatur quas esse nobis placeat natus!</p>

            <Header as="h3">
                <Icon name="compass" />
                <Header.Content>
                    Steps
                    <Header.Subheader>Mastery: 0 / 50</Header.Subheader>
                </Header.Content>
            </Header>
            <CustomAccordion data={stepAccordion}/>

            <Header as="h3">
                <Icon name="book" />
                <Header.Content>
                    Resources
                </Header.Content>
            </Header>
            <CustomAccordion data={resourceAccordion}/>
        </Container>
    );  
}

export default PathDetailsPage;