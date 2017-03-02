"use strict";
var YztPlugin = (function () {
    function YztPlugin() {
    }
    YztPlugin.callYzt = function (params) {
        return new Promise(function (resolve, reject) {
            uuu.coolMethod(params, function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    return YztPlugin;
}());
exports.YztPlugin = YztPlugin;
//# sourceMappingURL=yzt.js.map