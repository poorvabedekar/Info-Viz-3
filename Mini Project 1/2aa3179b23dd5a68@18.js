function _1(md){return(
md`# PAPER LEAKS, OVER TIME`
)}

function _sheetUrl(){return(
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQGqb_tU4135BfiVq2lWDHEAn2fKlmnGz-ibKD0lhBWgNiAVrli-CQPw4JJiuRllvXiCcmdGbUviO9a/pub?gid=0&single=true&output=csv"
)}

function _data(d3,sheetUrl){return(
d3.csv(sheetUrl, d3.autoType)
)}

function _bodyFilter(Inputs){return(
Inputs.select(
  ["All", "Central", "State", "Private"], 
  { label: "Conducting Body Type:", value: "All" }
)
)}

function _statusFilter(Inputs){return(
Inputs.select(
  ["All", "Confirmed", "Alleged or Unconfirmed", "Claim Dismissed"], 
  { label: "Leak Confirmation Status:", value: "All" }
)
)}

function _actionFilter(Inputs){return(
Inputs.select(
  ["All", "Re-exam", "Exam Cancelled", "No Re-exam"], 
  { label: "Action Taken:", value: "All" }
)
)}

function _7(Plot,data,bodyFilter,statusFilter,actionFilter){return(
Plot.plot({
  title: "Exam Leak Incidents by Year and Category",
  width: 900,
  height: 400,
  grid: true,
  x: {
    label: "Year →",
    tickFormat: "d"
  },
  y: {
    label: "↑ Number of Exam Leak Incidents",
    ticks: 0
  },
  color: {
    legend: true,
    label: "Exam Category"
  },
  marks: [
    Plot.dot(
      data, 
      Plot.dodgeY({
        x: "Year",
        fill: "Exam Category",
        
        // Dynamic opacity rule: Returns 1 (100%) if all filters match, else 0.2 (20%)
        fillOpacity: (d) => {
          const matchBody = bodyFilter === "All" || d["Conducting Body Type"] === bodyFilter;
          const matchStatus = statusFilter === "All" || d["Leak Confirmation Status"] === statusFilter;
          const matchAction = actionFilter === "All" || d["Action Taken"] === actionFilter;

          return (matchBody && matchStatus && matchAction) ? 1.0 : 0.2;
        },
        
        title: (d) => `Exam: ${d["Exam name"]}
Category: ${d["Exam Category"]}
Year: ${d.Year}
Body: ${d["Conducting Body Type"]}
Status: ${d["Leak Confirmation Status"]}
Action: ${d["Action Taken"]}`,
        title: (d) => `Exam: ${d["Exam Name"]}\nConducting Body: ${d["Conducting Body"]}\nAppeared Students: ${d["Appeared Students"]}`, // Controls what shows on hover
        r: "Appeared Students",        // Size of the dots
        padding: 4, // Spacing between dots
        tip: true     // Enables hover tooltip to inspect individual dots
      })
    )
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable().define("sheetUrl", _sheetUrl);
  main.variable().define("data", ["d3","sheetUrl"], _data);
  main.variable(observer("viewof bodyFilter")).define("viewof bodyFilter", ["Inputs"], _bodyFilter);
  main.variable().define("bodyFilter", ["Generators", "viewof bodyFilter"], (G, _) => G.input(_));
  main.variable(observer("viewof statusFilter")).define("viewof statusFilter", ["Inputs"], _statusFilter);
  main.variable().define("statusFilter", ["Generators", "viewof statusFilter"], (G, _) => G.input(_));
  main.variable(observer("viewof actionFilter")).define("viewof actionFilter", ["Inputs"], _actionFilter);
  main.variable().define("actionFilter", ["Generators", "viewof actionFilter"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","data","bodyFilter","statusFilter","actionFilter"], _7);
  return main;
}
