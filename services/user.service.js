import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// users list
const users = [];

// generate a unique id for user
function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// User service
// actions are functions in the service
broker.createService({
  name: "user",
  actions: {
    createUser: {
      async handler(ctx) {
        const { username, email } = ctx.params;
        const newUser = {
          id: generateId(),
          username,
          email,
        };
        users.push(newUser);
        return newUser;
      },
    },
    getUsers: {
      async handler(ctx) {
        return users;
      },
    },
  },
});

export default broker;
