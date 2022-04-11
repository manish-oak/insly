import React, { useEffect, useState } from "react";
import ModalBox from '../components/Modal';
import axios from 'axios';
import UserForm  from '../components/UserForm';
import ReactPaginate from 'react-paginate';
import { setUsers } from '../Redux/Actions/Users';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import './style.css';
const initialUserData = {
  firstName: '',
  lastName: '',
  country: [],
  address: '',
  email: ''
}
const Users = ({itemsPerPage = 5,  ...props}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  
  const [userData, setUserData] = useState(initialUserData)
  const searchValue = useSelector(state => state.searchValue);
  const users = useSelector(state => state.Users).filter(user => user.firstName.match(searchValue) || user.lastName.match(searchValue) || user.email.match(searchValue));
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users.length]);

  useEffect(() => {
    fetchCountries()
  }, [])
  
  const fetchCountries = async () => {
    const apiURL = `https://restcountries.com/v2/all`
    await axios.get(apiURL)
    .then(res => {
      setCountries(res.data)
    })
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const getUserIndex = (id) => {
    let userIndex;
    users.map((user, index) => {
      if(user.id === id) {
        userIndex = index
      }
    })
    return userIndex
  }

  const addUser = (data) => {
    let clonedUsers = Object.assign([], users)
    const userIndex = getUserIndex(data.id);
    if(!userIndex && userIndex != 0) {
      clonedUsers.push(data)
    } else {
      clonedUsers[userIndex] = data
    }
    dispatch(setUsers(clonedUsers));
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(clonedUsers.slice(itemOffset, endOffset));
    setUserData(initialUserData)
    setShow(!show);
  }

  const deleteUser = (id) => {
    let clonedUsers = Object.assign([], users);
    clonedUsers.splice(getUserIndex(id), 1)
    dispatch(setUsers(clonedUsers));
  }

  const handleEditUser = (id) => {
    setUserData(users[getUserIndex(id)])
    setShow(!show);
  }

  return(
    <div className="row">
      <ModalBox show={show} title={'User Details'} handleClose={() => setShow(false)}>
        <UserForm handleClose={() => setShow(false)} onSubmit={(data) => addUser(data)} initialData={userData} countries={countries}/>
      </ModalBox>

      <div className="col-lg-8">
        <div className="row">
          <div className="col-12 d-flex justify-content-end mb-2">
            <Button variant="primary" onClick={() => setShow(!show)}>+ Add User</Button>{' '}
          </div>
          <div className="col-12">
            <div className="card recent-users overflow-auto">
              <div className="card-body">
                <h5 className="card-title">
                  Recent Users <span>| {users.length}</span>
                </h5>
                <table className="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Country</th>
                      <th scope="col">Address</th>
                      <th colSpan={2} scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      currentItems.length > 0 ? currentItems.map((user, index) => {
                        return(
                          <tr key={index}>
                            <th scope="row">
                              <a href="#">{user.id}</a>
                            </th>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>
                              {user.country.map(a => a.name).join(', ')}
                            </td>
                            <td>{user.address}</td>
                            <td>
                              {user.email}
                            </td>
                            <td>
                              <span className="badge bg-success" onClick={(e) => handleEditUser(user.id) }>Edit</span>
                              <span className="badge bg-danger" onClick={(e) => deleteUser(user.id) }>Delete</span>
                            </td>
                          </tr>
                        )
                      }) : (
                        <tr><th colSpan={6}>No Records Found.</th></tr>
                      )
                    }
                  </tbody>
                </table>

                <ReactPaginate
                  breakLabel="..."
                  className="pagination"
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;
