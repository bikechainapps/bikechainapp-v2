import { WaitlistItem, waitlistModel } from "../../models/waitlist/waitlist.model";

class WaitlistService {

    public addContactToWaitlist(contactId: string) {
        let waitlistItem: WaitlistItem = {
            contactId: contactId,
            statusId: 1,
            timestamp: Date.now()
        };

        waitlistModel.putWaitlistItem(waitlistItem);
    }
}

let waitlistService: WaitlistService = new WaitlistService();
export default waitlistService;