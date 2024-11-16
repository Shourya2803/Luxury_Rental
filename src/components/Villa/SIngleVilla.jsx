import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";
const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filteredVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.image} alt={filteredVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={"https://imgs.search.brave.com/tN_Q_0DBL3h81hHq_nmJn-qDBRA1W4Ndmvt8XKURfNI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/dXh1cnktcG9vbC12/aWxsYS1zcGVjdGFj/dWxhci1jb250ZW1w/b3JhcnktZGVzaWdu/LWRpZ2l0YWwtYXJ0/LXJlYWwtZXN0YXRl/LWhvbWUtaG91c2Ut/cHJvcGVydHktZ2Vf/MTI1OC0xNTA3NTUu/anBnP3NlbXQ9YWlz/X2h5YnJpZA"} alt="villa" />
                <img src={"https://imgs.search.brave.com/cRnwsERMlyAYt2miB767GW0-UdYhjUoYZEdjSWoWdro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlsbGFzb2ZkaXN0/aW5jdGlvbi5jb20v/aW1nL3YyL2Rlc3Rp/bmF0aW9ucy9pdGFs/eS53ZWJw"} alt="villa" />
              </div>
              <div>
                <img src={"https://imgs.search.brave.com/jbg7AD4OU9OOUyvmXE4HTK875ZrvomlsyGpgQI4U3sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NjczMTgzOC9waG90/by9jb3VwbGUtc3Rh/bmRpbmctb3V0c2lk/ZS1jYWJpbi1hdC1z/dGFydC1vZi13ZWVr/ZW5kLWdldGF3YXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUZRQkxOYlNtSHlD/MGxxczZLV2QxWEk2/LXMxZngxU19xcGpI/YmFJZDFrRDA9"} alt="villa" />
                <img src={"https://imgs.search.brave.com/6vi6cxHDTO6MxGXSTM11W2QPB4KLHQgcqsVYUh72LEs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dW5zZXQtYXJjaGl0/ZWN0dXJhbC1tYXRy/aXgtc3R1bm5pbmct/bW9kZXJuLXZpbGxh/LXdpdGgtc3dpbW1p/bmctcG9vbC1sYW5k/c2NhcGVfMTQwOS01/MTk4LmpwZz9zZW10/PWFpc19oeWJyaWQ"} alt="villa" />
              </div>
            </div>
          </div>
          <h4>{filteredVilla.location}</h4>
          <p>
            {filteredVilla.bathrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
            {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter}{" "}
            Area
          </p>
          <div className="checkin_out">
            <h5>
              Check In: <span> 9:00 AM</span>
            </h5>
            <h5>
              Check Out <span> 11:00 PM</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5944155443667!2d67.12354627605013!3d25.01389403909968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346ef1e65505b%3A0xb2b56296fea70ccc!2sMohsin%20Foods!5e0!3m2!1sen!2s!4v1703674502338!5m2!1sen!2s"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;