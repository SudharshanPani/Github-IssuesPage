import React,{useState,useEffect} from 'react';
import './App.css';
import ReactPaginate from 'react-paginate'
import Issues from './Issues';

function App() {
  useEffect(()=>{
   fetch("https://api.github.com/repos/facebook/create-react-app/issues?page=1&per_page=100")
   .then(Response=>Response.json())
   .then(data=>setUsers(data)) 
  })
  const [users, setUsers] = useState([])
  const [pageNumber , setPageNumber] = useState(0)
  console.log(users)
  const usersPerPage = 10;
  const PagesVisited = usersPerPage * pageNumber;
  const displayUsers = users.slice(PagesVisited, PagesVisited + usersPerPage)
  .map(user=>(
    <div>
      
      <Issues title = {user.title}  status={user.state} number= {user.number} />
    </div>
  ))
    const pageCount = users.length / usersPerPage
    const changePage = ({selected})=>{
      setPageNumber(selected)
    }

  return (
    <div className="App">
      <h1 className="github" >Git hub issues page</h1>
      {displayUsers}
      <ReactPaginate
        previousLabel = {"prev"}
        nextLabel={"next"}
        pageCount	={pageCount}
        onPageChange = {changePage}
        containerClassName ={"containerClassName"}
        previousLinkClassName={"previousLinkClassName"}
        nextLinkClassName={"nextLinkClassName"}
        disabledClassName	={"disabledClassName"}
        activeClassName={"activeClassName"}
      >
      </ReactPaginate>
    </div>
  );
}

export default App;
