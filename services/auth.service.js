import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// Auth service
// actions are functions in the service
broker.createService({
  name: "auth",
  actions: {
    authUser: {
      async handler(ctx) {
        const { username, password } = ctx.params;

        if (username === "admin" && password === "password") {
          return {
            success: true,
            message: "Auth was successful",
          };
        } else {
          return {
            success: false,
            message: "Auth failed",
          };
        }
      },
    },
  },
});

export default broker;
