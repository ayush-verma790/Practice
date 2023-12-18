import '../Navbar/navbar.scss'
function Nav (){
  return(
      <>
       <div className='nav-main'>
          <div className='nav-head'>
              <img  className="logo"src="https://xcelore.com/wp-content/uploads/2023/08/cropped-log-w.png" alt="loading"></img>
               

          </div>
          <div><h4> Log Analyzer</h4></div>
          <ul className='nav-list'>
              <li className='list'> Home </li>
              <li className='list'> Services </li>
              <li  className='list'> About US </li>
          </ul>
       </div>
      </>
  )
}
export default  Nav;