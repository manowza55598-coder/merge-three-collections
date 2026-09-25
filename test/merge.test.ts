import { describe, expect, it } from "vitest";
import { merge } from "../src/merge";

describe("merge", () => {
  it("merges three collections into ascending order", () => {
    expect(merge([1, 4, 7], [2, 5, 8], [9, 6, 3]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles empty collections", () => {
    expect(merge([], [1, 3], [4, 2])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 2], [], [4, 3])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 2], [3, 4], [])).toEqual([1, 2, 3, 4]);
    expect(merge([], [], [])).toEqual([]);
  });

  it("handles duplicate values", () => {
    expect(merge([1, 2, 2], [2, 3], [4, 2, 1]))
      .toEqual([1, 1, 2, 2, 2, 2, 3, 4]);
  });

  it("handles negative numbers", () => {
    expect(merge([-5, -2, 0], [-4, 1, 3], [5, 2, -1]))
      .toEqual([-5, -4, -2, -1, 0, 1, 2, 3, 5]);
  });

  it("handles one value in each collection", () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
  });
});
