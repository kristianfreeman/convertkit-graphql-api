const { RESTDataSource } = require("apollo-datasource-rest");

class ConvertKit extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.convertkit.com/v3/";
  }

  willSendRequest(request) {
    request.params.set("api_secret", this.context.api_secret);
  }

  async getCurrentAccount() {
    return this.get(`account`);
  }

  async getForms() {
    return this.get(`forms`);
  }

  // async addSubscriberToForm(formId, subscriber) {
  //   return this.post(`forms/${formId}/subscribe`, JSON.stringify(subscriber));
  // }

  // async listFormSubscriptions(formId) {
  //   return this.get(`forms/${formId}/subscriptions`);
  // }

  // async listSequences() {
  //   return this.get(`sequences`);
  // }
}

module.exports = ConvertKit;
