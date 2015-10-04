
/// <reference path="../../typings/requirejs/require.d.ts" />
/// <reference path="../core.ts" />

 export class AlertApp {

     core: any;

     constructor() {

         this.core = new (require("../core").Core)();
     }

     public initialize() {
         this.core.register("alert", require("../modules/alert").Alert);
         this.core.register("firstload", require("../modules/firstload").FirstLoad);
         this.core.startAll();
     }
 }


var app = new AlertApp();
app.initialize();