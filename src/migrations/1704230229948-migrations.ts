import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704230229948 implements MigrationInterface {
    name = 'Migrations1704230229948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "music" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "songName" character varying NOT NULL, "artist" character varying NOT NULL, "difficulty" integer NOT NULL, "data" bytea NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "music" ADD CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "music" DROP CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72"`);
        await queryRunner.query(`DROP TABLE "music"`);
    }

}
