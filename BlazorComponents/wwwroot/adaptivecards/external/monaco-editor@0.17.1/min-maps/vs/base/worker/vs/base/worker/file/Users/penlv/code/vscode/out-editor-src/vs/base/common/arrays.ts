

/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
export function tail<T>(array: ArrayLike<T>, n: number = 0): T {
	return array[array.length - (1 + n)];
}

export function tail2<T>(arr: T[]): [T[], T] {
	if (arr.length === 0) {
		throw new Error('Invalid tail call');
	}

	return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}

export function equals<T>(one: ReadonlyArray<T> | undefined, other: ReadonlyArray<T> | undefined, itemEquals: (a: T, b: T) => boolean = (a, b) => a === b): boolean {
	if (one === other) {
		return true;
	}

	if (!one || !other) {
		return false;
	}

	if (one.length !== other.length) {
		return false;
	}

	for (let i = 0, len = one.length; i < len; i++) {
		if (!itemEquals(one[i], other[i])) {
			return false;
		}
	}

	return true;
}

export function binarySearch<T>(array: ReadonlyArray<T>, key: T, comparator: (op1: T, op2: T) => number): number {
	let low = 0,
		high = array.length - 1;

	while (low <= high) {
		const mid = ((low + high) / 2) | 0;
		const comp = comparator(array[mid], key);
		if (comp < 0) {
			low = mid + 1;
		} else if (comp > 0) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -(low + 1);
}

/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */
export function findFirstInSorted<T>(array: ReadonlyArray<T>, p: (x: T) => boolean): number {
	let low = 0, high = array.length;
	if (high === 0) {
		return 0; // no children
	}
	while (low < high) {
		const mid = Math.floor((low + high) / 2);
		if (p(array[mid])) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	return low;
}

type Compare<T> = (a: T, b: T) => number;

/**
 * Like `Array#sort` but always stable. Usually runs a little slower `than Array#sort`
 * so only use this when actually needing stable sort.
 */
export function mergeSort<T>(data: T[], compare: Compare<T>): T[] {
	_sort(data, compare, 0, data.length - 1, []);
	return data;
}

function _merge<T>(a: T[], compare: Compare<T>, lo: number, mid: number, hi: number, aux: T[]): void {
	let leftIdx = lo, rightIdx = mid + 1;
	for (let i = lo; i <= hi; i++) {
		aux[i] = a[i];
	}
	for (let i = lo; i <= hi; i++) {
		if (leftIdx > mid) {
			// left side consumed
			a[i] = aux[rightIdx++];
		} else if (rightIdx > hi) {
			// right side consumed
			a[i] = aux[leftIdx++];
		} else if (compare(aux[rightIdx], aux[leftIdx]) < 0) {
			// right element is less -> comes first
			a[i] = aux[rightIdx++];
		} else {
			// left element comes first (less or equal)
			a[i] = aux[leftIdx++];
		}
	}
}

function _sort<T>(a: T[], compare: Compare<T>, lo: number, hi: number, aux: T[]) {
	if (hi <= lo) {
		return;
	}
	const mid = lo + ((hi - lo) / 2) | 0;
	_sort(a, compare, lo, mid, aux);
	_sort(a, compare, mid + 1, hi, aux);
	if (compare(a[mid], a[mid + 1]) <= 0) {
		// left and right are sorted and if the last-left element is less
		// or equals than the first-right element there is nothing else
		// to do
		return;
	}
	_merge(a, compare, lo, mid, hi, aux);
}


export function groupBy<T>(data: ReadonlyArray<T>, compare: (a: T, b: T) => number): T[][] {
	const result: T[][] = [];
	let currentGroup: T[] | undefined = undefined;
	for (const element of mergeSort(data.slice(0), compare)) {
		if (!currentGroup || compare(currentGroup[0], element) !== 0) {
			currentGroup = [element];
			result.push(currentGroup);
		} else {
			currentGroup.push(element);
		}
	}
	return result;
}

/**
 * @returns a new array with all falsy values removed. The original array IS NOT modified.
 */
export function coalesce<T>(array: Array<T | undefined | null>): T[] {
	if (!array) {
		return array;
	}
	return <T[]>array.filter(e => !!e);
}

/**
 * @returns false if the provided object is an array and not empty.
 */
export function isFalsyOrEmpty(obj: any): boolean {
	return !Array.isArray(obj) || obj.length === 0;
}

/**
 * @returns True if the provided object is an array and has at least one element.
 */
export function isNonEmptyArray<T>(obj: ReadonlyArray<T> | undefined | null): obj is Array<T> {
	return Array.isArray(obj) && obj.length > 0;
}

/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equalness by returning a unique string for each.
 */
export function distinct<T>(array: ReadonlyArray<T>, keyFn?: (t: T) => string): T[] {
	if (!keyFn) {
		return array.filter((element, position) => {
			return array.indexOf(element) === position;
		});
	}

	const seen: { [key: string]: boolean; } = Object.create(null);
	return array.filter((elem) => {
		const key = keyFn(elem);
		if (seen[key]) {
			return false;
		}

		seen[key] = true;

		return true;
	});
}

export function distinctES6<T>(array: ReadonlyArray<T>): T[] {
	const seen = new Set<T>();
	return array.filter(element => {
		if (seen.has(element)) {
			return false;
		}

		seen.add(element);
		return true;
	});
}

export function firstIndex<T>(array: ReadonlyArray<T>, fn: (item: T) => boolean): number {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (fn(element)) {
			return i;
		}
	}

	return -1;
}

export function first<T>(array: ReadonlyArray<T>, fn: (item: T) => boolean, notFoundValue: T): T;
export function first<T>(array: ReadonlyArray<T>, fn: (item: T) => boolean): T | undefined;
export function first<T>(array: ReadonlyArray<T>, fn: (item: T) => boolean, notFoundValue: T | undefined = undefined): T | undefined {
	const index = firstIndex(array, fn);
	return index < 0 ? notFoundValue : array[index];
}

export function flatten<T>(arr: T[][]): T[] {
	return (<T[]>[]).concat(...arr);
}

export function range(to: number): number[];
export function range(from: number, to: number): number[];
export function range(arg: number, to?: number): number[] {
	let from = typeof to === 'number' ? arg : 0;

	if (typeof to === 'number') {
		from = arg;
	} else {
		from = 0;
		to = arg;
	}

	const result: number[] = [];

	if (from <= to) {
		for (let i = from; i < to; i++) {
			result.push(i);
		}
	} else {
		for (let i = from; i > to; i--) {
			result.push(i);
		}
	}

	return result;
}

/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */
export function arrayInsert<T>(target: T[], insertIndex: number, insertArr: T[]): T[] {
	const before = target.slice(0, insertIndex);
	const after = target.slice(insertIndex);
	return before.concat(insertArr, after);
}

/**
 * Pushes an element to the start of the array, if found.
 */
export function pushToStart<T>(arr: T[], value: T): void {
	const index = arr.indexOf(value);

	if (index > -1) {
		arr.splice(index, 1);
		arr.unshift(value);
	}
}

/**
 * Pushes an element to the end of the array, if found.
 */
export function pushToEnd<T>(arr: T[], value: T): void {
	const index = arr.indexOf(value);

	if (index > -1) {
		arr.splice(index, 1);
		arr.push(value);
	}
}

export function asArray<T>(x: T | T[]): T[] {
	return Array.isArray(x) ? x : [x];
}
