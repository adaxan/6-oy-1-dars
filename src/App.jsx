import './App.css'
function App(){
  return (
    <div className="card">
      <div className="container">
      <div className="header__container">
        <div className="logo">
          <h3>myteam</h3>
          
        </div>
        <div className="nav">
          <ul className="nav-item">
            <li className="nav-list">
              <a href="#">Home</a>
            </li>
            <li className="nav-list">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <a href="#">Contact Us</a>
        </div>
      </div>
        <div className="hero__container">
          <div className="find">
            <h1>Find the <br /> best <span>talent</span></h1>
          </div>
          <div className="text">
            <p>Finding the right people and building high <br/> 
            performing teams can be hard. Most companies <br/>
             aren’t tapping into the abundance of global talent. <br/>
              We’re about to change that.</p>
          </div>
        </div>

        <div className="build__container">
          <div className="title">
            <h3>Build & manage <br /> distributed teams <br /> like no one else.</h3>
          </div>
          <div className="icons">
            <p><span>Experienced Individuals</span> <br /> Our network is made up of highly experienced professionals <br /> who are passionate about what they do.</p>
            <p><span>Easy to Implement</span> <br />  Our processes have been refined over years of implementation <br /> meaning our teams always deliver.</p>
            <p><span>Enhanced Productivity</span> <br /> Our customized platform with in-built analytics helps you <br /> manage your distributed teams.</p>
          </div>
        </div>

        <div className="deliver__container">
          <h2>Delivering real results for top <br /> companies. Some of our <span>success stories.</span></h2>

          <div className="min-card">
              <div className="card-1">
              <p className='min-titile'> “The team perfectly fit the specialized skill set <br /> required. They focused on the most essential <br /> features helping us launch the platform eight <br /> months faster than planned.”</p>
              <p className='name'><span className='min-card-title'>Kady Baker </span><br /> Product Manager at Bookmark</p>
              </div>
              <div className="card-2">
              <p className='min-titile'>“We needed to automate our entire onboarding <br /> process. The team came in and built out the <br /> whole journey. Since going live, user retention <br /> has gone through the roof!”</p>
              <p className='name'><span className='min-card-title'>Aiysha Reese</span> <br /> Founder of Manage</p>
              </div>
              <div className="card-3">
              <p className='min-titile'> “Amazing. Our team helped us build an app that <br />  delivered a new experience for hiring a physio. <br /> The launch was an instant success with 100k <br /> downloads in the first month.”</p>
              <p className='name'><span className='min-card-title'>Arthur Clarke</span><br /> Co-founder of MyPhysio</p>
              </div>
          </div>
        </div>

        <div className="ready__container">
          <div className="ready-title">
            <h2>Ready to get started?</h2>
          </div>
          <div className="ready-button">
            <a href="#">contact us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;