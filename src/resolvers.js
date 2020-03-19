module.exports = {
  Query: {
    me: (_source, _args, { dataSources }) =>
      dataSources.convertkit.getCurrentAccount(),

    forms: async (_source, _args, { dataSources }) => {
      const { forms } = await dataSources.convertkit.getForms();
      console.log(JSON.stringify(forms[0], null, 2));
      return forms;
    }
  }
};
