export const setArrayInJSONStringify = <T>(newValue: any, arrayData?: T[]) => {
  return !!arrayData?.length
    ? JSON.stringify([...arrayData, newValue])
    : JSON.stringify([newValue]);
};

export const setItemToTopArray = <T>(
  arrayData: T[],
  itemToTop: any,
  key: keyof T,
) => {
  const arrayCopyWithoutItem = arrayData.filter(
    item => item[key] !== itemToTop,
  );
  const dataFiltered = arrayData.find(item => item[key] === itemToTop);
  const newArray = dataFiltered && [dataFiltered, ...arrayCopyWithoutItem];
  return newArray;
};
