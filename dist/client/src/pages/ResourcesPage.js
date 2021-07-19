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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const globalContext_1 = require("../context/globalContext");
const semantic_ui_react_1 = require("semantic-ui-react");
const listItem_1 = __importDefault(require("../components/listItem"));
function HomePage() {
    const { isLoading, resources, getResources } = react_1.useContext(globalContext_1.GlobalContext);
    react_1.useEffect(() => {
        if (typeof getResources !== "undefined") {
            getResources();
            console.log(resources);
        }
    }, []);
    const resourceAsListItem = (resource) => {
        let item = {
            header: resource.name,
            author: 'Some User',
            description: 'Lorem ipsum dolor siq amet blah blah blah blah.',
            action: 'See Online',
            onlineUrl: resource.resourceUrl,
        };
        return item;
    };
    const resourceItems = resources && resources.map((resource) => (react_1.default.createElement(listItem_1.default, { item: resourceAsListItem(resource), key: resource._id })));
    return (react_1.default.createElement(semantic_ui_react_1.Container, null,
        react_1.default.createElement(semantic_ui_react_1.Header, { as: "h2" },
            react_1.default.createElement(semantic_ui_react_1.Icon, { name: "box" }),
            react_1.default.createElement(semantic_ui_react_1.Header.Content, null,
                "Resources",
                react_1.default.createElement(semantic_ui_react_1.Header.Subheader, null, "See useful learning resources"))),
        react_1.default.createElement(semantic_ui_react_1.Divider, null),
        react_1.default.createElement(semantic_ui_react_1.Item.Group, { divided: true }, isLoading ? (react_1.default.createElement(semantic_ui_react_1.Loader, { active: true, inline: "centered" })) : (react_1.default.createElement(semantic_ui_react_1.Transition.Group, null, resourceItems)))));
}
exports.default = HomePage;
