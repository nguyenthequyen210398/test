
function Sidebar(){

    return (
        <div className="sidebar">
        <div className="sidebar-brand">
          <h2>Admin Panel</h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              {/* <Link to="/admin/quan-ly-phim">Quản lý phim</Link> */}
              <div>Quản lý phim</div>
            </li>
            <li>
              {/* <Link to="/admin/quan-ly-suat-chieu">Quản lý suất chiếu</Link> */}
              <div>Quản lý suất chiếu</div>
            </li>
            <li>
              {/* <Link to="/admin/quan-ly-nguoi-dung">Quản lý người dùng</Link> */}
              <div>Quản lý người dùng</div>
            </li>
            <li>
              {/* <Link to="/admin/bao-cao">Báo cáo thống kê</Link> */}
              <div>Báo cáo thống kê</div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Sidebar;