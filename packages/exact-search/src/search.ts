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

class Search {
  private data: Record<string, any>[];
  private indexFields: string[];
  private resultFields: string[];
  private indexWeights: number[];

  constructor({ data, indexFields, resultFields, indexWeights = [] }: Params) {
    this.data = data;
    this.indexFields = indexFields;
    this.resultFields = resultFields;
    this.indexWeights =
      indexWeights.length > 0 ? indexWeights : new Array(indexFields.length).fill(1);
  }

  public search(query: string) {
    const results: Result[] = [];

    this.data.forEach((item: any) => {
      let temp: Result = { match: null, score: 0, count: null };
      this.indexFields.forEach((field: string, i) => {
        const startIndex = item[field].toLowerCase().indexOf(query.toLowerCase());
        if (startIndex !== -1) {
          const count = item[field].toLowerCase().split(query.toLowerCase()).length - 1;
          const words = item[field].split(' ').length;

          this.resultFields.forEach((resultField: string) => {
            temp[resultField] = item[resultField];
          });
          // get a subtring that is the query and the subsequent 20 characters
          const substr = item[field].substring(startIndex, startIndex + 20);
          temp.match = { ...temp.match, [field]: substr };
          temp.score += count / words;
          temp.count = { ...temp.count, [field]: count / words };
        }
      });
      if (temp.match) {
        results.push(temp);
      }
    });

    results.sort((a, b) => b.score - a.score);

    return results;
  }
}

export default Search;
