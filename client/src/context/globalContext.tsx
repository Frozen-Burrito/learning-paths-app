import React, { createContext, useReducer } from "react";
import { AxiosResponse } from "axios";

import * as api from '../api';
import { Action, ActionType } from './actionTypes';
import rootReducer, { State } from './rootReducer';

const initialState: State = {
    isLoading: true,
    paths: [],
    resources: [],
    error: ''
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: any) => {

    const [ state, dispatch ] = useReducer(rootReducer, initialState);

    async function getPaths() {
        try {
            const response: AxiosResponse = await api.getPaths();
            const action: Action = {
                type: ActionType.GET_PATHS,
                data: response.data.data
            };

            dispatch(action);
        } catch (error) {
            const errorAction: Action = {
                type: ActionType.ERROR,
                data: error.response.data.error
            };

            dispatch(errorAction);
        }
    }

    async function createPath(path: any) {

        try {
            const response: AxiosResponse = await api.createPath(path);
            const action: Action = {
                type: ActionType.CREATE_PATH,
                data: response.data
            };

            dispatch(action);
        } catch (error) {
            const errorAction: Action = {
                type: ActionType.ERROR,
                data: error.response.data.error
            };

            dispatch(errorAction);
        }
    }

    async function getResources() {
        try {
            const response: AxiosResponse = await api.getResources();
            const action: Action = {
                type: ActionType.GET_RESOURCES,
                data: response.data.data
            };

            dispatch(action);
        } catch (error) {
            const errorAction: Action = {
                type: ActionType.ERROR,
                data: error.response.data.error
            };

            dispatch(errorAction);
        }
    }

    return (
        <GlobalContext.Provider value={{
            isLoading: state.isLoading,
            paths: state.paths,
            resources: state.resources,
            error: state.error,

            getPaths,
            createPath,

            getResources,
        }}>
            { children }
        </GlobalContext.Provider>
    );
}