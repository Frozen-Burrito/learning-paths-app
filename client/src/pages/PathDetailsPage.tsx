import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Icon, Divider, Loader, Comment, Breadcrumb } from "semantic-ui-react";

import { Step, Resource } from '../../../index';
import { State } from '../context/rootReducer';
import { GlobalContext } from "../context/globalContext";
import CustomAccordion, { AccordionData } from "../components/customAccordion";

function PathDetailsPage(props: any) {

    const pathId = props.match.params.pathId;
    const { isLoading, paths, getPaths, resources, getResources } = useContext(GlobalContext) as State; 

    useEffect(() => {
        if (typeof getPaths !== "undefined") {
            getPaths();
        }

        if (typeof getResources !== "undefined") {
            getResources();
        }
    }, []);

    if (isLoading) return (
        <Container>
            <Loader active inline="centered"/>
        </Container>
    );

    let path = paths && paths.filter(item => item._id == pathId).pop();

    if (!path) return (
        <Container>
            <h1>Something Went Wrong.</h1>
        </Container>
    );

    let pathResources: Array<Resource | undefined> = path.resources.map(resource => {
        return resources.find(item => item._id == resource)
    });

    const stepAccordion = path.steps.map(step => {
        const item: AccordionData = {
            _id: step._id,
            title: step.title,
            content: step.description,
        };
        return item;
    });

    const stepExp: Array<number> = path.steps.map(step => step.score | 0);
    const totalPathExp: number = stepExp.reduce((total, current) => total + current);

    const resourceAccordion = pathResources.map(resource => {
        let item: AccordionData = {
            _id: '',
            title: '',
            content: '',
            labels: [],
            links: []
        };

        if (typeof resource !== "undefined") {
            let res = resource as Resource;
            item = {
                _id: res._id,
                title: res.name,
                content: res.description,
                labels: res.labels,
                links: [res.resourceUrl],
            } 
            
            return item;
        }
        
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
                    <Header.Subheader>{path.shortDescription}</Header.Subheader>
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

            <p>{path.description}</p>

            <Header as="h3">
                <Icon name="compass" />
                <Header.Content>
                    Steps
                    <Header.Subheader>Path Experience: {totalPathExp}</Header.Subheader>
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