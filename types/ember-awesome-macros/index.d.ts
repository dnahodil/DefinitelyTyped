// Type definitions for ember-awesome-macros 3.1
// Project: https://github.com/kellyselden/ember-awesome-macros#readme
// Definitions by: David Nahodil <https://github.com/dnahodil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Ember from 'ember';
import PromiseProxyMixin from 'ember__object/promise-proxy-mixin';

type macroArgument = string | Ember.ComputedProperty<any>;

export function add(arg1: macroArgument, arg2: macroArgument, ...remainingArgs: Array<macroArgument>): number;
export function and(arg1: macroArgument, arg2: macroArgument, ...remainingArgs: Array<macroArgument>): any;
export function bool(arg: macroArgument): boolean;
export function collect(arg1: macroArgument, ...remainingArgs: Array<macroArgument>): Array<any>;
export function computed(string, { get:  }): Ember.ComputedProperty<any>;
export function conditional(): any;
export function defaultTrue(): any;
export function difference(): number;
export function divide(): number;
export function eq(): boolean;
export function equal(): boolean;
export function getBy(): any;
export function gt(): boolean;
export function gte(): boolean;
export function hash(): object;
export function instanceOf(): boolean;
export function isHtmlSafe(): boolean;
export function isEmpty(): boolean;
export function notEmpty(): boolean;
export function lt(): boolean;
export function lte(): boolean;
export function math(): Math;
export function mod(): number;
export function multiply(): number;
export function nand(): boolean;
export function neq(): boolean;
export function nor(): boolean;
export function not(): boolean;
export function notEqual(): boolean;
export function number(): Number;
export function or(): any;
export function parseFloat(): number;
export function parseInt(): number;
export function product(): number;
export function quotient(): number;
export function raw(): Ember.ComputedProperty<any>;
export function subtract(): number;
export function sum(): number;
export function tag(): string;
export function toStr(): string;
export function toString(): string;
export function typeOf(): string;
export function unless(): any;
export function writable(): Ember.ComputedProperty<any>;
export function xnor(): boolean;
export function xor(): boolean;

export namespace array {
    export function any(): boolean;
    export function compact(): Array<any>;
    export function concat(): Array<any>;
    export function every(): boolean;
    export function filterBy(): Array<any>;
    export function filter(): Array<any>;
    export function findBy(): any;
    export function find(): any;
    export function first(): any;
    export function groupBy(): Array<any>;
    export function includes(): boolean;
    export function indexOf(): number;
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
