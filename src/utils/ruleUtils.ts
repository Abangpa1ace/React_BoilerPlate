import { isEmpty } from 'lodash';

export const required = (value): boolean => {
  switch (typeof value) {
    case 'string':
      return !!value.trim();
    case 'object':
      return value === null
        ? false
        : Array.isArray(value)
        ? !!value.length
        : isEmpty(value);
    case 'number':
      return value === 0 ? true : !!value;
    case 'boolean':
      return !!value || value === false;
    default:
      return !!value;
  }
};

export const email = (value: string): boolean =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  );

const rules = {
  required,
  email,
};

export default rules;
