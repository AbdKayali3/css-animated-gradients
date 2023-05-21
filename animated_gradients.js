// Animated Graidents
// This library will allow you to animate your gradients
// You cn animate depends on a speicific event or just a normal animations
// This Libaray does support text background gradients
// Made By Abd Kayali

// parameter example
////////////////////
parametersObj = {
    elementClass: "body",
    options: {
        events: [], // a list of events that will got applyed. ["hover", "mouse-on", "mouse-off", "active", focus, "click"]
        eventHandler: null,
        type: "linear", // linear or radial
        duration: 5, // seconds
        fillMode: "forwards", // forwards, backwards, both, none, 
        delay: 0, // second
        direction: "normal", // normal, reverse, alternate, alternate-reverse
    },
    frame_0: {
        angle : 0,
        colors: [
            "#000000", "10%",
            "#888888", "45%",
            "#FFFFFF", "90%"
        ]
    },
    frame_25: {
        angle : 45,
        colors: [
            "#000000", "10%",
            "#888888", "45%",
            "#FFFFFF", "90%",
        ],
    },
    frame_50: {
        angle : 90,
        colors: [
            "#000000", "10%",
            "#888888", "45%",
            "#FFFFFF", "90%",
        ],
    },
    frame_75: {
        angle : 135,
        colors: [
            "#000000", "10%",
            "#888888", "45%",
            "#FFFFFF", "90%",
        ],
    },
    frame_100: {
        angle : 180,
        colors: [
            "#000000", "10%",
            "#888888", "45%",
            "#FFFFFF", "90%",
        ],
    },
}

function AnimateGradient(parametersObj = {

        }) {

        

        if (parametersObj == undefined) {
            parametersObj = {};
        }
        if (parametersObj.elementClass == undefined) {
            console.error("Error: elementClass Objet should not be empty.\n Please pass a class name");
            return;
        }
        if (parametersObj.options == undefined) {
            parametersObj.options = {};
        }
        if (parametersObj.options.events == undefined) {
            parametersObj.options.events = [];
        } else {
            if (typeof(parametersObj.options.events) != "array") {
                console.error("Error: elementClass Objet should not be empty.\n Please pass a class name");
                return;
            }
        }
        
            
}