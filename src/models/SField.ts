import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'fields',
})
export default class SField extends Model<SField> {
  @AllowNull(false)
  @Column(DataType.TEXT)
  type!: string

  @Column(DataType.TEXT)
  title!: string

  @Column(DataType.TEXT)
  value!: string
}
