/* eslint-disable react/prop-types */

const Clock = (props) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-5">
          <div className="text-center">
            <h1 className="text-3xl">{props.Amount}</h1>
            <h5 className="text-md">{props.Date}</h5>
          </div>
          <span className="text-3xl font-bold">:</span>
        </div>
      </div>
    </>
  );
};

export default Clock;
