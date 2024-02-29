interface KeyValue<T> {
	text: string;
	value: T;
}

export class CustomMap<T extends number> extends Map<number, string> {
	mapToKeyValue(): KeyValue<T>[] {
		const keyValueArray: KeyValue<T>[] = [];

		this.forEach((value, key) => {
			keyValueArray.push({ text: value, value: key as T });
		});

		return keyValueArray;
	}
}
