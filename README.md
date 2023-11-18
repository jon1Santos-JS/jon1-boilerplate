### Install

* First, install dev dependencies
```javascript
npm install --save-dev sass @types/prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks prettier stylelint stylelint-config-sass-guidelines stylelint-config-standard-scss stylelint-order stylelint-prettier
```
* Second, install base dependencies
```javascript
npm install postcss-flexbugs-fixes postcss-preset-env postcss-pxtorem
```

### NextJs Prerequisites
* app/layout.tsx (next/app) / pages/_app.tsx (next/page)
```javascript
import '../../styles/sass/index.scss';
```


### Raw Prerequisites

* install the sass watching extension
* set 'sass parse config' on 'vscode json settings file'
* push the extension up to watch your sass file

### PostCSS-plugins

* postcss-pxtorem
* postcss-preset-env
* postcss-flexbugs-fixes


