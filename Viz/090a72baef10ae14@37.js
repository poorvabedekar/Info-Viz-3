import define1 from "./493851ae5989f70a@398.js";

function _1(md){return(
md`# I got this!Yay!`
)}

function _data(){return(
[ // Define the dataset array accessible by all notebook cells
  { subject: "Marathi", grade: "9th", score: 90 }, // Row for Marathi 9th grade
  { subject: "Marathi", grade: "10th", score: 92 }, // Row for Marathi 10th grade
  { subject: "English", grade: "9th", score: 75 }, // Row for English 9th grade
  { subject: "English", grade: "10th", score: 89 }, // Row for English 10th grade
  { subject: "Sanskrit", grade: "9th", score: 100 }, // Row for Sanskrit 9th grade
  { subject: "Sanskrit", grade: "10th", score: 100 }, // Row for Sanskrit 10th grade
  { subject: "Science", grade: "9th", score: 86 }, // Row for Science 9th grade
  { subject: "Science", grade: "10th", score: 98 }, // Row for Science 10th grade
  { subject: "Maths", grade: "9th", score: 99 }, // Row for Maths 9th grade
  { subject: "Maths", grade: "10th", score: 96 }, // Row for Maths 10th grade
  { subject: "Social Science", grade: "9th", score: 78 }, // Row for Social Science 9th grade
  { subject: "Social Science", grade: "10th", score: 86 } // Row for Social Science 10th grade
]
)}

function _Chart(require){return(
require("chart.js@auto")
)}

function _5(DOM,Chart)
{ // Open cell block scope
  const canvas = DOM.canvas(600, 300); // Create an HTML canvas element for drawing
  const ctx = canvas.getContext('2d'); // Get 2D rendering canvas context
  new Chart.Chart(ctx, { // Instantiate a new Chart.js chart on the canvas
    type: 'bar', // Specify chart type as a bar chart
    data: { // Supply visual data configuration
      labels: ["Marathi", "English", "Sanskrit", "Science", "Maths", "Social Science"], // Set X-axis categories
      datasets: [ // Supply individual data series
        { label: "9th", data: [90, 75, 100, 86, 99, 78], backgroundColor: "#4F46E5" }, // Grade 9 values with Indigo theme color
        { label: "10th", data: [92, 89, 100, 98, 96, 86], backgroundColor: "#06B6D4" }  // Grade 10 values with Cyan theme color
      ] // Close datasets array
    }, // Close data configuration object
    options: { // Supply scale and display options
      scales: { y: { beginAtZero: true, max: 100 } } // Lock Y-axis range strictly from 0 to 100
    } // Close options object
  }); // Close Chart instantiation
  return canvas; // Return completed canvas element to display in notebook
}


function _6(md){return(
md`# Grammar Paradigm (Observable Plot)`
)}

function _7(Plot,data){return(
Plot.plot({ // Build chart using concise declarative grammar
  color: { legend: true, domain: ["9th", "10th"], range: ["#4F46E5", "#06B6D4"] }, // Set legend and theme colors (Indigo / Cyan)
  x: { label: null }, // Hide inner bar category labels for clean aesthetics
  fx: { label: "Subject" }, // Group outer columns by Subject
  y: { label: "Score", domain: [0, 100] }, // Set Y-axis label and scale range 0-100
  marks: [ // Define visual element marks
    Plot.barY(data, { x: "grade", y: "score", fill: "grade", fx: "subject" }), // Map bars directly from data properties
    Plot.ruleY([0]) // Add a solid baseline reference at y = 0
  ] // Close marks array
})
)}

function _8(md){return(
md`# Component Paradigm (D3.js)`
)}

function _9(d3,data)
{ // Open cell block scope
  const svg = d3.create("svg").attr("viewBox", "0 0 600 300"); // Create responsive SVG canvas element
  const subjects = ["Marathi", "English", "Sanskrit", "Science", "Maths", "Social Science"]; // Array of categories
  const x0 = d3.scaleBand().domain(subjects).range([40, 580]).padding(0.2); // Outer x-scale for subject groups
  const x1 = d3.scaleBand().domain(["9th", "10th"]).range([0, x0.bandwidth()]).padding(0.1); // Inner x-scale for individual bars
  const y = d3.scaleLinear().domain([0, 100]).range([260, 20]); // Linear y-scale mapping score 0-100 to SVG height
  const color = d3.scaleOrdinal().domain(["9th", "10th"]).range(["#4F46E5", "#06B6D4"]); // Color scale mapping grades to Indigo/Cyan
  svg.append("g").selectAll("rect").data(data).enter().append("rect") // Bind data array and create an SVG rectangle per row
    .attr("x", d => x0(d.subject) + x1(d.grade)) // Position horizontal x offset using scales
    .attr("y", d => y(d.score)) // Position top edge based on mapped score
    .attr("width", x1.bandwidth()) // Calculate width of individual bar
    .attr("height", d => 260 - y(d.score)) // Calculate height extending down to baseline
    .attr("fill", d => color(d.grade)); // Set fill color dynamically by grade
  svg.append("g").attr("transform", "translate(0,260)").call(d3.axisBottom(x0)); // Render bottom horizontal x-axis
  svg.append("g").attr("transform", "translate(40,0)").call(d3.axisLeft(y)); // Render left vertical y-axis
  return svg.node(); // Return completed SVG element to display in notebook
}


function _10(md){return(
md`# Sketch Paradigm (p5.js)`
)}

function _11(p5,data)
{ // Open cell block scope
  const div = document.createElement("div"); // Create HTML container element for p5 canvas
  new p5(p => { // Initialize p5 sketch instance attached to the container
    p.setup = () => { // Canvas setup function
      p.createCanvas(600, 300); // Define drawing area width and height
      p.noLoop(); // Turn off continuous animation loop to render static chart
    }; // Close setup function
    p.draw = () => { // Main drawing render loop
      p.background(255); // Fill background with white
      const subjects = ["Marathi", "English", "Sanskrit", "Science", "Maths", "Social Science"]; // Category list
      subjects.forEach((subj, i) => { // Loop through each subject index
        const x = 50 + i * 85; // Calculate horizontal starting position for group
        const g9 = data.find(d => d.subject === subj && d.grade === "9th").score; // Look up 9th grade score
        const g10 = data.find(d => d.subject === subj && d.grade === "10th").score; // Look up 10th grade score
        p.fill("#4F46E5"); // Set brush color to Indigo for 9th grade bar
        p.rect(x, 250 - g9 * 2, 15, g9 * 2); // Draw 9th grade bar rectangle
        p.fill("#06B6D4"); // Set brush color to Cyan for 10th grade bar
        p.rect(x + 18, 250 - g10 * 2, 15, g10 * 2); // Draw 10th grade bar rectangle
        p.fill(0); // Set brush color to black for text labels
        p.textSize(9); // Set label text size
        p.text(subj.substring(0, 4), x, 270); // Print subject abbreviation below bars
      }); // Close loop
    }; // Close draw function
  }, div); // Pass container element to p5 constructor
  return div; // Return container element to render cell output
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", _data);
  main.variable(observer("Chart")).define("Chart", ["require"], _Chart);
  const child1 = runtime.module(define1);
  main.import("p5", child1);
  main.variable(observer()).define(["DOM","Chart"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["Plot","data"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["d3","data"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["p5","data"], _11);
  return main;
}
