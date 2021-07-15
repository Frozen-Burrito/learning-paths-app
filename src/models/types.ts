export type Resource = {
    _id: string;
    name: string;
    resourceUrl: string;            
}

export type Step = {
    title: string;
    description: string;
}

export type Path = {
    title: string;
    steps: Array<Step>;
    resources: Array<Resource>;
}