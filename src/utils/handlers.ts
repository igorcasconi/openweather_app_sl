export const debounce = (
  handler: (...args: any[]) => void,
  timeout: number = 300,
) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handler(...args);
    }, timeout);
  };
};
