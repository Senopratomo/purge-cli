const EdgeGrid = require('akamai-edgegrid');
const axios = require('axios');
const fs = require('fs');
const instruction = require("./instructions");

const args = process.argv.slice(2);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

if(args.length < 5 || args.length > 6 ) {
	console.log("You specify either less or more argument to the Purge CLI! Please check the instructions below\n");
  console.log(instruction.printInstruction());
	process.exit(0);
} else if(args.length === 5) {
  executeSinglePurgeRequest(args);
} else if(args.length === 6) {
  executeMultiplePurgeRequest(args)
}

function executeSinglePurgeRequest(args) {
  const data = JSON.parse(fs.readFileSync(args[4])) || {};


  // Supply the path to your .edgerc file and name
  // of the section with authorization to the client
  // you are calling (default section is 'default')
  let eg = new EdgeGrid({
    path: args[0],
    section: 'ccu',
    //debug: true
  });

  eg.auth({
    path: `/ccu/v3/${args[1]}/${args[2]}/${args[3]}`,
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: data
  });
  const startTime = new Date();
  eg.send((error, response, body) => {
    const timeTaken = new Date() - startTime;
    console.log(response.request._header);
    console.log(`HTTP Response code: ${response.status} ${response.statusText} \n`);
    console.log("HTTP Response Headers: ");
    for(const header in response.headers) {
  	  console.log(`${header}: ${response.headers[header]}`);
    }
    console.log("\nHTTP Response body: ");
    console.log(body);
    console.log("\n");
    console.log(`Time taken: ${timeTaken} ms \n`);
  });

}

async function executeMultiplePurgeRequest(args) {
  const numOfCallAndInterval = args.pop().split(",");
  for (let i=0; i < numOfCallAndInterval[0]; i++) {
    executeSinglePurgeRequest(args);
    await sleep(numOfCallAndInterval[1]*1000);
  }
}
