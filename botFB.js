const fs = require("fs");
const login = require("fca-unofficial");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

     api.setOptions({listenEvents: true});

    var listenEmitter = api.listen((err, event) => {
        if(err) return console.error(err);

        switch (event.type) {
            case "message":
                if(event.body === '/คำสั่ง') {
                    api.sendMessage("คำสั่งเหี้ยไรกูยังไม่ทำ", event.threadID);
                }
                api.markAsRead(event.threadID, (err) => {
                    if(err) console.log(err);
                });
        }
    });
});