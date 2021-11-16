// const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateScale75Table1637053813903 {
    async up(queryRunner) {
        await queryRunner.query(
            `
            CREATE TABLE IF NOT EXISTS scale75_paints (
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
            'DROP TABLE scale75_paints;'
        );
    }
};
        