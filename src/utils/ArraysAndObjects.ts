export const setArrayInJSONStringify = <T>(newValue: any, arrayData?: T[]) => {
  return !!arrayData?.length
    ? JSON.stringify([...arrayData, newValue])
    : JSON.stringify([newValue]);
};
