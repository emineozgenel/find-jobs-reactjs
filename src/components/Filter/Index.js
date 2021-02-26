import './style.css';

const Filter = ({category, setCategory, type, setType, level, setLevel}) => {
  const handleCategory = (val) => {
    const clickedCategory = category.indexOf(val.target.value);
    const all = [...category];
    if (clickedCategory === -1) {
      all.push(val.target.value);
    } else {
      all.splice(clickedCategory, 1);
    }
    setCategory(all);
  }
  const handleType = (val) => {
    const clickedType = type.indexOf(val.target.value);
    const all = [...type];
    if (clickedType === -1) {
      all.push(val.target.value);
    } else {
      all.splice(clickedType, 1);
    }
    setType(all);
  }
  const handleLevel = (val) => {
    const clickedLevel = level.indexOf(val.target.value);
    const all = [...level];
    if (clickedLevel === -1) {
      all.push(val.target.value);
    } else {
      all.splice(clickedLevel, 1);
    }
    setLevel(all);
  }

  return (
    <div className="filter">
      <div className="location mb-4">
        <h5>Kategoriler</h5>
        <ul className="pl-0 list-unstyled">
          <li>
            <input 
              type="checkbox" 
              className="form-checkbox"
              value="Yazılım" 
              name="location"
              id="location_411" 
              onChange={handleCategory}
            />
            <label htmlFor="location_411">Yazılım</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Satış" onChange={handleCategory} name="location" id="location_412" />
            <label htmlFor="location_412">Satış</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Pazarlama" onChange={handleCategory} name="location" id="location_413" />
            <label htmlFor="location_413">Pazarlama</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Muhasebe" onChange={handleCategory} name="location" id="location_414" />
            <label htmlFor="location_414">Muhasebe</label>
          </li>
        </ul>
      </div>
      <div className="job-type mb-4">
        <h5>Türler</h5>
        <ul className="pl-0 list-unstyled">
          <li>
            <input type="checkbox" className="form-checkbox" value="Full Time" name="job-type" id="job_type_1" 
              onChange={handleType} />
            <label htmlFor="job_type_1">Full Time</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Part Time" name="job-type" id="job_type_2" 
              onChange={handleType}
            />
            <label htmlFor="job_type_2">Part Time</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Remote" name="job-type" id="job_type_3" 
              onChange={handleType}
            />
            <label htmlFor="job_type_3">Remote</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Intership" name="job-type" id="job_type_4" 
              onChange={handleType}
            />
            <label htmlFor="job_type_4">Intership</label>
          </li>
        </ul>
      </div>
      <div className="level mb-4">
        <h5>Seviye</h5>
        <ul className="pl-0 list-unstyled">
          <li>
            <input type="checkbox" className="form-checkbox" value="Intern" name="level" id="level_1" 
             onChange={handleLevel}
            />
            <label htmlFor="level_1">Intern</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Junior" name="level" id="level_2" 
             onChange={handleLevel}
            />
            <label htmlFor="level_2">Junior</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Middle" name="level" id="level_3" 
             onChange={handleLevel}
            />
            <label htmlFor="level_3">Middle</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Senior" name="level" id="level_4" 
             onChange={handleLevel}
            />
            <label htmlFor="level_4">Senior</label>
          </li>
          <li>
            <input type="checkbox" className="form-checkbox" value="Team Lead" name="level" id="level_5" 
             onChange={handleLevel}
            />
            <label htmlFor="level_5">Team Lead</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Filter;