import dayjs from "dayjs";

import { IFormatDate } from "@/types/formatDate";

export class DayJsAdapter implements IFormatDate {
  format(data: any) {
    return dayjs(data.date).format(data.format);
  }
}
