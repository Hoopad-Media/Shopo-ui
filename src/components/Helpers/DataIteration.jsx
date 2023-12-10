function DataIteration(props) {
  const { datas = [], startLength, endLength, children } = props;
  return (
    <>
      {datas &&
        //   4 >= 4
        datas.length >= endLength ?
        datas
          .slice(startLength, endLength)
          .map((value) => children({ datas: value }))
          :datas.length < endLength ?
              datas
                  .slice(startLength, datas.length)
                  .map((value) => children({ datas: value })):
              datas
                  .slice(startLength, datas.length)
                  .map((value) => children({ datas: value }))
      }
    </>
  );
}

export default DataIteration;
