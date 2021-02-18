const rules = {
  bookList:{
    page:{type: 'string', required: false},
    pageSize:{type: 'string', required: false}
  },
  bookAdd: {
    name: { type: "string", require: true },
    description: { type: "string", require: false },
  },
  bookModify: {
    id: { type: "string", require: true },
    name: { type: "string", require: true },
    description: { type: "string", require: false },
  },
  bookDelete: {
    id: { type: "string", require: true },
  },
};

export default rules;
