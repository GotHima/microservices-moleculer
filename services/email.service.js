import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// Email service
// actions are functions in the service
broker.createService({
  name: "email",
  actions: {
    sendEmail: {
      async handler(ctx) {
        const { recipient, subject, content } = ctx.params;

        // simulate send email
        console.log(`Sending email to ${recipient} with subject ${subject}`);
        console.log(`Content: ${content}`);
        return `Email sent`;
      },
    },
  },
});

export default broker;
