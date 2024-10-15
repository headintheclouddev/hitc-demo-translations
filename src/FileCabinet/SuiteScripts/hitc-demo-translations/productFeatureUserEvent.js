/**
 * productFeatureUserEvent.ts
 *
 * @NScriptName Product Feature - User Event
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.beforeLoad = beforeLoad;
    function beforeLoad(context) {
        log.debug('beforeLoad', `${context.type} product feature record ${context.newRecord.id}`);
    }
});
