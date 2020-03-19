const { gql } = require("apollo-server-cloudflare");

module.exports = gql`
  type Account {
    name: String!
    primary_email_address: String!
  }

  type Form {
    id: Int!
    uid: String!
    archived: Boolean!
    created_at: String!
    embed_js: String!
    embed_url: String!
    name: String!
    type: String!
    description: String
    sign_up_button_text: String
    success_message: String
    title: String
    url: String
  }

  type Query {
    forms: [Form]!
    me: Account
  }
`;
