export type Action = {
    type: ActionType;
    data: any;
}

export enum ActionType {
    GET_PATHS = 'GET_PATHS',
    CREATE_PATH = 'CREATE_PATH',
    EDIT_PATH = 'EDIT_PATH',
    DELETE_PATH = 'DELETE_PATH',

    GET_RESOURCES = 'GET_RESOURCES',
    CREATE_RESOURCE = 'CREATE_RESOURCE',
    EDIT_RESOURCE = 'EDIT_RESOURCE',
    DELETE_RESOURCE = 'DELETE_RESOURCE',

    ERROR = 'ERROR'
}