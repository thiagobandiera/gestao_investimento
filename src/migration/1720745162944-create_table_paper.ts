import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePaper1720745162944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'paper',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'segment',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'start_date',
                  type: 'timestamp',
                  isNullable: false,
                },
                {
                  name: 'manager',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'administrator',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                    name: 'date_com',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'date_payment',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                  onUpdate: 'CURRENT_TIMESTAMP',
                },
              ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('paper');
    }

}
