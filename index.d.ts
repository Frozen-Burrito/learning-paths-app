// Type definitions for the Learning Paths App 0.1.0
// Project: Learning Paths
// Definitions by: Frozen Burrito <https://github.com/Frozen-Burrito>

export as namespace pathsApp;

/*~ You can declare types that are available via importing the module */
export interface Resource {
	_id: string;
	name: string;
	description: string;
	resourceUrl: string;
	labels: Array<string>;            
}

export interface Step {
	_id: string;
	title: string;
	description: string;
	score: number;
}

export interface Path {
	_id: string;
	title: string;
	shortDescription: string;
	description: string;
	steps: Array<Step>;
	resourceIds: Array<string>;
	resources: Array<Resource>;
	labels: Array<string>;
	modifiedAt: Date | null;
	createdAt: Date;
}

export interface User {
	_id: string;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
} 
/*~ You can declare properties of the module using const, let, or var */