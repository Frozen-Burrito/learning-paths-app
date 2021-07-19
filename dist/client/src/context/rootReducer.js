"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("./actionTypes");
function reducer(state, action) {
    switch (action.type) {
        case actionTypes_1.ActionType.GET_PATHS:
            return Object.assign(Object.assign({}, state), { isLoading: false, paths: action.data });
        case actionTypes_1.ActionType.CREATE_PATH:
            return Object.assign(Object.assign({}, state), { isLoading: false, paths: action.data });
        case actionTypes_1.ActionType.GET_RESOURCES:
            return Object.assign(Object.assign({}, state), { isLoading: false, resources: action.data });
        default:
            return state;
    }
}
exports.default = reducer;
