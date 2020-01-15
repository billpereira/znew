const Zowe = require("../services/zowe");

const host = process.env.ZOWE_HOST;
const port = process.env.ZOWE_PORT;
const user = process.env.ZOWE_USER;
const password = process.env.ZOWE_PSW;

const mainframe = new Zowe(host, port, user, password);

const account = "MTM";

module.exports = {
   async consoleCommand(req, res) {
    const commandAnswer =  await mainframe.sendCommand(account, req.body.command);
    res.json(commandAnswer)
  }
};
