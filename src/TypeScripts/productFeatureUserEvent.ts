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

export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext) {
  log.debug('beforeLoad', `${context.type} product feature record ${context.newRecord.id}`);
  if (context.type == context.UserEventType.VIEW || context.type == context.UserEventType.EDIT) {
    const bannerTitle   = 'Record is out of date';
    const bannerMessage = 'Please update the content of this product feature description';
    context.form.addPageInitMessage({ type: message.Type.WARNING, title: bannerTitle, message: bannerMessage });
  }
}
