import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserEntity1708831975994 implements MigrationInterface {
    name = 'ChangeUserEntity1708831975994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "profileImagePath" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "profileImagePath" SET NOT NULL`);
    }

}
