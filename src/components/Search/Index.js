import { Container, Form } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: '', label: 'Hepsi' },
  { value: 'Remote', label: 'Remote' },
  { value: 'İstanbul', label: 'İstanbul' },
  { value: 'Adana', label: 'Adana' },
  { value: 'Ankara', label: 'Ankara' },
  { value: 'İzmir', label: 'İzmir' },
  { value: 'Bursa', label: 'Bursa' },
  { value: 'Kocaeli', label: 'Kocaeli' },
  { value: 'Eskişehir', label: 'Eskişehir' }
];
const Search = ({ setSearch, setLocation }) => {
  const locationOnChange = (val) => {
    setLocation(val.value);
  }
  
  return (
    <div className="search mt-4 mb-5">
      <Container>
        <Form className="d-flex">
          <Form.Group controlId="text" className="col-md-8 px-0">
            <Form.Control 
              type="text"
              placeholder="Pozisyon Adı.." 
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="city" className="col-md-4 px-0">
            <Select 
              options={options}
              defaultValue={{ label: "Hepsi", value: '' }}
              className="city-select" 
              onChange={locationOnChange}
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};
export default Search;