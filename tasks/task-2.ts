// task-2

export default function sumFlexible(a: number | Function): Function {
  // Default
  if (typeof a === "function") {
    return a(0);
  }

  // With callback at the end
  return (b: number | Function): Function => {
    if (typeof b !== "function") {
      return sumFlexible(a + b); // <---- flexible behavior with recursitivy
    }
    return b(a);
  };
}

sumFlexible((result: number) => console.log("-> ", result));
sumFlexible(1)((result: number) => console.log("-> ", result));
sumFlexible(1)(2)((result: number) => console.log("-> ", result));
sumFlexible(1)(2)(4)((result: number) => console.log("-> ", result));
sumFlexible(1)(2)(4)(6)((result: number) => console.log("-> ", result));
sumFlexible(1)(2)(4)(6)(8)((result: number) => console.log("-> ", result));
