import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

export interface AccordionData {
    title: string;
    content: string;
}

function CustomAccordion(props: { data: Array<AccordionData> }) {

    const { data } = props;
    const [ activeIndex, setActiveIndex ] = useState(0);

    const handleClick = (index: number) => {
        const newIndex = activeIndex == index ? -1 : index;

        setActiveIndex(newIndex);
    }

    const items = data && data.map((item, i) => (
        <>
            <Accordion.Title
                active={activeIndex == i}
                index={i}
                onClick={() => handleClick(i)}>
                <Icon name="dropdown" />
                {item.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex == i}>
                <p>{item.content}</p>
            </Accordion.Content>
        </>
    ));

    return (
        <Accordion fluid styled>
            { items }
        </Accordion>
    );
}

export default CustomAccordion;