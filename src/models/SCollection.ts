import type SEntry from './SEntry'

export default class SCollection {
  id: string

  title: string

  image: string

  entries: SEntry[]

  constructor(id: string, title: string, image: string, entries: SEntry[]) {
    this.id = id
    this.title = title
    this.image = image
    this.entries = entries
  }
}
