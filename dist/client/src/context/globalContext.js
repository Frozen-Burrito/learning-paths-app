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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalProvider = exports.GlobalContext = void 0;
const react_1 = __importStar(require("react"));
const api = __importStar(require("../api"));
const actionTypes_1 = require("./actionTypes");
const rootReducer_1 = __importDefault(require("./rootReducer"));
const initialState = {
    isLoading: true,
    paths: [],
    resources: [],
    error: ''
};
exports.GlobalContext = react_1.createContext({});
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = react_1.useReducer(rootReducer_1.default, initialState);
    function getPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.getPaths();
                const action = {
                    type: actionTypes_1.ActionType.GET_PATHS,
                    data: response.data.data
                };
                dispatch(action);
            }
            catch (error) {
                const errorAction = {
                    type: actionTypes_1.ActionType.ERROR,
                    data: error.response.data.error
                };
                dispatch(errorAction);
            }
        });
    }
    function createPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.createPath(path);
                const action = {
                    type: actionTypes_1.ActionType.CREATE_PATH,
                    data: response.data
                };
                dispatch(action);
            }
            catch (error) {
                const errorAction = {
                    type: actionTypes_1.ActionType.ERROR,
                    data: error.response.data.error
                };
                dispatch(errorAction);
            }
        });
    }
    function getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.getResources();
                const action = {
                    type: actionTypes_1.ActionType.GET_RESOURCES,
                    data: response.data.data
                };
                dispatch(action);
            }
            catch (error) {
                const errorAction = {
                    type: actionTypes_1.ActionType.ERROR,
                    data: error.response.data.error
                };
                dispatch(errorAction);
            }
        });
    }
    return (react_1.default.createElement(exports.GlobalContext.Provider, { value: {
            isLoading: state.isLoading,
            paths: state.paths,
            resources: state.resources,
            error: state.error,
            getPaths,
            createPath,
            getResources,
        } }, children));
};
exports.GlobalProvider = GlobalProvider;
