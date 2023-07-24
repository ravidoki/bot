module.exports = {
  type: "object",
  properties: {
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
    formName: {
      type: "string"
    },
    reason: {
      type: "string"
    },
    parentName: {
      type: "string"
    },
    relationship: {
      type: "string"
    },
    description: {
      type: "string"
    }
  },
  required: ["firstName", "lastName", "formName", "reason", "relationship", "parentName","description", "relationship"],
  additionalProperties: false
};
