## File Structure of App
```
yuxi-global-testMobile/
|-- resources/
|    |    ├── android/
|    |    |     ├── favicon.ico
|    |    ├── ios/
|    |    |     ├── favicon.ico
|    |    ├── README.md
|    |    ├── icon.png
|    |    ├── splash.png
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |
|    |-- assets/
|    |    ├── icon/
|    |    |     ├── favicon.ico
|    |    ├── imgs/
|    |    |     ├── logo.png
|    |    |     ├── yuxiLogo.png
|    |
|    |-- pages/                          * Contains all of our pages
│    │    ├── home/                      * Home tab page
│    │    │    ├── home.html             * Home template
│    │    │    ├── home.module.ts        * HomePageModule module
│    │    │    └── home.scss             * HomePage stylesheet
│    │    │    └── home.ts               * HomePage code
│    │    │
│    │    ├── login/                     * Login page
│    │    │    └── login.html            * Login template
│    │    │    └──login.module.ts        * LoginPageModule module
│    │    │    └── login.scss            * LoginPage stylesheet
│    │    │    └── login.ts              * LoginPage code
│    │    │
│    │    │── posts/                     * Posts page
|    |    |    ├── detail-posts/         * DetailPosts template
│    │    │    └── detail-posts.module.ts* DetailPostsPageModule module   
│    │    │    └── detail-posts.scss     * DetailPosts stylesheet
│    │    │    └── detail-posts.html     * DetailPosts template
│    │    │-- 
│    │    │    └── posts.html            * Posts template
│    │    │    └── posts.module.ts       * PostsPageModule module
│    │    │    └── posts.scss            * PostsPage stylesheet
│    │    │    └── posts.ts              * PostsPage code
│    │    │
│    │    │── profile/                   * Profile page
│    │    │    └── profile.html          * Profile template
│    │    │    └── profile.module.ts     * ProfilePageModule module
│    │    │    └── profile.scss          * ProfilePage stylesheet
│    │    │    └── profile.ts            * ProfilePage code
│    │    │
│    │    │── register-users/            * RegisterUsers page
│    │    │    └── register-users.html   * RegisterUsers template
│    │    │    └── register-users.module.ts * RegisterUsersPageModule module
│    │    │    └── register-users.scss   * RegisterUsersPage stylesheet
│    │    │    └── register-users.ts     * RegisterUsersPage code
│    │    │
|    |
│    ├── providers/                       * Contains all Injectables
|    |    ├── account/
|    |    |     ├── account.service.ts   * Account method
|    |    ├── service-call/
|    |    |     ├── api-service.ts       * fetch data
│    ├── theme/                          * App theme files
|    |     ├── variables.scss            * App Shared Sass Variables
|    |
|    |-- index.html
|
|
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * git ignore file
├── android-debug.apk                   * apk android file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json.lock                   * Defines our JavaScript dependencies lock
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
├── tslint.json                         * Defines the rules for the TypeScript linter
├── README.md                           * This file
```
