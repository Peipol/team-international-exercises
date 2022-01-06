//// task-1 test case

import sumFlexible from "./task-2";

describe(" Task 1 High Order Function Implementation", () => {
  // TEST FOR 1ST CASE

  test("Test for default behavior sumFlexible(<callback function>)", () => {
    expect(sumFlexible((r: number) => r)).toBe(0);
  });

  test("Test for console.log arguments in default behavior", () => {
    console.log = jest.fn();
    sumFlexible((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ", 0);
  });

  // TEST FOR 2ND CASE

  test("sumFlexible(1)(<callback function>) to equal 1", () => {
    expect(sumFlexible(1)((r: number) => r)).toBe(1);
  });

  test("Test for console.log arguments in sumFlexible(1)(<callback function>)", () => {
    console.log = jest.fn();
    sumFlexible(1)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ", 1);
  });

  // TEST FOR 3RD CASE

  test("sumFlexible(1)(2)(<callback function>) to equal 3)", () => {
    expect(sumFlexible(1)(2)((r: number) => r)).toBe(3);
  });

  test("Test for console.log arguments in sumFlexible(1)(2)(<callback function>)", () => {
    console.log = jest.fn();
    sumFlexible(1)(2)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ", 3);
  });

  // TEST FOR 4TH CASE

  test("sumFlexible(1)(2)(4)(<callback function>) to equal 7", () => {
    expect(sumFlexible(1)(2)(4)((r: number) => r)).toBe(7);
  });

  test("Test for console.log arguments in sumFlexible(1)(2)(4)(<callback function>)", () => {
    console.log = jest.fn();
    sumFlexible(1)(2)(4)((result: number) => console.log("-> ", result));
    expect(console.log).toHaveBeenCalledWith("-> ", 7);
  });

  // TEST FOR 5TH CASE

  test("sumFlexible(1)(2)(3)(4)(5)(6)(<callback function>) to equal 7", () => {
    expect(sumFlexible(1)(2)(3)(4)(5)(6)((r: number) => r)).toBe(21);
  });

  test("Test for console.log arguments in sumFlexible(1)(2)(3)(4)(5)(6)(<callback function>)", () => {
    console.log = jest.fn();
    sumFlexible(1)(2)(3)(4)(5)(6)((result: number) =>
      console.log("-> ", result)
    );
    expect(console.log).toHaveBeenCalledWith("-> ", 21);
  });
});
