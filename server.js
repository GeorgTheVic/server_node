const express = require('express');
const app = express();

// Маршрут для обработки redirect_uri от amoCRM
app.get('/callback', (req, res) => {
    const authorizationCode = req.query.code;
    console.log('Authorization Code:', authorizationCode);
    res.send('Authorization successful! You can close this window.');
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
