import { isObservableArray } from 'mobx';

export function toArray<T>(value?: T | T[] | null): T[] {
  if (value === undefined || value === null) {
    return [];
  }

  return checkArray(value) ? value : [value];
}

export function checkArray<T>(value?: T | T[] | null): value is T[] {
  if (isObservableArray(value) || Array.isArray(value)) {
    return true;
  }
  return false;
}
