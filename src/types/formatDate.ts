type Data = {
  date: string | Date;
  format: string;
};

export interface IFormatDate {
  format: (data: Data) => string;
}
