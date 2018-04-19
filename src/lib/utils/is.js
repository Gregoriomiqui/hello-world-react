export function isArray(variable){
  return variable instanceof Array;
}

export function isDefine(variable){
  return typeof variable !=='undefined' && variable !== null;
}

export function isFunction(variable){
  return typeof variable === 'function';
}

export function isObject(variable){
  return isDefined(variable) && typeof variable === 'object';
}
