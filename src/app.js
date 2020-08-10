import React from 'react';   // using ES6 syntax for React;  
import ReactDOM from 'react-dom'; 
import IndecisionApp from './components/IndecisionApp'; 
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';   // found in node_modules folder

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     )
// }

//ReactDOM.render(<Layout content={template} />, document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  
// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div> 
//     </Layout>
// ), document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  

// const template = <p>THIS IS JSX from WEBPACK</p>  // this works because of the rules in webpack.config.js to run Babel every time we see a .js file 
//                                                     //  which converts the JSX to React.createElement calls
// ReactDOM.render(template, document.getElementById('app')); 
