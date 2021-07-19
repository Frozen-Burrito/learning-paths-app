import { Action, ActionType } from './actionTypes';
import { Path, Resource } from '../../../index';

export type State = {
    isLoading: boolean,
    paths: Array<Path>,
    resources: Array<Resource>,
    error: string,

    getPaths?(): Promise<void>,
    getPath?(): Promise<void>,
    createPath?(): Promise<void>,

    getResources?(): Promise<void>,
    getResourceById?(): Promise<void>,
    
}

export default function reducer( state: State, action: Action ): State {
    switch ( action.type) {
        case ActionType.GET_PATHS:
            return {
                ...state,
                isLoading: false,
                paths: action.data
            };
        case ActionType.CREATE_PATH:
            return {
                ...state,
                isLoading: false,
                paths: action.data
            };
        case ActionType.GET_RESOURCES:
            return {
                ...state,
                isLoading: false,
                resources: action.data
            };
        default: 
            return state;
    }
}