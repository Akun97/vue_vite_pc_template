interface Result {
  code: string | number;
  msg: string;
}

interface ResultData<T = any> extends Result {
  data?: T;
}