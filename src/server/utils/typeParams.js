const rules = {
  bookAdd: {
    name: { type: "string", require: true },
    description: { type: "string", require: false },
  },
  bookModify: {
    _id: { type: "id", require: true },
    name: { type: "string", require: true },
    description: { type: "string", require: false },
  },
  bookDelete: {
    _id: { type: "string", require: true },
  },
};

export default rules;
