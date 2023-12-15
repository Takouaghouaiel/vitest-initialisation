import { expect, test,expectTypeOf,vi,describe,it } from "vitest";
import { sum } from "./sum";


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
});

test("adds 1 + 2 + 3 to equal 4", () => {
  expect(sum(1, 2, 3)).toMatchSnapshot();
});

test("1 number", () => {
  expect(sum(1)).toBe(1);
});

test("no number", () => {
  expect(sum()).toBe(0);
});

test('my types work properly', () => {
  expectTypeOf(sum).toBeFunction();
})

test("try the mocking functions", () => {
  // about vi : vitest mocking api:
const mockSum = vi.fn();
mockSum(1, 2, 3);
expect(mockSum).toHaveBeenCalledWith(1, 2, 3);
expect(mockSum).toHaveBeenCalledTimes(1);
expect(vi.isMockFunction(mockSum)).toBe(true)
expect(mockSum.mock.calls[0]).toEqual([1, 2, 3])

})


describe('suite', () => {
  it.todo('unimplemented test')
})


it('snapshot', () => {
  const result = sum(1,4)
  expect(result).toMatchInlineSnapshot(`5`)
})