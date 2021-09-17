module.exports = {
  Exchanges: [
    {
      ExchangeName: "USERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["USERS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_ADD-USERS_SERVICE",
        },
      ]
    },
    {
      ExchangeName: "USERS_ADDED",
      Publishers: ["USERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_ADDED-USERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_ADDED-API_GATEWAY_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "USERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["USERS_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_UPDATE-USERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "USERS_UPDATED",
      Publishers: ["USERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_UPDATED-USERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_UPDATED-API_GATEWAY_SERVICE",
        }],
    },

    {
      ExchangeName: "USERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["USERS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_DELETE-USERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "USERS_DELETED",
      Publishers: ["USERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_DELETED-USERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_DELETED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "ORDERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ORDERS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_ADD-ORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ORDERS_ADDED",
      Publishers: ["ORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_ADDED-ORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_ADDED-API_GATEWAY_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ORDERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ORDERS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_DELETE-ORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ORDERS_DELETED",
      Publishers: ["ORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_DELETED-ORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_DELETED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "ORDERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ORDERS_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_UPDATE-ORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ORDERS_UPDATED",
      Publishers: ["ORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ORDERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_UPDATED-ORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ORDERS_UPDATED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "TRADES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["TRADES_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_UPDATE-TRADES_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "TRADES_UPDATED",
      Publishers: ["TRADES_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_UPDATED-TRADES_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_UPDATED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "TRADES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["TRADES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_ADD-TRADES_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "TRADES_ADDED",
      Publishers: ["TRADES_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_ADDED-TRADES_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_ADDED-API_GATEWAY_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "TRADES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["TRADES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_DELETE-TRADES_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "TRADES_DELETED",
      Publishers: ["TRADES_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "TRADES_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_DELETED-TRADES_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TRADES_DELETED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "ALLORDERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ALLORDERS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_ADD-ALLORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ALLORDERS_ADDED",
      Publishers: ["ALLORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_ADDED-ALLORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_ADDED-API_GATEWAY_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ALLORDERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ALLORDERS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_DELETE-ALLORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ALLORDERS_DELETED",
      Publishers: ["ALLORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_DELETED-ALLORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_DELETED-API_GATEWAY_SERVICE",
        }],
    },
    {
      ExchangeName: "ALLORDERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessExchangesToPush: ["ALLORDERS_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_UPDATE-ALLORDERS_SERVICE",
        }
      ]
    },
    {
      ExchangeName: "ALLORDERS_UPDATED",
      Publishers: ["ALLORDERS_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "ALLORDERS_SERVICE",
          Function: "SendSTUDENTAddedNotificationToAdmin",
          OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_UPDATED-ALLORDERS_SERVICE",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessExchangesToPush: [],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ALLORDERS_UPDATED-API_GATEWAY_SERVICE",
        }],
    },

    {
      ExchangeName: "APPUSERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPUSERS_SERVICE",
          Function: "InsertUSERS",
          OnSuccessExchangesToPush: ["APPUSERS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPUSERS_ADD-APPUSERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPUSERS_ADDED",
       Publishers: ["APPUSERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPUSERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_ADDED-APPUSERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APPUSERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPUSERS_SERVICE",
          Function: "InsertUSERS",
          OnSuccessExchangesToPush: ["APPUSERS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPUSERS_UPDATE-APPUSERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPUSERS_UPDATED",
       Publishers: ["APPUSERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPUSERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_UPDATED-APPUSERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APPUSERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPUSERS_SERVICE",
          Function: "InsertUSERS",
          OnSuccessExchangesToPush: ["APPUSERS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPUSERS_DELETE-APPUSERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPUSERS_DELETED",
       Publishers: ["APPUSERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPUSERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_DELETED-APPUSERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPUSERS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANTS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANTS_SERVICE",
          Function: "InsertTENANTS",
          OnSuccessExchangesToPush: ["TENANTS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS_ADD-TENANTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANTS_ADDED",
       Publishers: ["TENANTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_ADDED-TENANTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANTS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANTS_SERVICE",
          Function: "InsertTENANTS",
          OnSuccessExchangesToPush: ["TENANTS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS_UPDATE-TENANTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANTS_UPDATED",
       Publishers: ["TENANTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_UPDATED-TENANTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANTS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANTS_SERVICE",
          Function: "InsertTENANTS",
          OnSuccessExchangesToPush: ["TENANTS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANTS_DELETE-TENANTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANTS_DELETED",
       Publishers: ["TENANTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_DELETED-TENANTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANTS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USERS_SERVICE",
          Function: "InsertTENANT_USERS",
          OnSuccessExchangesToPush: ["TENANT_USERS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS_ADD-TENANT_USERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USERS_ADDED",
       Publishers: ["TENANT_USERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_ADDED-TENANT_USERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USERS_SERVICE",
          Function: "InsertTENANT_USERS",
          OnSuccessExchangesToPush: ["TENANT_USERS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS_UPDATE-TENANT_USERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USERS_UPDATED",
       Publishers: ["TENANT_USERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_UPDATED-TENANT_USERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USERS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USERS_SERVICE",
          Function: "InsertTENANT_USERS",
          OnSuccessExchangesToPush: ["TENANT_USERS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USERS_DELETE-TENANT_USERS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USERS_DELETED",
       Publishers: ["TENANT_USERS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USERS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_DELETED-TENANT_USERS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USERS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_SERVICE",
          Function: "InsertTENANT_USER_APPS",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_ADD-TENANT_USER_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_ADDED",
       Publishers: ["TENANT_USER_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ADDED-TENANT_USER_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_SERVICE",
          Function: "InsertTENANT_USER_APPS",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_UPDATE-TENANT_USER_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_UPDATED",
       Publishers: ["TENANT_USER_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_UPDATED-TENANT_USER_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_SERVICE",
          Function: "InsertTENANT_USER_APPS",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_DELETE-TENANT_USER_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_DELETED",
       Publishers: ["TENANT_USER_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_DELETED-TENANT_USER_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_ROLES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_ROLES_SERVICE",
          Function: "InsertTENANT_USER_APPS_ROLES",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_ROLES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_ROLES_ADD-TENANT_USER_APPS_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_ROLES_ADDED",
       Publishers: ["TENANT_USER_APPS_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_ADDED-TENANT_USER_APPS_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_ROLES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_ROLES_SERVICE",
          Function: "InsertTENANT_USER_APPS_ROLES",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_ROLES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_ROLES_UPDATE-TENANT_USER_APPS_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_ROLES_UPDATED",
       Publishers: ["TENANT_USER_APPS_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_UPDATED-TENANT_USER_APPS_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APPS_ROLES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APPS_ROLES_SERVICE",
          Function: "InsertTENANT_USER_APPS_ROLES",
          OnSuccessExchangesToPush: ["TENANT_USER_APPS_ROLES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APPS_ROLES_DELETE-TENANT_USER_APPS_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APPS_ROLES_DELETED",
       Publishers: ["TENANT_USER_APPS_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APPS_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_DELETED-TENANT_USER_APPS_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APPS_ROLES_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APP_ALERTS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APP_ALERTS_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS",
          OnSuccessExchangesToPush: ["TENANT_USER_APP_ALERTS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS_ADD-TENANT_USER_APP_ALERTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APP_ALERTS_ADDED",
       Publishers: ["TENANT_USER_APP_ALERTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APP_ALERTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_ADDED-TENANT_USER_APP_ALERTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APP_ALERTS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APP_ALERTS_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS",
          OnSuccessExchangesToPush: ["TENANT_USER_APP_ALERTS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS_UPDATE-TENANT_USER_APP_ALERTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APP_ALERTS_UPDATED",
       Publishers: ["TENANT_USER_APP_ALERTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APP_ALERTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_UPDATED-TENANT_USER_APP_ALERTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_USER_APP_ALERTS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_USER_APP_ALERTS_SERVICE",
          Function: "InsertTENANT_USER_APP_ALERTS",
          OnSuccessExchangesToPush: ["TENANT_USER_APP_ALERTS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_USER_APP_ALERTS_DELETE-TENANT_USER_APP_ALERTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_USER_APP_ALERTS_DELETED",
       Publishers: ["TENANT_USER_APP_ALERTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_USER_APP_ALERTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_DELETED-TENANT_USER_APP_ALERTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_USER_APP_ALERTS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APPS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APPS_SERVICE",
          Function: "InsertTENANT_APPS",
          OnSuccessExchangesToPush: ["TENANT_APPS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS_ADD-TENANT_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APPS_ADDED",
       Publishers: ["TENANT_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_ADDED-TENANT_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APPS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APPS_SERVICE",
          Function: "InsertTENANT_APPS",
          OnSuccessExchangesToPush: ["TENANT_APPS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS_UPDATE-TENANT_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APPS_UPDATED",
       Publishers: ["TENANT_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_UPDATED-TENANT_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APPS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APPS_SERVICE",
          Function: "InsertTENANT_APPS",
          OnSuccessExchangesToPush: ["TENANT_APPS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APPS_DELETE-TENANT_APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APPS_DELETED",
       Publishers: ["TENANT_APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_DELETED-TENANT_APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APPS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APP_FEATURES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APP_FEATURES_SERVICE",
          Function: "InsertTENANT_APP_FEATURES",
          OnSuccessExchangesToPush: ["TENANT_APP_FEATURES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES_ADD-TENANT_APP_FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APP_FEATURES_ADDED",
       Publishers: ["TENANT_APP_FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APP_FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_ADDED-TENANT_APP_FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APP_FEATURES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APP_FEATURES_SERVICE",
          Function: "InsertTENANT_APP_FEATURES",
          OnSuccessExchangesToPush: ["TENANT_APP_FEATURES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES_UPDATE-TENANT_APP_FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APP_FEATURES_UPDATED",
       Publishers: ["TENANT_APP_FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APP_FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_UPDATED-TENANT_APP_FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "TENANT_APP_FEATURES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "TENANT_APP_FEATURES_SERVICE",
          Function: "InsertTENANT_APP_FEATURES",
          OnSuccessExchangesToPush: ["TENANT_APP_FEATURES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "TENANT_APP_FEATURES_DELETE-TENANT_APP_FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "TENANT_APP_FEATURES_DELETED",
       Publishers: ["TENANT_APP_FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "TENANT_APP_FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_DELETED-TENANT_APP_FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "TENANT_APP_FEATURES_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "ROLES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ROLES_SERVICE",
          Function: "InsertROLES",
          OnSuccessExchangesToPush: ["ROLES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES_ADD-ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "ROLES_ADDED",
       Publishers: ["ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_ADDED-ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "ROLES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ROLES_SERVICE",
          Function: "InsertROLES",
          OnSuccessExchangesToPush: ["ROLES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES_UPDATE-ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "ROLES_UPDATED",
       Publishers: ["ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_UPDATED-ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "ROLES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "ROLES_SERVICE",
          Function: "InsertROLES",
          OnSuccessExchangesToPush: ["ROLES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "ROLES_DELETE-ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "ROLES_DELETED",
       Publishers: ["ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_DELETED-ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "ROLES_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURES_SERVICE",
          Function: "InsertFEATURES",
          OnSuccessExchangesToPush: ["FEATURES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES_ADD-FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURES_ADDED",
       Publishers: ["FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_ADDED-FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURES_SERVICE",
          Function: "InsertFEATURES",
          OnSuccessExchangesToPush: ["FEATURES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES_UPDATE-FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURES_UPDATED",
       Publishers: ["FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_UPDATED-FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURES_SERVICE",
          Function: "InsertFEATURES",
          OnSuccessExchangesToPush: ["FEATURES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURES_DELETE-FEATURES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURES_DELETED",
       Publishers: ["FEATURES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_DELETED-FEATURES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURES_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURE_PERMISSIONS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURE_PERMISSIONS_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS",
          OnSuccessExchangesToPush: ["FEATURE_PERMISSIONS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS_ADD-FEATURE_PERMISSIONS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURE_PERMISSIONS_ADDED",
       Publishers: ["FEATURE_PERMISSIONS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURE_PERMISSIONS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_ADDED-FEATURE_PERMISSIONS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURE_PERMISSIONS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURE_PERMISSIONS_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS",
          OnSuccessExchangesToPush: ["FEATURE_PERMISSIONS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS_UPDATE-FEATURE_PERMISSIONS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURE_PERMISSIONS_UPDATED",
       Publishers: ["FEATURE_PERMISSIONS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURE_PERMISSIONS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_UPDATED-FEATURE_PERMISSIONS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "FEATURE_PERMISSIONS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "FEATURE_PERMISSIONS_SERVICE",
          Function: "InsertFEATURE_PERMISSIONS",
          OnSuccessExchangesToPush: ["FEATURE_PERMISSIONS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "FEATURE_PERMISSIONS_DELETE-FEATURE_PERMISSIONS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "FEATURE_PERMISSIONS_DELETED",
       Publishers: ["FEATURE_PERMISSIONS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "FEATURE_PERMISSIONS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_DELETED-FEATURE_PERMISSIONS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "FEATURE_PERMISSIONS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "CLIENTS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CLIENTS_SERVICE",
          Function: "InsertCLIENTS",
          OnSuccessExchangesToPush: ["CLIENTS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS_ADD-CLIENTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "CLIENTS_ADDED",
       Publishers: ["CLIENTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "CLIENTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_ADDED-CLIENTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "CLIENTS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CLIENTS_SERVICE",
          Function: "InsertCLIENTS",
          OnSuccessExchangesToPush: ["CLIENTS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS_UPDATE-CLIENTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "CLIENTS_UPDATED",
       Publishers: ["CLIENTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "CLIENTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_UPDATED-CLIENTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "CLIENTS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CLIENTS_SERVICE",
          Function: "InsertCLIENTS",
          OnSuccessExchangesToPush: ["CLIENTS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "CLIENTS_DELETE-CLIENTS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "CLIENTS_DELETED",
       Publishers: ["CLIENTS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "CLIENTS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_DELETED-CLIENTS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "CLIENTS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APPS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPS_SERVICE",
          Function: "InsertAPPS",
          OnSuccessExchangesToPush: ["APPS_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS_ADD-APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPS_ADDED",
       Publishers: ["APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_ADDED-APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APPS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPS_SERVICE",
          Function: "InsertAPPS",
          OnSuccessExchangesToPush: ["APPS_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS_UPDATE-APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPS_UPDATED",
       Publishers: ["APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_UPDATED-APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APPS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APPS_SERVICE",
          Function: "InsertAPPS",
          OnSuccessExchangesToPush: ["APPS_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APPS_DELETE-APPS_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APPS_DELETED",
       Publishers: ["APPS_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APPS_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_DELETED-APPS_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APPS_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_ROLES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_ROLES_SERVICE",
          Function: "InsertAPP_ROLES",
          OnSuccessExchangesToPush: ["APP_ROLES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES_ADD-APP_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_ROLES_ADDED",
       Publishers: ["APP_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_ADDED-APP_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_ROLES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_ROLES_SERVICE",
          Function: "InsertAPP_ROLES",
          OnSuccessExchangesToPush: ["APP_ROLES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES_UPDATE-APP_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_ROLES_UPDATED",
       Publishers: ["APP_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_UPDATED-APP_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_ROLES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_ROLES_SERVICE",
          Function: "InsertAPP_ROLES",
          OnSuccessExchangesToPush: ["APP_ROLES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_ROLES_DELETE-APP_ROLES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_ROLES_DELETED",
       Publishers: ["APP_ROLES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_ROLES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_DELETED-APP_ROLES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_ROLES_DELETED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_MESSAGES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_MESSAGES_SERVICE",
          Function: "InsertAPP_MESSAGES",
          OnSuccessExchangesToPush: ["APP_MESSAGES_ADDED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES_ADD-APP_MESSAGES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_MESSAGES_ADDED",
       Publishers: ["APP_MESSAGES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_MESSAGES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_ADDED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_ADDED-APP_MESSAGES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_ADDED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_MESSAGES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_MESSAGES_SERVICE",
          Function: "InsertAPP_MESSAGES",
          OnSuccessExchangesToPush: ["APP_MESSAGES_UPDATE"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES_UPDATE-APP_MESSAGES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_MESSAGES_UPDATED",
       Publishers: ["APP_MESSAGES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_MESSAGES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_UPDATED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_UPDATED-APP_MESSAGES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_UPDATED-API_GATEWAY_SERVICE",
         }],
     },
     {
      ExchangeName: "APP_MESSAGES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "APP_MESSAGES_SERVICE",
          Function: "InsertAPP_MESSAGES",
          OnSuccessExchangesToPush: ["APP_MESSAGES_DELETED"],
          OnFailureExchangesToPush: ["ERROR_RECEIVER"],
          QueueName: "APP_MESSAGES_DELETE-APP_MESSAGES_SERVICE",
        },
      ],
     },
     {
       ExchangeName: "APP_MESSAGES_DELETED",
       Publishers: ["APP_MESSAGES_SERVICE"],
       Method: "UNKNOWN",
       Subscribers: [
         {
           Service: "APP_MESSAGES_SERVICE",
           Function: "SendSTUDENTAddedNotificationToAdmin",
           OnSuccessExchangesToPush: ["NOTIFICATION_DELETEED"],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_DELETED-APP_MESSAGES_SERVICE",
         },
         {
           Service: "API_GATEWAY_SERVICE",
           Function: "FunctionNameToAcknowledgeUIHandle",
           OnSuccessExchangesToPush: [],
           OnFailureExchangesToPush: ["ERROR_RECEIVER"],
           QueueName: "APP_MESSAGES_DELETED-API_GATEWAY_SERVICE",
         }],
     }
  ]
};
