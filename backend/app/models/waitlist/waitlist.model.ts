import BaseModel from '../base.model';
import db from '../database';

class WaitlistModel extends BaseModel {
    
    constructor() {
        super();
        this.initializeTable("initWaitlistTable.sql");
    }
    
    public getWaitlistItemByContactId(contactId: string): WaitlistItem | null {
        return null;
    }

    public getCurrentWaitlist(): CurrentWaitlistItem[] {
        return [];
    }

    public putWaitlistItem(waitlistItem: WaitlistItem) {
        db.none("INSERT INTO waitlist VALUES ($contactId, $statusId, $timestamp)", {
            $contactId: waitlistItem.contactId,
            $statusId: waitlistItem.statusId,
            $timestamp: waitlistItem.timestamp 
        }).catch(() => {
            throw new Error("could not add contact to waitlist");
        });
    }
}

interface WaitlistItem {
    contactId: string,
    statusId: number,
    timestamp: number
}

interface CurrentWaitlistItem {
    calloutName: string,
    contactNum: string,
    status: string
}

let waitlistModel: WaitlistModel = new WaitlistModel();

export {
    waitlistModel,
    WaitlistItem,
    CurrentWaitlistItem
};