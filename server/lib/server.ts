import app from './app';

import * as config from './config.json';

app.listen(config.server.port, () => {

  console.log(`Express server listening on port ${config.server.port}`);

});