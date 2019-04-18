import { Router, Request, Response } from "express";
import { Contact } from "../models/contact/contact.model";
import contactService from "../services/contact/contact.service";
import waitlistService from "../services/waitlist/waitlist.service";

const router: Router = Router();

router.get("/register-user", (req: Request, res: Response) => {
    let contact: Contact = {
        contactId: Date.now().toString(),
        calloutName: req.body.calloutName,
        contactNum: req.body.contactNum
    };

    try {
        contactService.addContact(contact);
        waitlistService.addContactToWaitlist(contact.contactId);
    } catch (error) {
        res.status(500).send(error);
    }
});

export const ApiController: Router = router;
