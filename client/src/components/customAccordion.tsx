import React, { useState } from "react";
import { Accordion, Icon, Label } from "semantic-ui-react";

export interface AccordionData {
    _id: string;
    title: string;
    content: string;
    labels?: Array<string>;
    links?: Array<string>;
}

function CustomAccordion(props: { data: Array<AccordionData> }) {

    const { data } = props;
    const [ activeIndex, setActiveIndex ] = useState(0);

    const handleClick = (index: number) => {
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    }

    const items = data && data.map((item, i) => (
        <div >
            <Accordion.Title
                active={activeIndex === i}
                index={i}
                key={item._id}
                onClick={() => handleClick(i)}>
                <Icon name="dropdown" />
                {item.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i} key={i}>
                <p>{item.content}</p>
                { item.labels && item.labels.map(label => <Label>{label}</Label>)}
                { item.links ? (
                    <div>
                        <Icon name="linkify" />
                        { item.links.map(link => <a href={link}>{link}</a>) }
                    </div>
                ): (<> </>)}
                
            </Accordion.Content>
        </div>
    ));

    return (
        <Accordion fluid styled>
            { items }
        </Accordion>
    );
}

export default CustomAccordion;