// if (process.argv.length < 3) {
//     console.log("Usage: node dist/client <r-address>");
//     process.exit(1);
// }
// import axios from "axios";

// const main = async () => {
//     const {data} = await axios({
//         method: "post",
//         url: "https://s.altnet.rippletest.net:51234/",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: {
//             "id": 1,
//             "method": "account_info",
//             "params": [
//                 {
//                     "account": process.argv[2],
//                     "strict": true,
//                     "ledger_index": "current",
//                     "queue": true
//                 }
//             ]
//         }
//     });
//     console.log("Data", data);
    
// }

// main();

if (process.argv.length < 3) {
    console.log("Usage: node dist/client <r-address>");
    process.exit(1);
}
import axios from "axios";

const main = async () => {
    const {data} = await axios.post("https://s.altnet.rippletest.net:51234/", {
        "id": 1,
        "method": "account_info",
        "params": [
            {
                "account": process.argv[2],
                "strict": true,
                "ledger_index": "current",
                "queue": true
            }
        ]
    });
    console.log("Data", data);
    
}

main();