"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
const globalContext_1 = require("./context/globalContext");
require("semantic-ui-css/semantic.min.css");
require("./App.css");
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const ResourcesPage_1 = __importDefault(require("./pages/ResourcesPage"));
const customMenu_1 = __importDefault(require("./components/customMenu"));
function App() {
    return (react_1.default.createElement(globalContext_1.GlobalProvider, null,
        react_1.default.createElement("div", { className: "App spacing-top" },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(semantic_ui_react_1.Grid, null,
                    react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 3 },
                        react_1.default.createElement(customMenu_1.default, null)),
                    react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 11 },
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: HomePage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/resources", component: ResourcesPage_1.default }))))))));
}
exports.default = App;
