/**
 * productFeatureUserEvent.ts
 *
 * @NScriptName Product Feature - User Event
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */

import {EntryPoints} from "N/types";
import log = require('N/log');
import message = require('N/ui/message');
import translation = require('N/translation');

export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext) {
  log.debug('beforeLoad', `${context.type} product feature record ${context.newRecord.id}`);
  if (context.type == context.UserEventType.VIEW || context.type == context.UserEventType.EDIT) {
    const bannerTitle   = translation.get({ collection: 'custcollection_hitc_demo', key: 'record_out_of_date' });
    const bannerMessage = 'Please update the content of this product feature description';
    context.form.addPageInitMessage({ type: message.Type.WARNING, title: bannerTitle, message: bannerMessage });
  }
}
