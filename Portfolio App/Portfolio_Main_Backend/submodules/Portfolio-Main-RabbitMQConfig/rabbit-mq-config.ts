module.exports = {
  Topics: [
    {
      TopicName: "USERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_ADD-USERS_SERVICE",
        },
      ]
    },
    {
      TopicName: "USERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_UPDATE-USERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "USERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_DELETE-USERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "ORDERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ORDERS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_ADD-ORDERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "ORDERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ORDERS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_DELETE-ORDERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "ORDERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ORDERS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_UPDATE-ORDERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "TRADES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["TRADES_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_UPDATE-TRADES_SERVICE",
        }
      ]
    },
    {
      TopicName: "TRADES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["TRADES_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_ADD-TRADES_SERVICE",
        }
      ]
    },
    {
      TopicName: "TRADES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["TRADES_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_DELETE-TRADES_SERVICE",
        }
      ]
    },
    {
      TopicName: "ALLORDERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ALLORDERS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_ADD-ALLORDERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "ALLORDERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ALLORDERS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_DELETE-ALLORDERS_SERVICE",
        }
      ]
    },
    {
      TopicName: "ALLORDERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["ALLORDERS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_UPDATE-ALLORDERS_SERVICE",
        }
      ]
    }
  ]
};
