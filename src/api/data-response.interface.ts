export interface DataResponse<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
}
