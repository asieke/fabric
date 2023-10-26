type Params = {
  data: Record<string, any>[];
  indexFields: string[];
  resultFields: string[];
};

class Search {
  private data: any;
  private indexFields: string[];
  private resultFields: string[];

  constructor({ data, indexFields, resultFields }: Params) {
    this.data = data;
    this.indexFields = indexFields;
    this.resultFields = resultFields;
  }

  public search(query: string) {
    const results: Record<string, any>[] = [];

    this.data.forEach((item: any) => {
      this.indexFields.forEach((field: string) => {
        if (item[field].toLowerCase().includes(query.toLowerCase())) {
          let temp: Record<string, any> = {};
          this.resultFields.forEach((resultField: string) => {
            temp[resultField] = item[resultField];
          });
          results.push(temp);
        }
      });
    });

    return results;
  }
}

export default Search;
