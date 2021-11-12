// const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateGamesWorkshopTable1636724130553 {
    async up(queryRunner) {
        await queryRunner.query(
            `
            CREATE TABLE games_workshop_paints (
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
            'DROP TABLE games_workshop_paints;'
        );
    }
};
