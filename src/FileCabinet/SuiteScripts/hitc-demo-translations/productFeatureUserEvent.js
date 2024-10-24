/**
 * productFeatureUserEvent.ts
 *
 * @NScriptName Product Feature - User Event
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log", "N/ui/message"], function (require, exports, log, message) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.beforeLoad = beforeLoad;
    function beforeLoad(context) {
        log.debug('beforeLoad', `${context.type} product feature record ${context.newRecord.id}`);
        if (context.type == context.UserEventType.VIEW || context.type == context.UserEventType.EDIT) {
            const bannerTitle = 'Record is out of date';
            const bannerMessage = 'Please update the content of this product feature description';
            context.form.addPageInitMessage({ type: message.Type.WARNING, title: bannerTitle, message: bannerMessage });
        }
    }
});
