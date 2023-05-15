import queryString from 'query-string';
import _ from 'underscore';

export const routeFilter = (params: any) => {
  const str = queryString.stringify(params);
  return str;
};
