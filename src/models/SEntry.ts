import type SLabel from './SLabel'
import type SSection from './SSection'

export default class SEntry {
  id: string

  sections: SSection[]

  labels: SLabel[]

  title: string

  image: string

  constructor(
    id: string,
    title: string,
    image: string,
    sections: SSection[] = [],
    labels: SLabel[] = []
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.sections = sections
    this.labels = labels
  }
}
