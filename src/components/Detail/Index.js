import './style.css';
import moment from 'moment';

const Detail = ({ job, show }) => {
  return (
    <div className={show ? `detail active` : `detail`} >
      <div className="bg-white px-3 py-4">
        <div className="detail--header pb-5">
          <div className="detail--header-title">{job.position_name}</div>
          <div className="detail--header-info  d-flex pt-1">
            <span className="detail--campany pr-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              {job.company_name}
            </span>
            <span>
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {job.city}
            </span>
          </div>
          <div className="detail--header-date">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {moment(job.created_date).format('DD.MM.YYYY')}
          </div>
          <div className="detail--header-action pt-4">
            <a href="/#" target="_blank" className="btn btn-primary">Başvur</a>
          </div>
        </div>
        <div className="detail--content">
          <h5 className="pb-2">Detaylar</h5>
          <ul className="detail-overview d-flex items-center pl-0 list-unstyled">
            <li className="pr-5">
              <span className="name d-block">Lokasyon</span>
              <span>{job.city}, {job.town}</span>
            </li>
            <li>
              <span className="name d-block">Tür</span>
              <span>{job.type}</span>
            </li>
          </ul>
          <div className="detail--content-desc" dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </div>
  </div>
  );
}
export default Detail;