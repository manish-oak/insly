import React from "react";
import { setSearchValue } from '../../Redux/Actions/Seach';
import { useDispatch, useSelector } from 'react-redux'

export const Header = (props) => {
    const dispatch = useDispatch();
    const searchVal = useSelector(state => state.searchValue)
    const handleChange = (e) => {
        dispatch(setSearchValue(e.target.value))
    }

    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Insly</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        <div className="search-bar">
            <div class="form-group">
                <input
                type="text"
                name="query"
                value={searchVal}
                placeholder="Search"
                className="form-control"
                onChange={(e) => handleChange(e)}
                title="Enter search keyword"
                />
            </div>
        </div>
      </header>
    )
}

export default Header;