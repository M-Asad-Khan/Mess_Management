import React from "react";
import Layout from "../Layout";
import Today from './cards/today_menu'
export default function Dashboard() {

  return (
    <Layout>
      <div>
        <div className="row">
          <div>
            <Today />
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="stats-card-two mb-30">
              <div className="media align-items-center justify-content-between">
                <div className="ml-0">
                  <p className="mb-10 line-height-1">Net Profit</p>
                  <h3 className="mb-0 fs-25">$20,467</h3>
                </div>
                <div className="avatar avatar-cyan">
                  {/* <i data-feather="briefcase"></i> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="stats-card-two mb-30">
              <div className="media align-items-center justify-content-between">
                <div className="ml-0">
                  <p className="mb-10 line-height-1">New Products</p>
                  <h3 className="mb-0 fs-25">10,000</h3>
                </div>
                <div className="avatar avatar-gold">
                  {/* <i data-feather="shopping-bag"></i> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="stats-card-two mb-30">
              <div className="media align-items-center justify-content-between">
                <div className="ml-0">
                  <p className="mb-10 line-height-1">New Users</p>
                  <h3 className="mb-0 fs-25">$23,523</h3>
                </div>
                <div className="avatar avatar-purple">
                  {/* <i data-feather="users"></i> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
