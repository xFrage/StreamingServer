const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post('/auth', function (req, res) {
    const streamKey = req.body.key;

    // if streamkey matches 'stream_key', allow the stream
    if (streamKey === 'blablabla') {
        res.status(200).send();
        return;
    }

    // streamkey did not match
    res.status(403).send();
    console.log(`Rejected stream with key: ${streamKey}`);
});

app.listen(8000, () => {
    console.log('Auth server listening on port 8000');
});