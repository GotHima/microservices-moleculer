import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";
import AuthService from "./services/auth.service.js";

// start running the app
async function startApp() {
  // start services
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

  try {
    // create a new user
    const newUser = await UserService.call("user.createUser", {
      username: "John Doe",
      email: "john@doe.com",
    });
    console.log("User created:", newUser);

    // get all users
    const users = await UserService.call("user.getUsers");
    console.log("All users:", users);

    // send email
    const emailResult = await EmailService.call("email.sendEmail", {
      recipient: newUser.email,
      subject: "Welcome!",
      content: "Thank you for signing up!",
    });
    console.log(emailResult);

    // auth user
    const authResult = await AuthService.call("auth.authUser", {
      username: "admin",
      password: "password",
    });
    console.log("Auth result:", authResult);
  } catch (err) {
    console.error(err);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp();
