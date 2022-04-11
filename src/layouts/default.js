import React from "react";
import Header from '../components/Header'
import LeftBar from '../components/LeftBar'

const DefaultLayout = ({ children }) => (
<div>
  <Header />
  <LeftBar />
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Users</li>
        </ol>
      </nav>
    </div>
    {/* End Page Title */}
    <section className="section dashboard">
      {children}
    </section>
  </main>
  <footer id="footer" className="footer">
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>Insly</span>
      </strong>
      . All Rights Reserved
    </div>
  </footer>
</div>
);

export default DefaultLayout;
