type Params = {
    data: Record<string, any>[];
    indexFields: string[];
    indexWeights: number[];
    resultFields: string[];
};
type Result = {
    match: Record<string, string> | null;
    score: number;
    count: Record<string, number> | null;
    [key: string]: any;
};
declare class Search {
    private data;
    private indexFields;
    private resultFields;
    private indexWeights;
    constructor({ data, indexFields, resultFields, indexWeights }: Params);
    search(query: string): Result[];
}

export { Search as ExactSearch };
