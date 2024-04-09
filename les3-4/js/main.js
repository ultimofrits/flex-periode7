// Define a class called ColorCard for creating the color card objects
class ColorCard {
    id; // Declare a property for storing the id of the color card
    color; // Declare a property for storing the color value of the card
    addToList; // Declare a property for storing the reference to the list where the card will be added
    htmlElement; // Declare a property for storing the HTML element of the color card
    circle; // Declare a property for storing the HTML element representing the circle
    text; // Declare a property for storing the HTML element representing the text

    // Constructor method for creating a new ColorCard object
    constructor(newId, newColor, addToList) {
        // Initialize the properties with the given values
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        // Create the HTML elements for the color card and its components
        this.htmlElement = document.createElement("li"); // Create a list item element
        this.htmlElement.classList = "colors__color"; // Set the class of the list item

        this.circle = document.createElement("figure"); // creating the figure element for the circle
        this.circle.classList = "colors__circle"; // class circle element
        this.circle.style.background = this.color; // background color circle

        this.text = document.createElement("p"); // Create a paragraph element for the text
        this.text.innerText = "Copied"; // Set the text content of the paragraph
        this.text.classList = "colors__text"; // Set the class of the paragraph

        // Define a specific actions for when the colorcard is clicked
        this.htmlElement.onclick = this.onHTMLElementClicked;
        
        // Render the color card
        this.render();
    }

    // this function handles the click event from above
    onHTMLElementClicked = () => {
        // Add a CSS class to the circle element to indicate it's selected and to change the styling of the selected circle
        this.circle.classList.add("colors__circle--selected");
        // Set the title of the document to the color value of the card
        document.title = this.color;
        // Copy the color value to the clipboard
        window.navigator.clipboard.writeText(this.color);
    }

    // Method for rendering the color card
    render() {
        // adding the html element as a child to the list
        this.addToList.appendChild(this.htmlElement);
        // adding the circle and the text as children to the color card
        this.htmlElement.appendChild(this.text);
        this.htmlElement.appendChild(this.circle);
    }
}

// Define a class called ColorList for creating color list objects
class ColorList {
    id; // Declare a property for storing the id of the color list
    htmlElement; // Declare a property for storing the HTML element of the color list

    // Constructor method for creating a new ColorList object
    constructor(newId) {
        // Initialize the properties with the provided values
        this.id = newId;
        // Create a new unordered list element for the color list
        this.htmlElement = document.createElement("ul");
        // Set the id and class of the unordered list
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        // Render the color list
        this.render();
    }

    // Method for rendering the color list
    render() {
        // adding the html element as a child to the body of the document
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

// in this class we define and add all functionality to the hsl generator 
class HSLGenerator {
    randomHue; // Declare a property for storing the randomly generated hue value
    randomSaturation; // Declare a property for storing the randomly generated saturation value
    randomLightness; // Declare a property for storing the randomly generated lightness value

    // constructor generates hsl
    constructor() {
        // Call the method to generate random HSL values
        this.generateHSL();
    }

    // Method for generating a random hue value
    generateHue = function() {
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    // Method for generating a random saturation value
    generateSaturation = function() {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    }

    // Method for generating a random lightness value
    generateLightness = function() {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
    }

    // Method for generating a random HSL color value
    generateHSL = function() {
        // Call the methods to generate random hue, saturation, and lightness values
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        // Construct the HSL color value using the generated values
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
    }
}

// Define a class called App for managing the entire... you guessed it! app. lol
class App {
    id; // Declare a property for storing the id of the app
    colorlist; // Declare a property for storing the color list object
    hslGenerator; // Declare a property for storing the HSL generator object

    // Constructor method for creating a new App object
    constructor(newId) {
        // Initialize the properties with the provided values
        this.id = newId;
        // Create a new ColorList object and assign it to the colorlist property
        this.colorlist = new ColorList(this.id);
        // Create a new HSLGenerator object and assign it to the hslGenerator property
        this.hslGenerator = new HSLGenerator();
        // Generate color cards and add them to the color list
        this.generateColorCards();
    }

    // Method for generating color cards and adding them to the color list
    generateColorCards = function() {
        // Generate 100 color cards
        for (let i = 1; i <= 100; i++) {
            // Generate a random HSL color value
            this.hslGenerator.generateHSL();
            // Create a new ColorCard object with the generated color and add it to the color list
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorlist.id));
        }
    }
}

// Create an instance of the App class to start the... you guessed it again! app. lol. 
const app = new App("js--app");











