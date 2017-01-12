"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
var plugin_1 = require("./plugin");
/**
 * @name YztPlugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { YztPlugin } from 'ionic-native';
 *
 * YztPlugin.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var YztPlugin = (function () {
    function YztPlugin() {
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    YztPlugin.coolMethod = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return YztPlugin;
}());
__decorate([
    plugin_1.Cordova()
], YztPlugin, "coolMethod", null);
YztPlugin = __decorate([
    plugin_1.Plugin({
        pluginName: 'YiZhangTong',
        plugin: 'com.pingan.yzt',
        pluginRef: 'yzt',
        platforms: ['Android', 'iOS']
    })
], YztPlugin);
exports.YztPlugin = YztPlugin;
//# sourceMappingURL=yzt-plugin.js.map