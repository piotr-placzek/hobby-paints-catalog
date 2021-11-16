// const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateArmyPainterTable1637053746626 {
    async up(queryRunner) {
        await queryRunner.query(
            `
            CREATE TABLE IF NOT EXISTS army_painter_paints (
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
            'DROP TABLE army_painter_paints;'
        );
    }
};
        