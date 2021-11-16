// const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateVallejoTable1637053623225 {
    async up(queryRunner) {
        await queryRunner.query(
            `
            CREATE TABLE vallejo_paints (
                id INTEGER PRIMARY KEY,
                catalog_number TEXT,
                trade_name TEXT NOT NULL,
                series TEXT,
                image_url TEXT
            );
            `
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            'DROP TABLE vallejo_paints;'
        );
    }
};
        