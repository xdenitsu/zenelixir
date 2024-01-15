const debounce = (cb: () => void, wait: number = 50) => {
  let timeout: NodeJS.Timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(), wait);
  };
};
