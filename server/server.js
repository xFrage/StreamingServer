import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', ws => {
    ws.on('message', msg => {
        wss.clients.forEach(c => {
            if (c !== ws && c.readyState === 1) c.send(msg);
        });
    });
});