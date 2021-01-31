import { Project } from "./Project";

export interface Language {
  header?: object,
  about?: {
    title?: string,
    description?: string,
    img?: string,
  },

  project: {
    title: string,
  },

  projects?: {
    [id: string]: Project,
  },

  skills?: {
    [id: string]: object,
  },

  contact?: {
    title?: string,
    descriptions?: string,
  }
}

export interface Languages {
  [id: string]: Language,
}
