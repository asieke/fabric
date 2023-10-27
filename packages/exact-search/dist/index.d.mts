type Params = {
    data: Record<string, any>[];
    indexFields: string[];
    resultFields: string[];
};
type Result = {
    match: Record<string, string> | null;
    score: number;
    [key: string]: any;
};
declare class Search {
    private data;
    private indexFields;
    private resultFields;
    constructor({ data, indexFields, resultFields }: Params);
    search(query: string, limit?: number): Result[];
}

export { Search as ExactSearch, Result };
