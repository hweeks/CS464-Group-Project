/* eslint-disable react/prop-types */

// Sidbar setup for testing
export default function Sidebar({ switchComponentView }) {
  return (
    <div className="sidebar text-center">
      <section className="sidebar-main-view">
        {/* <p className="fs-5 mt-1">Main View</p> */}
        <button
          className="card-btn rounded m-1"
          value="card"
          onClick={(e) => switchComponentView(e, e.target.value)}>
          Card
        </button>
        <button
          className="card-btn rounded m-1"
          value="chart"
          onClick={(e) => switchComponentView(e, e.target.value)}>
          Chart
        </button>
        <button
          className="card-btn rounded m-1"
          value="table"
          onClick={(e) => switchComponentView(e, e.target.value)}>
          Table
        </button>
      </section>
    </div>
  );
}
