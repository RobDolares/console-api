import { DocumentNode, DirectiveNode } from 'graphql';
export declare type RemoveDirectiveConfig = {
    name?: string;
    test?: (directive: DirectiveNode) => boolean;
    remove?: boolean;
};
export declare function removeDirectivesFromDocument(directives: RemoveDirectiveConfig[], doc: DocumentNode): DocumentNode | null;
export declare function addTypenameToDocument(doc: DocumentNode): any;
export declare function removeConnectionDirectiveFromDocument(doc: DocumentNode): any;
export declare type GetDirectiveConfig = {
    name?: string;
    test?: (directive: DirectiveNode) => boolean;
};
export declare function getDirectivesFromDocument(directives: GetDirectiveConfig[], doc: DocumentNode, includeAllFragments?: boolean): DocumentNode | null;