const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;






// Server Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}`);
})