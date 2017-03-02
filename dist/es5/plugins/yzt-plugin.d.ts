export interface YztParams {
    appid: String;
    uname: String;
    pwd: String;
}
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
export declare class YztPlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    static coolMethod(params: any): Promise<any>;
}
