"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
function ResourceItem(props) {
    const item = props.item;
    const defaultImage = "https://react.semantic-ui.com/images/wireframe/image.png";
    return (react_1.default.createElement(semantic_ui_react_1.Item, null,
        react_1.default.createElement(semantic_ui_react_1.Item.Image, { src: item.imageUrl ? item.imageUrl : defaultImage }),
        react_1.default.createElement(semantic_ui_react_1.Item.Content, null,
            react_1.default.createElement(semantic_ui_react_1.Item.Header, { as: react_router_dom_1.Link, to: item.itemPage }, item.header),
            react_1.default.createElement(semantic_ui_react_1.Item.Meta, null, item.author),
            react_1.default.createElement(semantic_ui_react_1.Item.Description, null, item.description),
            react_1.default.createElement(semantic_ui_react_1.Item.Extra, null,
                react_1.default.createElement(semantic_ui_react_1.Button, { primary: true, floated: "right", as: react_router_dom_1.Link, to: item.onlineUrl },
                    react_1.default.createElement(semantic_ui_react_1.Icon, { name: "linkify" }),
                    item.action)))));
}
exports.default = ResourceItem;
