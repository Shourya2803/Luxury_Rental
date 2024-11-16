import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, accusantium quo! Expedita sint iusto quaerat excepturi velit similique.</p>
        <div className="region_container">
        <div className="card">
         <img src="https://i.pinimg.com/474x/4b/ad/37/4bad374ea5813e1867ea947c54aad2b0.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="https://i.pinimg.com/736x/b8/3f/92/b83f922732d62c47eaf74161bd02453d.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions