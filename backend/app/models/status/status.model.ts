import BaseModel from '../base.model';

class StatusModel extends BaseModel {
    
    constructor() {
        super();
        this.initializeTable("initStatusTable.sql");
    }
    
    public getStatusByStatusId(statusId: number): Status | null {
        return null;
    }
}

interface Status {
    statusId: number,
    status: string
}

let statusModel: StatusModel = new StatusModel();

export {
    statusModel,
    Status
};