const zowe = require('@zowe/cli');

class Zowe {
    constructor(host, port, user, password) {
        this.profile = {
            host,
            port,
            user,
            password,
            rejectUnauthorized: false
        }
    }

    async sendCommand(account, userCommand) {
        const session = zowe.ZosmfSession.createBasicZosmfSessionFromArguments(this.profile);
        const command = `${userCommand}`;
        const out = await zowe.IssueCommand.issueAndCollect(session, {command}, {});
        const commandResponse = out.commandResponse.split('\n');
        // const commandResponse = out.commandResponse;
        return commandResponse;
    }
}

module.exports = Zowe;

