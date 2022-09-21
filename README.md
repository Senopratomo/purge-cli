<h1>Purge CLI</h1>

<p>This is a simple CLI to purge Akamai content. It's build on top of Fast Purge OPEN API.</p>
<p>simply download the binary from latest version in this repo</p>

<h3>How to use</h3>
<p>It takes 5 - 6 arguments as follows:</p>
<ul>
    <li>
     First argument is the full path to a file containing your credential (tokens + secret)
     in the following format:
     [ccu]
     host = https://akab-xxxxx.luna.akamaiapis.net 
     client_token = akab-xxxxx 
     client_secret = xxxxx 
     access_token = xxxx
    </li>     
    <li> 
     Second argument is the type of purge.
     There are two options - "delete" or "invalidate"
    </li>
    <li> 
     Third argument is the type of object to purge.
     There are three options - "tag","url", or "cpcode"
    </li>
    <li>
     Fourth argument is environment to purge.
     There are two options - "production" or "staging"
    </li>
    <li> 
     Fifth argument is the full path to a file containing the JSON object of type in #3
    </li> 
    <li>
     (optional) sixth argument is 2 comma-separated values which represent:
     first, the number of API call to make
     second, the interval between each call (in seconds)
     Example: "5,6" means the CLI will execute 5 API call with 6 seconds between each API call
    </li>
</ul>

<h3>Sample Usage</h3>
<ul>
    <li>purge delete URL in file /home/user/objects.json in production network<br>
        command:
        <code>$./purge /home/user/.edgerc delete url production /home/user/objects.json</code>            
    </li>
    <li>To encode a text 'hello' in Base64<br />
       <code>$./senotextutils base64encode "hello"</code>
    </li>
    <li>invalidate cpcode in file /home/user/cpcode.json in staging network 3 times with 4 seconds interval<br />
        <code>$./purge /home/user/.edgerc invalidate cpcode staging /home/user/cpcode.json 3,4</code>
    </li>
</ul>

<p>If encounter any issues, please submit it under this repository 'issues'</p>
