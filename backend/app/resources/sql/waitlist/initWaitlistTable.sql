CREATE TABLE IF NOT EXISTS  waitlist (
    contact_id varchar REFERENCES contact(contact_id),
    status_id serial REFERENCES status(status_id),
    timestamp timestamp NOT NULL
);

-- Create waitlist view
CREATE OR REPLACE VIEW daily_waitlist AS
    SELECT callout_name, contact_num, status
    FROM waitlist
        JOIN status USING (status_id)
        JOIN contact USING (contact_id)
    WHERE timestamp::date = CURRENT_DATE
;