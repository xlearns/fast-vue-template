import list from "@/constants";
import { defineStore } from "pinia";

export const prefix = "use";
export type TListKey = typeof list;
export type TListVal = TListKey[keyof TListKey];

export type TFn = TListVal | ((arg: TListVal) => TListVal);

export type TAddPrefix<T> = {
	[K in keyof T as `use${Capitalize<string & K>}`]: (
		arg: T[K] | ((arg: T[K]) => T[K])
	) => T[K];
};

export type TState<T> = T & TAddPrefix<T>;

export type AllType = TState<TListKey>;

export type TFunCollect = Record<string, (arg: TFn) => void>;

const funCollect: TFunCollect = {};

export const titleCase = function (str: keyof typeof list): string {
	if (typeof str !== "string") {
		new Error("name transform error!!");
	}
	return prefix + str.slice(0, 1).toUpperCase() + str.slice(1);
};

Object.keys(list).forEach((_key) => {
	const key = _key as keyof TListKey;
	const val = list[key];
	const name = titleCase(key) as string;
	if (!name) return;
	funCollect[name] = function (fn: TFn) {
		if (typeof fn !== "function") {
			//@ts-ignore
			this[key] = fn;
		} else {
			//@ts-ignore
			this[key] = fn(val);
		}
	};
});

export const useGlobal = defineStore("global", {
	state: () => ({ ...list }),
	actions: {
		...funCollect,
	},
});
