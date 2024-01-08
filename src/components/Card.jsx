
export const Card = ({ userInfo }) => {
  const { firstName, university, image } = userInfo;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl p-5 gap-2 m-2 rounded-lg border border-black">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
          </div>
        </div>

        <div className="card-body p-0">
          <h2 className="card-title">{firstName}</h2>
          <p>{ university}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary h-8 min-h-0">More Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};
