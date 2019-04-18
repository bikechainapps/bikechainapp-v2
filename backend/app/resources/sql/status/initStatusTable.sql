CREATE TABLE IF NOT EXISTS status (
    status_id serial PRIMARY KEY,
    status varchar NOT NULL
);

INSERT INTO status (status_id, status)
VALUES
    (1,'waiting'),
    (2,'station_available'),
    (3,'arrived'),
    (4,'cancelled'),
    (5,'no_show'),
    (6,'flushed')
;