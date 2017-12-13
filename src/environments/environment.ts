// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAbQNdyj3z6Czw2ujQtuC8afgLj5mjHLfo",
    authDomain: "fbdemo-angular.firebaseapp.com",
    databaseURL: "https://fbdemo-angular.firebaseio.com",
    projectId: "fbdemo-angular",
    storageBucket: "",
    messagingSenderId: "228840765096"
  }
};
