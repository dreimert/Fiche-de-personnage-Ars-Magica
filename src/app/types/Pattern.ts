export interface Pattern<T> {
  isPattern() : boolean;
  include(other: T) : boolean;
  exclude(other: T) : boolean;
}
