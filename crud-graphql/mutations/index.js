const greetingResolvers = require("./greetingQuery");
const studentQueryResolvers = require("./studentQuery");
const studentMutationResolvers = require("./studentMutationQuery");

const resolvers = [greetingResolvers, studentQueryResolvers, studentMutationResolvers];

module.exports = resolvers;