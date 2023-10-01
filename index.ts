if (process.argv.length < 3) {
    console.log("Usage: node dist/index <r-address>");
    process.exit(1);
}

import { utils } from "xrpl-accountlib";
import { XrplClient } from "xrpl-client";

const client = new XrplClient('wss://s.altnet.rippletest.net:51233/');

const main = async () => {
    if (!utils.isValidAddress(process.argv[2])) {
        console.log("Invalid address");
        return;
    }

const data = await client.send({
    id: 1,
    command: "account_info",
    account: process.argv[2],
    strict: true,
});
console.log("Account: ", data.account_data.Account);
console.log("Balance: ", data.account_data.Balance / 1000000, " XRP");
console.log("LedgerEntryType: ", data.account_data.LedgerEntryType);
console.log("OwnerCount: ", data.account_data.OwnerCount);
console.log("Sequence: ", data.account_data.Sequence);
console.log("Current Ledger Index: ", data.ledger_current_index);

}


main();