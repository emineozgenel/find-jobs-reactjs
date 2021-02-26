import { createContext, useState, useEffect } from 'react';
import Parse from 'parse';

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetchJobs();
    logged();
  }, []);

  function logged() {
    let current = Parse.User.current();
    if(current){
      setCurrentUser(current);
    }
  }

  function fetchJobs() {
    const listings = Parse.Object.extend('listings');
    const query = new Parse.Query(listings);
    query.find().then((results) => {
      setJobs(results);
      localStorage.setItem("jobs", JSON.stringify(results));
    }, (error) => {
      console.error('Error while fetching listings', error);
    });
  }

  const store = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    jobs: jobs
  }

  return (
    <JobContext.Provider value={store}>
        {props.children}
    </JobContext.Provider>
  )
}
export default JobContextProvider;