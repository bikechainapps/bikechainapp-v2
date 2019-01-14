
-- Create tables
CREATE TABLE IF NOT EXISTS status (
    status_id serial PRIMARY KEY,
    status VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contact (
    contact_id serial PRIMARY KEY,
    callout_name VARCHAR NOT NULL,
    contact_num INTEGER
);

CREATE TABLE IF NOT EXISTS  waitlist (
    contact_id serial REFERENCES contact(contact_id),
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