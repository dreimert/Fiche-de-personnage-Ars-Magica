import {Pattern} from './Pattern';
import {Specifiable} from './Specifiable';

export interface Selectable<T, U> extends Pattern<T>, Specifiable<U> {
}
