import "@components/Claim-list/Claim/Claim.scss";

const Claim = ({
  title,
  created,
  type,
  typeSlug,
  status, 
  statusSlug 
}) => {
  return (
    <div className="claim">
      <div className="claim__title">
        <div className="claim__text">{title}</div>
      </div>

      <div className="claim__block">
        <div className="claim__filter">Created</div>
        <div className="claim__created">
        <div className="claim__text">{created}</div>
        </div>
      </div>
      <div className="claim__block">
        <div className="claim__filter">Type</div>
        <div className="claim__type">
          <div className={"claim__text " + typeSlug}>{type}</div>
        </div>
      </div>
      <div className="claim__block">
        <div className="claim__filter">Status</div>
        <div className={"claim__status " + statusSlug}>{status}</div>
      </div>

      <button /* onClick={onClick} */ className="claim__button">Browse</button>
    </div>
  );
};

export default Claim;
