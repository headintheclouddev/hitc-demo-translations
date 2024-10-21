/**
 * productFeatureUserEvent.ts
 *
 * @NScriptName Product Feature - User Event
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log", "N/ui/message", "N/translation"], function (require, exports, log, message, translation) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.beforeLoad = beforeLoad;
    function beforeLoad(context) {
        log.debug('beforeLoad', `${context.type} product feature record ${context.newRecord.id}`);
        if (context.type == context.UserEventType.VIEW || context.type == context.UserEventType.EDIT) {
            context.form.addPageInitMessage({
                type: message.Type.WARNING,
                title: translation.get({ collection: 'custcollection_hitc_demo', key: 'record_out_of_date' })(),
                message: translation.get({ collection: 'custcollection_hitc_demo', key: 'please_update' })(),
            });
        }
    }
});
