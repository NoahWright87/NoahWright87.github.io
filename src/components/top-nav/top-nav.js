//import logo from './logo.svg';
//import './App.css';

function TopNav() {
  return (
    <div className="TopNav">
      <header className="TopNav">
        
	  
	  
	  
	  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <a class="navbar-brand" href="#">TODO: Logo</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
	  
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="resume.html">Resume</a>
             </li>
			 <li class="nav-item">
			 	<a class="nav-link" href="portfolio.html">Portfolio</a> 
			 </li>
			 <li class="nav-item">
			 	<a class="nav-link" href="contact.html">About</a> 
			 </li>
			 <li class="nav-item">
			 	<a class="nav-link" href="contact.html">Contact</a> 
			 </li>
          </ul>
       </div>
    </nav>
	  
	  
	  
	  
      </header>
    </div>
  );
}

export default TopNav;
