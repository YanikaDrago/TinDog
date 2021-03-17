import React from "react";
import featuresIcons from "./featuresIcons";
import Icon from "./Icon"

function CreateIcon(array){
    return(
        <Icon 
          key={array.id}
          icon={array.icon}
          title={array.title}
          text={array.text}
        />
      )
}


function Features(){
    return(
    <section className="white-section" id="features">           
        <div className="container-fluid">
            <div className="row">
                {featuresIcons.map(CreateIcon)}
            </div>
        </div>
    </section>
        
    )
}

export default Features;