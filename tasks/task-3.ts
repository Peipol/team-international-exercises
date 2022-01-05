interface MyObject {
  [key: string | number]: any;
}
const someObjectName = "someObject";
const someObject: MyObject = {
  uuid: 1,
  innerOne: {
    someKey: "some text",
  },
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
export default function extractValuesForKey(obj: MyObject, searchKey: string) {
  let resultMap: Map<string, any> = new Map();

  const keyFlatening = (
    obj: MyObject,
    newObj: MyObject,
    flattenedKey?: string | number
  ) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey;
        if (flattenedKey === undefined) {
          newKey = key;
        } else {
          newKey = flattenedKey + "/" + key;
        }

        let value = obj[key];
        if (typeof value === "object") {
          keyFlatening(value, newObj, newKey);
        } else {
          newObj[newKey] = value;
        }
      }
    }
  };

  const flatten = (obj: MyObject) => {
    let flattenedObject = {};
    keyFlatening(obj, flattenedObject);
    return flattenedObject;
  };

  let flatObj:MyObject = flatten(obj);
  console.log(flatObj)
  for (const key in flatObj) {
    if (key.includes(searchKey)) {
      if (key.substring(0, key.length - searchKey.length) === "") {
        resultMap.set(`${someObjectName}/`,flatObj[key]);
      }
      if (key.substring(0, key.length - searchKey.length) !== "") {
        resultMap.set(`${someObjectName}/${key.substring(0, key.length - searchKey.length)}`,flatObj[key]);
      }
    }
  }

  return resultMap;
}

console.log(extractValuesForKey(someObject, "someKey"));
