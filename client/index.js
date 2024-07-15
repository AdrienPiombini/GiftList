const axios = require("axios");
const prompt = require("prompt-sync")();
const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const username = prompt("Enter a name to see if you are on the list : ");

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    username,
    // TODO: add request body parameters here!
  });

  console.log({ gift });
}

main();
