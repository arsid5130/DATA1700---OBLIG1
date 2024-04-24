CREATE TABLE billett
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    film VARCHAR(100) NOT NULL,
    antall INT NOT NULL,
    fornavn VARCHAR(50) NOT NULL,
    etternavn VARCHAR(50) NOT NULL,
    telefonnummer VARCHAR(20) NOT NULL,
    epostadresse VARCHAR(100) NOT NULL
);
