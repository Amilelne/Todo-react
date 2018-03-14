# React Starter Template

ReactJS project quick start. Created for `NEWBIE`.
## Table of Contents
* [Install the template](#install-the-template)
* [Running the app](#running-the-app)
* [Files structure](#files-structure)
* [Packages](#packages)
  * [Dependencies](#dependencies)
  * [Development dependencies](#development-dependencies)
* [Alias config](#alias-config)
* [Project configure](#project-configure)

## Install the template
#### 1. Download the template
Use command 
```
git clone https://github.com/williele/react-starter.git
```
or download from [GitHub](https://github.com/williele/react-starter)

#### 2. Remove git history
Delete folder `.git`

#### 3. Install package 
User command `npm install`

#### 4. Initial for new git repository (Optional)
1. Inital and commit
```bash
git init
git add .
git commit -m "Initial Commit"
```
2. Push to your repository
```bash
git remote add origin <your-github-repository-url>
git push -u --force origin master
```

## Running the app
#### Build
```bash
# Development
npm run build:dev
# Production
npm run build:prod
```
#### Build + Watch
```bash
# Development
npm run watch:dev
# Production
npm run watch:prod
```
#### Serve on server as development
```bash
npm start
```

## Files Structure
```
react-starter/
  ├── config/
  |     ├── webpack.common.js                     * Webpack common config
  |     ├── webpack.dev.js                        * Webpack development config
  |     └── webpack.prod.js                       * Webpack production config
  |   
  ├── src/                                        * Source code where compile to javascript
  |     ├── app/                                  * WebApp: folder
  |     |     ├── components/                     * Inital Components folder
  |     |     |     └── title.component.jsx       * Simple example component
  |     |     |
  |     |     ├── pages/                          * Initial Pages folder
  |     |     |     ├── another.page.jsx          * Simple example page component
  |     |     |     └── home.page.jsx             * Simple example page component
  |     |     |
  |     |     └── app.component.jsx               * App main component
  |     |
  |     ├── index.html                            * Where to generate the index page
  |     ├── main.jsx                              * The entry file of app
  |     └── styles.scss                           * Where to compile to index style file
  |
  ├── alias.json                                  * Where for quick define resolve.alias
  ├── config.json                                 * Where to simply setting project config
  └── package.json                                * Where npm uses to manage dependencies
```

## Packages
#### Dependencies
```
react                               * A JavaScript library for building user interfaces
react-dom                           * This package serves as the entry point of the DOM-related rendering paths
react-router-dom                    * Collection of navigational components that compose declaratively with your application
```
#### Development dependencies
```
webpack                             * Build tool for javascript
webpack-cli                         * Webpack command package
webpack-dev-server                  * Live server compile and review on localhost for webpack
webpack-merge                       * Merge webpack configure

babel-core                          * ES6 Compiler for javascript
babel-loader                        * Babel loader for webpack
babel-plugin-transform-react-jsx    * Babel plugin which transform jsx dom to react javascript

style-loader                        * Adds CSS to the DOM by injecting a <style> tag
css-loader                          * Css loader
sass-loader                         * Loads a SASS/SCSS file and compiles it to CSS
node-loader                         * Library provides binding for Node.js to LibSass

file-loader                         * Instructs webpack to emit the required object as file and to return its public URL
url-loader                          * Loads files as `base64` encoded URL

clean-webpack-plugin                * Remove build directory before build

html-webpack-plugin                 * Generate HTML files to serve webpack bundles
base-href-webpack-plugin            * Inserting base href tag in head block
```

## Alias config
Create aliases to `import` or `require` certain modules more easily. You can quickly set up alias tree for webpack in `alias.json` file. The root directory of alias is `src`. Learn more at [Official Document](https://webpack.js.org/configuration/resolve/#resolve-alias)

## Project configure
Simply configure project parameter for building and developing in `config.json` file.
```
{
  "outputDir": "dist",              * Build directory
  "devPort": 4200                   * Development server port
}
```