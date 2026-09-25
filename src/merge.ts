/**
 * Merge two ascending-sorted collections and one descending-sorted collection
 * into one ascending-sorted array.
 *
 * No sort() function is used.
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    let smallest = Infinity;

    if (i < collection_1.length && collection_1[i] < smallest) {
      smallest = collection_1[i];
    }

    if (j < collection_2.length && collection_2[j] < smallest) {
      smallest = collection_2[j];
    }

    if (k >= 0 && collection_3[k] < smallest) {
      smallest = collection_3[k];
    }

    result.push(smallest);

    if (i < collection_1.length && collection_1[i] === smallest) {
      i++;
    } else if (j < collection_2.length && collection_2[j] === smallest) {
      j++;
    } else {
      k--;
    }
  }

  return result;
}
