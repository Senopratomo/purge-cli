function printInstruction() {
  return `
  Purge CLI v1.0.0
  This is a simple CLI to purge Akamai content. It's build on top of Fast Purge OPEN API.
  
  It takes 5 - 6 arguments as follows:
  1) First argument is the full path to a file containing your credential (tokens + secret)
     in the following format:
     [ccu]
     host = https://akab-xxxxx.luna.akamaiapis.net 
     client_token = akab-xxxxx 
     client_secret = xxxxx 
     access_token = xxxx

  2) Second argument is the type of purge.
     There are two options - "delete" or "invalidate"

  3) Third argument is the type of object to purge.
     There are three options - "tag","url", or "cpcode"

  4) Fourth argument is environment to purge.
     There are two options - "production" or "staging"

  5) Fifth argument is the full path to a file containing the JSON object of type in #3

  6) (optional) sixth argument is 2 comma-separated values which represent:
     first, the number of API call to make
     second, the interval between each call (in seconds)
     Example: "5,6" means the CLI will execute 5 API call with 6 seconds between each API call
  
  Example command:
  1) purge delete URL in file /home/user/objects.json in production network
  command:
  purge /home/user/.edgerc delete url production /home/user/objects.json

  2) invalidate cpcode in file /home/user/cpcode.json in staging network 3 times with 4 seconds interval
  purge /home/user/.edgerc invalidate cpcode staging /home/user/cpcode.json 3,4
  `;
}

module.exports = { printInstruction };