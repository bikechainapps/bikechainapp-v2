import BaseModel from '../base.model';
import db from '../database';

class ContactModel extends BaseModel {
    
    constructor() {
        super();
        this.initializeTable("initContactTable.sql");
    }
    
    public getContactByContactId(contactId: string): Contact | null {
        return null;
    }

    public putContact(contact: Contact) {
        db.none("INSERT INTO contact VALUES ($contactId, $calloutName, $contactNum)", {
            $contactId: contact.contactId,
            $calloutName: contact.calloutName,
            $contactNum: contact.contactNum 
        }).catch(() => {
            throw new Error("could not add contact");
        });
    }
}

interface Contact {
    contactId: string,
    calloutName: string,
    contactNum: string
}

let contactModel: ContactModel = new ContactModel();

export {
    contactModel,
    Contact
};