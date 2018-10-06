import {ISubject} from './subject';

export interface IWeek {
  Id: string;
  Description: string;
  Subjects: ISubject[];
}
