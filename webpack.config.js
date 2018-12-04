const path = require('path')
//const extractCss = require('mini-css-extract-plugin')

module.exports ={
    mode: 'development',
    entry: {
        main: './src/main.ts',
       // polyfill: '@babel/polyfill'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        /*new extractCss({
            filename: "[name].css"    
        })*/
    ],
    devtool:"source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules:[{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,          
            loader: 'babel-loader',
            query: {
                presets: ['env','react']              
            }            
        },{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },{
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }/*,{
            test: /\.(s*)css$/,
            use: [ extractCss.loader , "css-loader", "sass-loader"]
        }*/]
    },
    externals: {
        lodash:{
            commonjs: "lodash",
            amd: "lodash",
            root: "_" // indicates global variable
        },
        "react":"React",
        "react-dom": "ReactDOM",
        "mobx": "mobx",
        "mobx-react": "mobxReact"
    }    
}