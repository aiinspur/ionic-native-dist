export interface YztParams {
    appid: String;
    uname: String;
    pwd: String;
}
export declare class YztPlugin {
    static callYzt(params: YztParams): Promise<{}>;
}
