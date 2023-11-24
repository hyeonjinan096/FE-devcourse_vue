const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.vue', '.js'], //확장자명 생략
        alias: {
            '~': path.resolve(__dirname,'src') //경로 별칭
        }
    }, 
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [{
            test: /\.vue$/, 
            use: 'vue-loader'
        },
        {
            test:/\.s?css$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ] //먼저 실행되야하는 것을 나중에 기입
        }
    ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HTMLPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CopyPlugin({ //복사 원하는 폴더 지정
            patterns: [
                {from: 'static'} //to 'dist'생략
            ]
        })
    ],
    devServer: {
        port: 8080 //개발 서버의 port번호 변경 가능
    }
}


//파일 \.vue$
//정규표현식에서 .은 기능을 가진 한 문자를 나타낸다. 
//글자로 해석 될려면 \를 사용해야한다. 
//$는 vue로 끝나는 파일을 의미한다. 

//vue파일은 vue-loader를 통해 웹팩이 동작시킬 거다. 
//웹팩은 자바스크립트 밖에 동작시키지 못한다. 