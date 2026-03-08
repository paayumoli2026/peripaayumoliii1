import React from "react";
import image1 from "../assets/ChiefGuest/image1.png";
import image2 from "../assets/ChiefGuest/image2.png";
import image3 from "../assets/ChiefGuest/image3.png";


const chiefGuests = [
  { id: 1, name: "G. V. Prakash Kumar", role: "Indian musical composer/ Actor/ playback singer", photo: image1 },
  { id: 2, name: "Pugazh", role: "Tamil Actor/ Comedian", photo: image2 },
  { id: 3, name: "Anthony Daasan", role: "Indian singer", photo: image3 },
];

const ChiefGuests = () => {
  const [topGuest, ...bottomGuests] = chiefGuests;

  const renderGuestCard = (guest) => (
    <article
      key={guest.id}
      className="group rounded-3xl bg-black/35 border border-orange-300/30 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(255,106,0,0.45)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/4] overflow-hidden">
        <img
          src={guest.photo}
          alt={guest.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-extrabold text-orange-50 uppercase tracking-wide">
          {guest.name}
        </h3>
        <p className="mt-1 text-sm font-bold uppercase tracking-wider text-orange-200">
          {guest.role}
        </p>
      </div>
    </article>
  );

  return (
    <section id="chief-guests" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
            Chief Guests
          </h2>
          <p className="text-orange-100/90 max-w-2xl mx-auto font-bold">
            Honoring the distinguished guests who inspire our celebration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-sm">{renderGuestCard(topGuest)}</div>
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
            {bottomGuests.map((guest) => renderGuestCard(guest))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuests;
