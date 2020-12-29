import React from 'react';
import "./App.css";
const computersFormat = [
  {
    id:1,
    imagePath : "https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg",
    description:"Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black",
    author:"by Acer"
  },
  {
    id:2,
    imagePath : "https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg",
    description:"Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)",
    author:"by Seagate"
  },
  {
    id:3,
    imagePath : "https://images-na.ssl-images-amazon.com/images/I/41QztBTooxL.jpg",
    description:"RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4",
    author:"by RUNMUS"
  }
]
 function App() {
  return (
   <>
 {computersFormat.map(computersSection =>  < ComputerList computers={computersSection}/>)}
   </>
  )
}
function ComputerList (props) {
  const {imagePath,author,description,id} = props.computers
return(
 <>
 <section id={id} className="section-computers">
  <img src={imagePath} />
  <p>{description}</p>
  <span>{author}</span>
 </section>
 </>
)
}
export default App;