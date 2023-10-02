import React, { useEffect } from "react";

function Index() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    
    // Set the source to the external JavaScript file
    script.src = "../../public/assets/vendor/js/menu.js";
    script.src = "../../public/assets/vendor/js/menu.js"; // Update the path accordingly

    // Add an onload callback to ensure the script has loaded
    script.onload = () => {
      // You can now use functions or variables from the external script
      // Example: Assuming the external script defines a function named 'externalFunction'
     module();
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <body>
      {/* <!-- Layout wrapper --> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}

          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <img
                    src="https://www.lampost.co/upload/1473167067.jpg"
                    width="180"
                    alt=""
                  />
                </span>
              </a>

              <a
                href="javascript:void(0);"
                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
              {/* <!-- Dashboard --> */}
              <li className="menu-item active">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Penjualan</div>
                </a>
              </li>

              {/* <!-- Layouts --> */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons bx bx-bar-chart"></i>
                  <div data-i18n="Layouts">Dashboard</div>
                </a>

                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-navbar.html" className="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-container.html" className="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-fluid.html" className="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-blank.html" className="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Forms & Tables --> */}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Pelaporan</span>
              </li>
              {/* <!-- Forms --> */}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Form Elements">Laporan</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="laporan-bulanan.html" className="menu-link">
                      <div data-i18n="Basic Inputs">Bulanan</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="laproan-mingguan.html" className="menu-link">
                      <div data-i18n="Input groups">Mingguan</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- master --> */}

              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Master</span>
              </li>
              {/* <!-- Forms --> */}
              <li className="menu-item">
                <a
                  href="javascript:void(0);"
                  className="menu-link menu`-toggle"
                >
                  <i className="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Form Elements">Master</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="master-obat-alkes.html" className="menu-link">
                      <div data-i18n="Basic Inputs">Mapping Obat dan Alkes</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Form Layouts">Laporan Bulanan</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="form-layouts-vertical.html" className="menu-link">
                      <div data-i18n="Vertical Form">Vertical Form</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="form-layouts-horizontal.html"
                      className="menu-link"
                    >
                      <div data-i18n="Horizontal Form">Horizontal Form</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Misc --> */}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Misc</span>
              </li>
              <li className="menu-item">
                <a href="#" target="_blank" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-support"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" target="_blank" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-atom"></i>
                  <div data-i18n="Documentation">FAQ</div>
                </a>
              </li>
            </ul>
          </aside>
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}

            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                  className="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i className="bx bx-menu bx-sm"></i>
                </a>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <h1
                      type="text"
                      className="form-control border-0 shadow-none mt-3"
                      placeholder="Penjualan"
                      aria-label="Penjualan"
                    >
                      Penjualan
                    </h1>
                  </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item lh-1 me-3">
                    <a
                      className="github-button"
                      href="https://github.com/themeselection/sneat-html-admin-template-free"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >
                      Star
                    </a>
                  </li>

                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src="../assets/img/avatars/1.png"
                                  alt
                                  className="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">
                                John Doe
                              </span>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-user me-2"></i>
                          <span className="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-cog me-2"></i>
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                            <span className="flex-grow-1 align-middle">
                              Billing
                            </span>
                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                              4
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="auth-login-basic.html"
                        >
                          <i className="bx bx-power-off me-2"></i>
                          <span className="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-sm-5">
                    <div className="card mb-2">
                      <div className="card-body">
                        <form>
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                              No Transaksi
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="123456789"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                              Tanggal
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="23-9-2023 13:20"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-sm-3 col-form-label">
                              No Regis
                            </label>
                            <div className="col-sm-9">
                              <div className="input-group input-group-merge">
                                <input
                                  className="form-control"
                                  placeholder="987654321"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 order-1">
                    <div className="card">
                      <div className="card-body">
                        <div className="justify-content-between flex-sm-row flex-column gap-3">
                          <div className="flex-sm-column flex-row justify-content-between">
                            <div className="card-title">
                              <h5 className="display-4">TOTAL</h5>
                            </div>
                            <div className="mb-sm-3 text-end">
                              <h1 className="display-1 mb-0">Rp.40.000,-</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 order-3 order-md-2">
                      <div className="row">
                        <div className="col-9 row mt-3">
                          <label className="col-lg-3 col-md-4 col-sm-10 col-form-label">
                            Kode Item
                          </label>
                          <div className="col-sm-9 col-md-8 col-sm-8 col-lg-9">
                            <input
                              type="text"
                              className="form-control border-0 shadow-none"
                              placeholder="Search..."
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 mb-3 mt-3 text-end">
                          <button type="button" className="btn btn-primary">
                            Bayar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                  {/* <!-- Bordered Table --> */}
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive text-nowrap">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Kode Item</th>
                              <th>Keterangan</th>
                              <th>Jumlah</th>
                              <th>Satuan</th>
                              <th>Harga</th>
                              <th>Potongan</th>
                              <th>Total</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                <strong>1234</strong>
                              </td>
                              <td>Paracetamol</td>
                              <td>1</td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Tablet
                                </span>
                              </td>
                              <td>10.000</td>
                              <td>0</td>
                              <td>10000</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu">
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-edit-alt me-1"></i>{" "}
                                      Edit
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-trash me-1"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                                <i className="fab fa-react fa-lg text-info me-3"></i>
                                <strong>1235</strong>
                              </td>
                              <td>Simvastatin</td>
                              <td>1</td>
                              <td>
                                <span className="badge bg-label-success me-1">
                                  Capsul
                                </span>
                              </td>
                              <td>10.000</td>
                              <td>0</td>
                              <td>10000</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu">
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-edit-alt me-1"></i>{" "}
                                      Edit
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-trash me-1"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                                <i className="fab fa-vuejs fa-lg text-success me-3"></i>
                                <strong>1236</strong>
                              </td>
                              <td>Citirizine</td>

                              <td>1</td>

                              <td>
                                <span className="badge bg-label-info me-1">
                                  Oles
                                </span>
                              </td>
                              <td>10.000</td>
                              <td>0</td>
                              <td>10000</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu">
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-edit-alt me-1"></i>{" "}
                                      Edit
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-trash me-1"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                                <i className="fab fa-bootstrap fa-lg text-primary me-3"></i>
                                <strong>1237</strong>
                              </td>
                              <td>Degirol</td>
                              <td>1</td>
                              <td>
                                <span className="badge bg-label-warning me-1">
                                  Hisap
                                </span>
                              </td>
                              <td>10.000</td>
                              <td>0</td>
                              <td>10000</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu">
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-edit-alt me-1"></i>{" "}
                                      Edit
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      <i className="bx bx-trash me-1"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Bordered Table --> */}
                </div>

                {/* <!--/ Total Revenue --> */}
              </div>

              {/* <!-- Footer --> */}
              <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div className="mb-2 mb-md-0">
                    ©<script>document.write(new Date().getFullYear());</script>,
                    made with ❤️ by
                    <a
                      href="https://themeselection.com"
                      target="_blank"
                      className="footer-link fw-bolder"
                    >
                      Health Code Team
                    </a>
                  </div>
                </div>
              </footer>
              {/* <!-- / Footer --> */}

              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </body>
  );
}

export default Index;
