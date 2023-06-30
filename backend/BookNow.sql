USE fichame;

INSERT INTO company(title, nif, active, ccc, salaryperhour, logo, hidden) VALUES("Empresa", "1", 1, "ccc", 1500, "-", 1);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'user',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Usuario',
    'user@example.com',
    '123 Main St',
    '1234567890',
    160,
    '123456789',
    '2023-05-23',
    160,
    1,
    1,
    '1980-05-10',
    43,
    '123456789012',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'admin',
    '["ROLE_USER","ROLE_ALMACEN", "ROLE_ADMIN"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Administrador',
    'admin@example.com',
    '123 Oak Street',
    '1234567890',
    160,
    '123456789',
    '2023-06-23',
    160,
    0,
    1,
    '1985-07-12',
    38,
    '123456789012',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'almacen',
    '["ROLE_USER", "ROLE_ALMACEN"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Almacen',
    'almacen@example.com',
    '456 Maple Avenue',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    1,
    '1990-05-09',
    33,
    '987654321098',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'emma_jackson',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Emma Jackson',
    'emma.jackson@example.com',
    '123 Elm Street',
    '1234567890',
    160,
    '123456789',
    '2023-06-23',
    160,
    1,
    2,
    '1995-03-15',
    28,
    '123456789012',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'david_hernandez',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'David Hernandez',
    'david.hernandez@example.com',
    '456 Oak Avenue',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    0,
    1,
    '1988-09-22',
    33,
    '987654321098',
    2
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'olivia_martinez',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Olivia Martinez',
    'olivia.martinez@example.com',
    '789 Pine Lane',
    '5555555555',
    160,
    '555555555',
    '2023-06-23',
    160,
    1,
    0,
    '1992-12-01',
    31,
    '555555555555',
    3
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'sophia_adams',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Sophia Adams',
    'sophia.adams@example.com',
    '567 Maple Court',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    2,
    '1990-07-12',
    33,
    '987654321098',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'william_clark',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'William Clark',
    'william.clark@example.com',
    '789 Oak Street',
    '5555555555',
    160,
    '555555555',
    '2023-06-23',
    160,
    0,
    1,
    '1985-09-17',
    38,
    '555555555555',
    2
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'isabella_morris',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Isabella Morris',
    'isabella.morris@example.com',
    '123 Pine Street',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    0,
    '1993-04-28',
    28,
    '987654321098',
    3
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'ava_carter',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Ava Carter',
    'ava.carter@example.com',
    '456 Elm Street',
    '5555555555',
    160,
    '555555555',
    '2023-06-23',
    160,
    1,
    2,
    '1991-11-05',
    32,
    '555555555555',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'henry_wilson',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Henry Wilson',
    'henry.wilson@example.com',
    '789 Maple Avenue',
    '1234567890',
    160,
    '123456789',
    '2023-06-23',
    160,
    0,
    1,
    '1996-08-10',
    27,
    '123456789012',
    2
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'mia_anderson',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Mia Anderson',
    'mia.anderson@example.com',
    '123 Oak Street',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    0,
    '1994-02-18',
    29,
    '987654321098',
    3
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'sophie_thompson',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Sophie Thompson',
    'sophie.thompson@example.com',
    '567 Elm Street',
    '1234567890',
    160,
    '123456789',
    '2023-06-23',
    160,
    1,
    2,
    '1989-06-15',
    34,
    '123456789012',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'oliver_wright',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Oliver Wright',
    'oliver.wright@example.com',
    '789 Maple Street',
    '5555555555',
    160,
    '555555555',
    '2023-06-23',
    160,
    0,
    1,
    '1997-09-22',
    26,
    '555555555555',
    2
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'emily_johnson',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Emily Johnson',
    'emily.johnson@example.com',
    '123 Oak Avenue',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    0,
    '1995-04-28',
    28,
    '987654321098',
    3
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'mia_thomas',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Mia Thomas',
    'mia.thomas@example.com',
    '456 Pine Lane',
    '1234567890',
    160,
    '123456789',
    '2023-06-23',
    160,
    1,
    2,
    '1993-08-15',
    30,
    '123456789012',
    1
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'ethan_rodriguez',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Ethan Rodriguez',
    'ethan.rodriguez@example.com',
    '789 Elm Street',
    '5555555555',
    160,
    '555555555',
    '2023-06-23',
    160,
    0,
    1,
    '1987-12-10',
    36,
    '555555555555',
    2
);

INSERT INTO user (company_id, username, roles, password, full_name, email, address, phone_number, monthlytime, dni, reg_date, naf, driver, status, birthdate, age, social_security, agreement)
VALUES (
    1,
    'chloe_harris',
    '["ROLE_USER"]',
    '$2y$13$4.Oc6QWauDqbLawv5d2pyu.w1/BHVDuMrurbaXwJcRA08rV.joV/C',
    'Chloe Harris',
    'chloe.harris@example.com',
    '123 Maple Street',
    '9876543210',
    160,
    '987654321',
    '2023-06-23',
    160,
    1,
    0,
    '1992-05-28',
    31,
    '987654321098',
    3
);
















INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-05-22', '2023-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-06-22', '2023-07-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-04-22', '2023-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-06-22', '2023-08-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-01-22', '2023-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2022-05-22', '2022-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2024-05-22', '2024-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-06-22', '2023-07-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-07-22', '2023-07-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-08-22', '2023-08-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-06-22', '2023-09-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-05-01', '2023-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-02-01', '2023-06-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2018-07-22', '2018-07-23', 1, 2, 3.5, 2);

INSERT INTO event(company_id, name, schedule, link_information, link_form, workers_number, start_date, end_date, status, workers_available, distance, drivers_number)
VALUES (1, 'Evento', 300, 'link', 'link', 6, '2023-07-22', '2023-07-23', 1, 2, 3.5, 2);