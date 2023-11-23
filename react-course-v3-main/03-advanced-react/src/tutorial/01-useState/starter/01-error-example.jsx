const ErrorExample = () => {
  let count = 0;
  const increment = () => (count = count + 1);

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={increment} className="btn">
        increment
      </button>
    </>
  );
};

export default ErrorExample;
