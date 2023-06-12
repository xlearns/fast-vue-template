import list from "@/constants";
import { reactive, toRefs } from "vue";

const prefix = "use";
type TListKey = typeof list;
type TListVal = TListKey[keyof TListKey];

type TFn = TListVal | ((arg: TListVal) => TListVal);

type TAddPrefix<T> = {
  [K in keyof T as `use${Capitalize<string & K>}`]: (arg: T[K]) => T[K];
};

type TState<T> = T & TAddPrefix<T>;

type AllType = TState<TListKey>;

const state = reactive<Record<string, TListVal>>({ ...list });

const funCollect: Record<string, (arg: TFn) => void> = {};

function titleCase(str: keyof typeof list): string {
  if (typeof str !== "string") {
    new Error("name transform error!!");
  }
  return prefix + str.slice(0, 1).toUpperCase() + str.slice(1);
}

Object.keys(list).forEach((_key) => {
  const key = _key as keyof TListKey;
  const val = list[key];
  const name = titleCase(key) as string;
  if (!name) return;
  funCollect[name] = (fn: TFn) => {
    if (typeof fn !== "function") {
      state[key] = fn;
    } else {
      state[key] = fn(val);
    }
  };
});

const useGlobal = () => {
  return {
    ...toRefs(state),
    ...funCollect,
  } as unknown as AllType;
};

export default useGlobal;
