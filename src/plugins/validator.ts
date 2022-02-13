import rules from '@/utils/ruleUtils';

const validator = (value: any, validate: string[]): ValidatorStatus => {
  const errors = validate.filter((v) => rules[v] && !rules[v](value));
  return { valid: !errors.length, errors, error: errors[0] };
};

export default validator;
