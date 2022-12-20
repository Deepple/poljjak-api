import {app} from "./config/express.js";
import {env, port} from "./config/vars.js";

app.listen(port, () => console.log(`API PORT: ${port} | NODE_ENV: ${env}`));
