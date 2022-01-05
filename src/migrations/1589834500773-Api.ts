import {MigrationInterface, QueryRunner} from "typeorm";

export class Api1589834500773 implements MigrationInterface {
    name = 'Api1589834500773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `user_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`", undefined);
    }

}
