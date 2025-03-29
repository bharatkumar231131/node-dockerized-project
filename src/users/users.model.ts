import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'users'})

export class User extends Model<User>{
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    age: number;

}