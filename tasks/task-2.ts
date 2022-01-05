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
};
