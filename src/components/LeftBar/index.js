export const LeftBar = () => {
    return(
        <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-question-circle" />
              <span>Sample #1</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-dash-circle" />
              <span>Sample #2</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-file-earmark" />
              <span>Sample #3</span>
            </a>
          </li>
        </ul>
      </aside>
    )
}

export default LeftBar;