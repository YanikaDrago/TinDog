import React from "react";
import subscriptions from "./subscriptions"
import Card from "./Card";

function createCard(item){
    return(
      <Card 
        key={item.id}
        name={item.name}
        pirority={item.pirority}
        price={item.price}
        matches={item.matches}
        messages={item.messages}
        usage={item.usage}
        btn={item.btn}
      />
    )
  }

function Pricing(){
    return(
        <section className="white-section" id="pricing">

            <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>
            <div className="row">{subscriptions.map(createCard)}</div>
         </section>
    )
}

export default Pricing;