// this is a node script
const path = require('path');   // 'path' is a built-in node function
const ExtractTextPlugin = require('extract-text-webpack-plugin');   // allows us to extract text out of bundle.js (specifically the css) 

//console.log(path.join(__dirname, 'public'));   // see this via cmd >node webpack.config.js;  then use below in path var;  
                            //  e.g. C:\2020-edu\react\react_udemy\indecision-app\public
// ch 133 - convert from exporting an object to export a function instead;  
module.exports = (env) => {
    const isProduction = env === 'production';  // env is set in package.json, e.g. --env production
    const CSSExtract = new ExtractTextPlugin('styles.css'); // the file we want to save the css in 
    return {    
        entry: './src/app.js', 
        output: {
            path: path.join(__dirname, 'public'),       // needs to be an absolute path
            filename: 'bundle.js'
        }, 
        module: {
            rules: [{
                loader: 'babel-loader', 
                test: /\.js$/,               // checks file ends in .js 
                exclude: /node_modules/     // do NOT run babel through the files in node_modules 
            }, {
                test: /\.s?css$/,       // checks for .scss & .css files 
                use: CSSExtract.extract({    // tells webpack when you see this stuff, extract it;  sourceMap gives correct line # in Chrome
                    use: [{loader: 'css-loader', options: {sourceMap: true}  }, 
                          {loader: 'sass-loader', options: {sourceMap: true} } 
                         ]
                })
            }]
        }, // plugins allows you to specify all 3rd party webpack plugins that should have access to change existing webpack build
        plugins: [
            CSSExtract 
        ],        
        
        // source-map takes a lot more time to build (is external file), but much smaller;  
        devtool: isProduction ? 'source-map' : 'inline-source-map',  // 'inline-source-map',  // 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')  // config Webpack Dev server w/ path to public folder;  
        }
    }
}; 