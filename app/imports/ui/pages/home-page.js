import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  contactsList() {
    return Contacts.find();
  },
});
