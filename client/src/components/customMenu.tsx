import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function CustomMenu() {
    enum MenuItems {
        HOME = 'home',
        RESOURCES = 'resources',
        PATHS = 'paths',
        ACCOUNT = 'account'
    };

    const [ activeItem, setActiveItem ] = useState(MenuItems.HOME);

    const handleItemClick = (e: any, { name }: any) => setActiveItem(name);
    return (
        <Menu pointing secondary vertical>
            <Menu.Item
                name={MenuItems.HOME}
                active={activeItem === MenuItems.HOME}
                onClick={handleItemClick}
                as={Link}
                to="/"
            />
            <Menu.Item
                name={MenuItems.PATHS}
                active={activeItem === MenuItems.PATHS}
                onClick={handleItemClick}
                as={Link}
                to="/paths"
            />
            <Menu.Item
                name={MenuItems.RESOURCES}
                active={activeItem === MenuItems.RESOURCES}
                onClick={handleItemClick}
                as={Link}
                to="/resources"
            />
            <Menu.Item
                name={MenuItems.ACCOUNT}
                active={activeItem === MenuItems.ACCOUNT}
                onClick={handleItemClick}
                as={Link}
                to="/account"
            />
        </Menu>
    );
}