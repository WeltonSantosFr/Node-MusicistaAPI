import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileImage1708584086155 implements MigrationInterface {
    name = 'AddProfileImage1708584086155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "profileImagePath" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profileImagePath"`);
    }

}
