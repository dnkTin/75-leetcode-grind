/**
 * The builder pattern is used when we need to create complex objects with different variations
 * and also we want to have the flexibility to modify the construction process without impact the object representation itself
 * 
 * 
 * use case: How many times we need to transform the API data into a format that our third-party component understand, for this case
 * we can use the builder pattern to create the object that component needs, and also separate the construction logic
 */

class DataTable {
  constructor(data, options) {
    this.data = data;
    this.options = options;
  }

  getData() {
    return this.data;
  }
}

/**
 * Builder class to create DataTable objects.
 */
function DataTableBuilder() {
  let defaultOptions = {
    width: 100,
    height: 200,
    headerFixed: false,
  };
  function generateFormattedData(data, header) {
    return data.map((item) => {
      let result = {};
      item.forEach((val, idx) => {
        result[header[idx] || 'df' + idx] = val;
      })
      return result;
    })
  }

  return {
    addHeader(header) {
      this.header = header || [];
      return this;
    },
    addData(data) {
      this.data = data || [];
      return this;
    },
    addOptions(options) {
      this.options = {...defaultOptions, ...options};
      return this;
    },
    build() {
      const formattedData = generateFormattedData(this.data, this.header);
      return new DataTable(formattedData, this.options);
    },
  }
}

const header = ['name', 'age', 'position'];
const rows = [['Luis', 19, 'Dev'], ['Bob', 23, 'Hr'], ['Michel', 25, 'Accounting']]
const options = [headerFixed: true];

const dt = new DataTableBuilder()
                .addHeader(header)
                .addData(rows)
                .addOptions(options)
                .build();
dt.getData();