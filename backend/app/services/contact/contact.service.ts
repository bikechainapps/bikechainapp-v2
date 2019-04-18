import { Contact, contactModel } from "../../models/contact/contact.model";

class ContactService {
    public addContact(contact: Contact) {
        contactModel.putContact(contact);
    }
}

let contactService: ContactService = new ContactService();
export default contactService;