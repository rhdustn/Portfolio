# Create-React-App

```sh
npm install -D tailwindcss postcss autoprefixer style-loader css-loader postcss-loader
```

```sh
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'], // 이부분추가
    theme: {
        extend: {},
    },
    plugins: [],
}
```

```css
// src/App.css

@tailwind base;
@tailwind components;
@tailwind utilities;

// 이하 생략
```

```jsx
// index.js
```

## webpack loader 설정

필요한 패키지 설치

```sh
npm install tailwind-cra-webpack-plugin
```

webpack.config.js 파일생성

```

```

## icons

```sh
npm install react-icons --save
```



https://velog.io/@bami/React-GitHub-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0

```sh
npm install gh-pages
```

```json
build:{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```
