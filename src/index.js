/*eslint linebreak-style: ["error", "windows"]*/
import dva from 'dva';
import * as models from './model';
import './style.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
Object.keys(models).forEach(key => app.model(models[key]));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
