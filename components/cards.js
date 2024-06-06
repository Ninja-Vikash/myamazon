const card = document.getElementById("cards");

function Card() {
  const card2 = [
    {
      productImg: "A1",
      productName: "Home decor",
    },
    {
      productImg: "A2",
      productName: "Home furnishings",
    },
    {
      productImg: "A3",
      productName: "Home storage",
    },
    {
      productImg: "A4",
      productName: "Lighting solutions",
    },
  ];
  const card3 = [
    {
      productImg : "B1",
      productName : "Up to 75% off | boAt"
    },
    {
      productImg : "B2",
      productName : "Up to 75% off | boult"
    },
    {
      productImg : "B3",
      productName : "Up to 75% off | Noise"
    },
    {
      productImg : "B4",
      productName : "Up to 75% off | Zebronics"
    }
  ];
  const card4 = [
    {
      productImg : "C1",
      productName : "Clothing"
    },
    {
      productImg : "C2",
      productName : "Footwear"
    },
    {
      productImg : "C3",
      productName : "Watches"
    },
    {
      productImg : "C4",
      productName : "Bags & wallet"
    }
  ];
  const card5 = [
    {
      productImg : "D1",
      productName : "Spin mops, wipes & more"
    },
    {
      productImg : "D2",
      productName : "Bathromm hardware & accessories"
    },
    {
      productImg : "D3",
      productName : "Hammers, screwdrivers & more"
    },
    {
      productImg : "D4",
      productName : "Extension boards, plugs & more"
    }
  ];
  const card6 = [
    {
      productImg : "E1",
      productName : "Gaming Accessories"
    },
    {
      productImg : "E2",
      productName : "Keyboard and Mice"
    },
    {
      productImg : "E3",
      productName : "Stands, Cables & more"
    },
    {
      productImg : "E4",
      productName : "Backpacks"
    }
  ];
  const card7 = [
    {
      productImg : "F1",
      productName : "Women's Clothing"
    },
    {
      productImg : "F2",
      productName : "Footwear+Handbags"
    },
    {
      productImg : "F3",
      productName : "Watches"
    },
    {
      productImg : "F4",
      productName : "Fashion jewellery"
    }
  ];
  const card8 = [
    {
      productImg : "G1",
      productName : "Air conditioners"
    },
    {
      productImg : "G2",
      productName : "Refrigerators"
    },
    {
      productImg : "G3",
      productName : "Microwaves"
    },
    {
      productImg : "G4",
      productName : "Washing machines"
    }
  ];
  const card9 = [
    {
      productImg : "H1",
      productName : "Starting ₹299 | Bikes, trikes & ride-ons"
    },
    {
      productImg : "H2",
      productName : "Starting ₹149 | Sport & outdoor"
    },
    {
      productImg : "H3",
      productName : "Starting ₹99 | Soft toys"
    },
    {
      productImg : "H4",
      productName : "Starting ₹199 | Indoor gamesb"
    }
  ];
  return (
    <>
      {/* Card 1 */}
      <div className="card">
        <div className="cardHeading">
          Bluetooth Calling Smartwatch starts at ₹1,999
        </div>
        <img src="assets/Watch.jpg" alt="" />
        <a href="">Shop Now</a>
      </div>
      {/* Card 2 */}
      <div className="card">
        <div className="cardHeading">Revamp your home in style</div>
        <div className="cardContainer">
          {card2.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">Explore all</a>
      </div>
      {/* Card 3 */}
      <div className="card">
        <div className="cardHeading">Up to 75% off | Headphones</div>
        <div className="cardContainer">
        {card3.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">See all offers</a>
      </div>
      {/* Card 4 */}
      <div className="card">
        <div className="cardHeading">Up to 70% off | Styles for men</div>
        <div className="cardContainer">
        {card4.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">Mega Fashion Days</a>
      </div>
      {/* Card 5 */}
      <div className="card">
        <div className="cardHeading">
          Starting ₹99 | All your home improvement needs
        </div>
        <div className="cardContainer">
        {card5.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">Explore all</a>
      </div>
      {/* Card 6 */}
      <div className="card">
        <div className="cardHeading">
          Starting ₹99 | All your home improvement needs
        </div>
        <div className="cardContainer">
        {card6.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">See all offers</a>
      </div>
      {/* Card 7 */}
      <div className="card">
        <div className="cardHeading">Up to 70% off | Styles for women</div>
        <div className="cardContainer">
        {card7.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">Mega Fashion Days</a>
      </div>
      {/* Card 8 */}
      <div className="card">
        <div className="cardHeading">
          Appliances for your home | Up to 55% off
        </div>
        <div className="cardContainer">
        {card8.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">See more</a>
      </div>
      {/* Card 9 */}
      <div className="card">
        <div className="cardHeading">Starting ₹99 | Toys for your kids</div>
        <div className="cardContainer">
        {card9.map((card) => {
            return (
              <div key={card.productImg} className="product">
                <img src={`assets/${card.productImg}.jpg`} alt="" />
                <p>{card.productName}</p>
              </div>
            );
          })}
        </div>
        <a href="">See more</a>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(card).render(<Card />);