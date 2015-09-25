## Herman-Scheer Toolbelt
Folder structure and task implementation of a modular development environment for Herman-Scheer

- Site: [Herman Scheer Toolbelt]

The framework incorporates the following assets:

- Engine/Server: [Node.js]
- Front-End Framework: [Foundation by Zurb]
- Task Runner: [Gulp.js]

Folder Structure
```
├── toolbelt/
│   ├── readme.md
│   ├── gulpfile.babel.js
│   ├── package.json
│   ├── server.js
│   ├── shims.js
│   ├── config
│   │   ├── assets
│   │   │   ├── default.js
│   │   ├── env
│   │   │   ├── default.js
│   │   ├── lib
│   │   │   ├── app.js
│   ├── modules
│   │   ├── core
│   │   │   ├── client
│   │   │   │   ├── img
│   │   │   │   ├── js
│   │   │   │   ├── sass
│   │   │   │   ├── svg
│   │   │   │   ├── views
│   │   ├── etc....
│   ├── tasks
```

### config
- The config folder holds the project settings for the small express server as well as the asset routes for the gulp tasks

#### config/assets
- The assets folder holds the routes necessary for the gulp tasks to properly work.

#### config/env
- The env folder holds the settings necessary for browser sync as well as any other server side tasks to work.

#### config/lib
- The lib folder holds the script for the small express.js server to run.

### modules
- The modules folder holds any new modules you'll be building, the folder has two sub-sections (client, server)

#### modules/client
- The client folder holds any front-facing code. This folder consists of 5 mandatory folders (img,js,sass,svg and views)

#### modules/client/core
- The core folder holds settings for our front-facing code, such as foundation and browserify requires

### How to start
```
$ npm install
$ gulp build
$ gulp
```

### How to create a new module
_Inside toolbelt folder_

1. Create mandatory folders and files
```
$ mkdir -p moduleName/client/{img,js,sass,svg,views}
$ touch moduleName/client/{js/moduleName.js,sass/moduleName.sass,views/moduleName.jade}
```
2. Register your module's javascript in package.json browser field (see example article)
3. Require module in core.js
4. You're set.




[Node.js]:http://nodejs.org/
[Foundation by Zurb]:http://foundation.zurb.com/
[Gulp.js]:http://gulpjs.com/
[Herman Scheer Toolbelt]://bitbucket.org/herman-scheer/toolbelt