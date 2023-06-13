import { useGlobal, titleCase } from "@/store/global";
import type { AllType, TListKey, TFunCollect } from "@/store/global";
import { storeToRefs } from "pinia";

export default () => {
	const global = useGlobal();
	const state = storeToRefs(global);
	const actions = {} as TFunCollect;

	Object.keys(state).forEach((_key) => {
		const key = _key as keyof TListKey;
		if (typeof key == "string") {
			const name = titleCase(key);
			actions[name] = global[name as keyof typeof global];
		}
	});

	return {
		...state,
		...actions,
	} as unknown as AllType;
};
