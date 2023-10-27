type Params = {
  data: Record<string, any>[];
  indexFields: string[];
  resultFields: string[];
};

export type Result = {
  match: Record<string, string> | null;
  score: number;
  [key: string]: any;
};

export class Search {
  private data: Record<string, any>[];
  private indexFields: string[];
  private resultFields: string[];

  constructor({ data, indexFields, resultFields }: Params) {
    this.data = data;
    this.indexFields = indexFields;
    this.resultFields = resultFields;
  }

  public search(query: string, limit: number = 10) {
    const results: Result[] = [];

    this.data.forEach((item: any) => {
      let temp: Result = { match: null, score: 0 };
      this.indexFields.forEach((field: string) => {
        // Use a regular expression to find the query at the start of a token (word)
        const regex = new RegExp(`\\b${query}`, 'i');
        const match = item[field].match(regex);

        if (match) {
          const startIndex = match.index!;
          const count = item[field].toLowerCase().split(regex).length - 1;
          const words = item[field].split(' ').length;

          this.resultFields.forEach((resultField: string) => {
            temp[resultField] = item[resultField];
          });
          // get a substring that is the query and the subsequent 20 characters
          const substr = item[field].substring(startIndex, startIndex + 30);
          temp.match = { ...temp.match, [field]: substr };
          temp.score += count / words;
        }
      });
      if (temp.match) {
        results.push(temp);
      }
    });

    results.sort((a, b) => b.score - a.score);

    if (results.length > limit) {
      return results.slice(0, limit);
    }

    return results;
  }
}
