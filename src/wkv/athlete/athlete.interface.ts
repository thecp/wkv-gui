export interface Athlete {
  id?: number;
  surname: string;
  forename: string;
  year: number;
  gender: string; // TODO enum?
  clubId: number; // TODO this is not enough... but works for now
};
