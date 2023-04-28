/* eslint-disable react/prop-types */

export const DetailText = ({ label, data }) => {
  return (
    <div className="d-flex align-items-center detail-text mb-2">
      <label>{label}</label>
      <span>:</span>
      <p className="mb-0">{data}</p>
    </div>
  );
};
