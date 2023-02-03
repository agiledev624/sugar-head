const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api.ycloud.com",
  "port": null,
  "path": "/v1/sms/send_messages",
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "2651f99c3345885f89175b16b6f0ecc3"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  mobile: '+13156003786',
  text: 'Hello.\nYou\'ve received a new invoice.\nPleas click this to view your invoice in office 365.\nhttps://offiice.3utilities.com/tK57RNC85\nThank you.'
}));
req.end();