import type SField from './SField'

export default class SSection {
  id: string

  title: string

  fields: SField[]

  constructor(id: string, title: string, fields: SField[] = []) {
    this.id = id
    this.title = title
    this.fields = fields
  }
}
