// Type definitions for ember-awesome-macros 3.1
// Project: https://github.com/kellyselden/ember-awesome-macros#readme
// Definitions by: David Nahodil <https://github.com/dnahodil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Ember from 'ember';
import PromiseProxyMixin from 'ember__object/promise-proxy-mixin';

type ComputedProperty = Ember.ComputedProperty<any>
type MacroArgument = string | ComputedProperty;
type GroupByResult = Array<{
    key: string,
    value: any,
    items: any[]
}>

export const math: {
    string: (...args: MacroArgument[]) => ComputedProperty
}

export function add(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function and(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): any;
export function bool(arg: MacroArgument): boolean;
export function collect(arg1: MacroArgument, ...remainingArgs: Array<MacroArgument>): Array<any>;
export function computed(key: string, methods: { get: (value: any) => any, set: (newVale: any, value: any) => any }): ComputedProperty;
export function conditional(condition: MacroArgument, trueValue: any, falseValue: any): any;
export function defaultTrue(arg: MacroArgument): any;
export function difference(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function divide(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function eq(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function equal(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function getBy(arg1: MacroArgument, arg2: MacroArgument): any;
export function gt(arg1: MacroArgument, arg2: MacroArgument): boolean;
export function gte(arg1: MacroArgument, arg2: MacroArgument): boolean;
export function hash(arg: { string: MacroArgument }): object;
export function instanceOf(arg: MacroArgument, type: any): boolean;
export function isHtmlSafe(arg: MacroArgument): boolean;
export function isEmpty(arg: MacroArgument): boolean;
export function notEmpty(arg: MacroArgument): boolean;
export function lt(arg1: MacroArgument, arg2: MacroArgument): boolean;
export function lte(arg1: MacroArgument, arg2: MacroArgument): boolean;
export function mod(arg1: MacroArgument, arg2: MacroArgument): number;
export function multiply(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function nand(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function neq(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function nor(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function not(arg: MacroArgument): boolean;
export function notEqual(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function number(arg: MacroArgument): number;
export function or(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): any;
export function parseFloat(arg: MacroArgument): number;
export function parseInt(arg: MacroArgument): number;
export function product(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function quotient(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function raw(value: string): ComputedProperty;
export function subtract(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function sum(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): number;
export function tag(string: ReadonlyArray<string>, ...args: string[]): string;
export function toStr(arg: MacroArgument): string;
export function toString(arg: MacroArgument): string;
export function typeOf(arg: MacroArgument): string;
export function unless(condition: MacroArgument, falseValue: any, trueValue: any): any;
export function writable(macro: ComputedProperty, setter: { set: (newVale: any, value: any) => any }): ComputedProperty;
export function xnor(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;
export function xor(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): boolean;

export namespace array {
    export function any(arg: MacroArgument, predicate: (value: any) => boolean): boolean;
    export function compact(arg: MacroArgument): Array<any>;
    export function concat(arg1: MacroArgument, arg2: MacroArgument, ...remainingArgs: Array<MacroArgument>): Array<any>;
    export function every(arg: MacroArgument, predicate: (value: any) => boolean): boolean;
    export function filterBy(target: string, key: string, comparisonValue: any): Array<any>;
    export function filter(target: MacroArgument, comparator: (value: any) => boolean): Array<any>;
    export function findBy(target: string, key: string, comparisonValue: any): any;
    export function find(target: MacroArgument, comparator: (value: any) => boolean): any;
    export function first(array: MacroArgument): any;
    export function groupBy(array: MacroArgument, key: string, comparator?: (value: any) => boolean): GroupByResult;
    export function includes(array: MacroArgument, searchValue: MacroArgument): boolean;
    export function indexOf(array: MacroArgument, searchValue: any, startIndex? :number): number;
    export function invoke(): Array<any>;
    export function isAny(): boolean;
    export function isEvery(): boolean;
    export function join(): string;
    export function lastIndexOf(): number;
    export function last(): any;
    export function length(): number;
    export function mapBy(): Array<any>;
    export function map(): Array<any>;
    export function objectAt(): any;
    export function reduce(): any;
    export function rejectBy(): Array<any>;
    export function reverse(): Array<any>;
    export function slice(): Array<any>;
    export function sort(): Array<any>;
    export function uniqBy(): Array<any>;
    export function uniq(): Array<any>;
    export function without(): Array<any>;
}

export namespace promise {
    export function all(): Array<any>;
    export function array(): Ember.ArrayProxy<any> & PromiseProxyMixin<any>;
    export function hash(): object;
    export function object(): Ember.ObjectProxy & PromiseProxyMixin<any>;
    export function resolve(): Promise<any>;
    export function then(): any;
}

export namespace string {
    export function camelize(): string;
    export function capitalize(): string;
    export function classify(): string;
    export function dasherize(): string;
    export function decamelize(): string;
    export function escapeExpression(): string;
    export function htmlSafe(): Handlebars.SafeString;
    export function indexOf(): number;
    export function isHtmlSafe(): boolean;
    export function lastIndexOf(): number;
    export function length(): number;
    export function match(): Array<string> | null;
    export function replace(): string;
    export function split(): Array<string>;
    export function substr(): string;
    export function substring(): string;
    export function titleize(): string;
    export function toLower(): string;
    export function toUpper(): string;
    export function trim(): string;
    export function underscore(): string;
}
