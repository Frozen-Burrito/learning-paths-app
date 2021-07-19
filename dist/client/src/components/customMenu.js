"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
function CustomMenu() {
    let MenuItems;
    (function (MenuItems) {
        MenuItems["HOME"] = "home";
        MenuItems["RESOURCES"] = "resources";
        MenuItems["BOOKMARKS"] = "bookmarks";
        MenuItems["ACCOUNT"] = "account";
    })(MenuItems || (MenuItems = {}));
    ;
    const [activeItem, setActiveItem] = react_1.useState(MenuItems.HOME);
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { pointing: true, secondary: true, vertical: true },
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { name: MenuItems.HOME, active: activeItem === MenuItems.HOME, onClick: handleItemClick, as: react_router_dom_1.Link, to: "/" }),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { name: MenuItems.RESOURCES, active: activeItem === MenuItems.RESOURCES, onClick: handleItemClick, as: react_router_dom_1.Link, to: "/resources" }),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { name: MenuItems.BOOKMARKS, active: activeItem === MenuItems.BOOKMARKS, onClick: handleItemClick, as: react_router_dom_1.Link, to: "/bookmarks" }),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { name: MenuItems.ACCOUNT, active: activeItem === MenuItems.ACCOUNT, onClick: handleItemClick, as: react_router_dom_1.Link, to: "/account" })));
}
exports.default = CustomMenu;
