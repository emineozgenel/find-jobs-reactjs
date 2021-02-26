import { useState, useRef, useEffect } from 'react';
import Detail from "../Detail/Index";
import moment from 'moment';

import './style.css';
const Card = ({ job }) => {
  const ref = useRef();
  const [show, setShow] = useState(false)

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  return (
    <div className="job-item mb-4" id={job.jobId}>
      <div className="job-item__content">
        <div className="job-item__title" ref={ref} onClick={() => setShow(!show)}>{job.position_name}</div>
        <div className="job-item__brand">{job.company_name}</div>
        <div className="job-item__info py-3 d-flex justify-content-between align-items-center">
          <span className="job-item__type">{job.type}</span>
          <span className="job-item__city">{job.city}, {job.town}</span>
        </div>
        <div className="job-item__date text-right">
          {moment(job.created_date).format('DD.MM.YYYY')}
        </div>
      </div>
      <Detail job={job} show={show} />
    </div>
  );
}

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
export default Card;
