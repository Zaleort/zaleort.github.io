import Action from "./Action";

export interface Project {
  title: string,
  description: string,
  img: string,
  actions: Action[],
}