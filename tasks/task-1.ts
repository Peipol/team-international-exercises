//// task-1

export default function sum(a: number | Function): Function {
  if (typeof a === "function") {
    return a(0);
  }
  return (b: number | Function) => {
    if (typeof b === "function") {
      return b(a);
    }

    return (c: number | Function) => {
      if (typeof c === "function") {
        return c(Number(a) + Number(b));
      }

      return (d: number | Function) => {
        if (typeof d === "function") {
          return d(Number(a) + Number(b) + c);
        }

        return console.error(
          "\n ❌ YOU MUST INCLUDE A CALLBACK AT THE END ❌ \n"
        );
      };
    };
  };
}

sum((result: number) => console.log("-> ", result));
sum(1)((result: number) => console.log("-> ", result));
sum(1)(2)((result: number) => console.log("-> ", result));
sum(1)(2)(4)((result: number) => console.log("-> ", result));
