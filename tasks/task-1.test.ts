//// task-1 test case

import sum from "./task-1";

describe(" Task 1 High Order Function Implementation", () => {

  // TEST FOR 1ST CASE

  test("Test for default behavior sum(<callback function>)", () => {
    expect(sum((r: number) => r)).toBe(0);
  });

  test("Test for console.log arguments in default behavior", () => {
    console.log = jest.fn();
    sum((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ",0);
  });

  // TEST FOR 2ND CASE

  test("sum(1)(<callback function>) to equal 1", () => {
    expect(sum(1)((r: number) => r)).toBe(1);
  });

  test("Test for console.log arguments in sum(1)(<callback function>)", () => {
    console.log = jest.fn();
    sum(1)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ",1);
  });

  // TEST FOR 3RD CASE

  test("sum(1)(2)(<callback function>) to equal 3)", () => {
    expect(sum(1)(2)((r: number) => r)).toBe(3);
  });

  test("Test for console.log arguments in sum(1)(2)(<callback function>)", () => {
    console.log = jest.fn();
    sum(1)(2)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ",3);
  });

  // TEST FOR 4TH CASE

  test("sum(1)(2)(4)(<callback function>) to equal 7", () => {
    expect(sum(1)(2)(4)((r: number) => r)).toBe(7);
  });

  test("Test for console.log arguments in sum(1)(2)(4)(<callback function>)", () => {
    console.log = jest.fn();
    sum(1)(2)(4)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ",7);
  });
});
