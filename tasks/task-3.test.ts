//// task-3 test case

import extractValuesForKey from "./task-3";

interface MyObject {
  [key: string | number]: any;
}

const someObject: MyObject = {
  uuid: 1,
  innerOne: {
    someKey: "some text",
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        uuid: 3,
      },
    },
  },
};

const someObjectMod: MyObject = {
  innerOne: {
    someKey: "some text",
    uuid: 4,
  },
  uuid: 1,
  innerTwo: {
    uuid: 1,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        uuid: 3,
      },
    },
  },
};

const flatObject: MyObject = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
};

const nestedObject: MyObject = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
};

describe("Task 3 Extract Values from Keys", () => {
  test("Test for flat object", () => {
    const resultMap = new Map([["someObject/", 1]]);
    expect(extractValuesForKey(flatObject, "d")).toEqual(resultMap);
  });

  test("Test for nested object", () => {
    const resultMap = new Map([["someObject/a/b/c", 1]]);
    expect(extractValuesForKey(nestedObject, "d")).toEqual(resultMap);
  });

  test("Test for example object", () => {
    const resultMap = new Map([
      ["someObject/", 1],
      ["someObject/innerTwo", 2],
      ["someObject/innerTwo/innerThree/innerFour", 3],
    ]);
    expect(extractValuesForKey(someObject, "uuid")).toEqual(resultMap);
  });

  test("Test for example object", () => {
    const resultMap = new Map([
      ["someObject/", 1],
      ["someObject/innerOne", 4],
      ["someObject/innerTwo", 1],
      ["someObject/innerTwo/innerThree/innerFour", 3],
    ]);
    expect(extractValuesForKey(someObjectMod, "uuid")).toEqual(resultMap);
  });

  test("Test for example object with random string", () => {
    const resultMap = new Map(null);
    expect(extractValuesForKey(someObjectMod, "asdasdggrwgcascadf")).toEqual(
      resultMap
    );
  });

  test("Test for example object with string containing one character of actual key", () => {
    const resultMap = new Map(null);
    expect(extractValuesForKey(someObjectMod, "d")).toEqual(resultMap);
  });
});
