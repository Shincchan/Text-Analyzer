import React, {useState} from 'react'
// import './About.css'
export default function About() {
   const [myStyle, setMyStyle] = useState({
    color:"white",
    backgroundColor:"black"
} )
  const [themeName, setthemeName] = useState("Enable Light Mode");
  const [btnTheme, setbtnTheme] = useState("btn btn-dark mx-2")
  function toggleTheme(event){
        if(myStyle.color==='white'){
            setMyStyle(
                {
                    color:"black",
                    backgroundColor:"white",
                    
                }
            )
            setthemeName('Enable dark mode');
            setbtnTheme("btn btn-primary mx-2");
        }
        else{
            setMyStyle(
                {
                    color:"white",
                    backgroundColor:"black",
                    border:"1px solid white"
                }
            )
            setbtnTheme("btn btn-dark mx-2");
            setthemeName('Enable light mode');
           
        }
  }
return (
    <>
    <div className='container ' style={myStyle}>
            <h1>About Us </h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   TextUtils analyze Your text in an efficient way , it can be serve as word count ,Previewer etc
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   This app is totally free to you ! Just to make your life easy
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                   Browser Compatibility
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   App work efficiently smoothly on every browser .Fully responsive. 
                </div>
                </div>
            </div>
        </div>
        <button type="button" className={btnTheme} onClick={toggleTheme}>{themeName}</button>

    </div>
    </>
  )
}
