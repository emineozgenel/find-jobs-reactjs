import { useContext, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {JobContext} from "../../context/JobContext";
import Search from "../Search/Index";
import Card from "../Card/Index";
import Filter from "../Filter/Index";
import './style.css';

const Jobs = () => {
  const {jobs} = useContext(JobContext)
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [level, setLevel] = useState([]);


  function filteredJobs() {
    if (search && search.length > 1) {
      return jobs.filter((item) => item.attributes.position_name.toLowerCase().indexOf(search.toLowerCase()) >= 0 )
    }
    if (location && location.length > 0) {
      return jobs.filter((item) => item.attributes.city.toUpperCase().indexOf(location.toUpperCase()) >= 0 )
    }
    if(category.length > 0) {
      return jobs.filter((item) => {
        return category.includes(item.attributes.category)
      }, this)
    };
    if(type.length > 0 || type.length > 0) {
      return jobs.filter((item) => {
        return type.includes(item.attributes.type)
      }, this)
    };
    if(level.length > 0 || type.length > 0) {
      return jobs.filter((item) => {
        return level.includes(item.attributes.seniority)
      }, this)
    };
    return jobs;
  };

  return (
    <div className="list">
      <Search setSearch={setSearch} setLocation={setLocation} />
      <Container>
        <Row>
          <Col sm={3}>
            <Filter 
              category={category}
              setCategory={setCategory}
              type={type} 
              setType={setType} 
              level={level} 
              setLevel={setLevel} 
            />
          </Col>
          <Col sm={9}>
            <div className="jobs-list">
                {
                  filteredJobs()
                  .map((job) =>(
                    <Card job={job.attributes} key={job.attributes.jobId}/>
                  ))
                }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Jobs;