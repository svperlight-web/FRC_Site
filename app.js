const articles = [
  {id:"swerve",title:"Swerve Drive",category:"Mechanical",summary:"An overview of swerve drivetrains, module components, and the basic principles behind holonomic movement.",tags:["drivetrain","swerve","modules"],updated:"Starter guide",body:`<h2>What is swerve drive?</h2><p>Swerve drive is a holonomic drivetrain configuration. Each wheel module can both rotate to change its direction and spin to propel the robot. By coordinating the modules, the robot can translate in different directions while also rotating.</p><h2>Typical module components</h2><ul><li><b>Drive motor:</b> powers wheel rotation.</li><li><b>Steer motor:</b> changes the wheel's direction.</li><li><b>Absolute or relative encoder:</b> measures steering position.</li><li><b>Wheel and gearing:</b> transfer motor output to the carpet.</li></ul><h2>Why teams use it</h2><p>Swerve can provide flexible movement and precise path following, but it adds mechanical, electrical, and software complexity compared with simpler drivetrains.</p><h2>What to learn next</h2><ul><li>Module geometry and wheel locations</li><li>Steering calibration and encoder offsets</li><li>Odometry and robot pose estimation</li><li>Motor current limits and traction</li></ul>`},
  {id:"can",title:"CAN Bus",category:"Electrical",summary:"Understand the Controller Area Network used by many FRC robot devices to communicate over a shared bus.",tags:["CAN","wiring","electronics","communications"],updated:"Starter guide",body:`<h2>What is CAN?</h2><p>CAN (Controller Area Network) is a communication bus used by many devices on an FRC robot. Instead of requiring a separate signal wire from the roboRIO to every device, compatible devices communicate over a shared pair of CAN wires.</p><h2>FRC wiring concepts</h2><ul><li>Use the device manufacturer's documentation and the current season's official wiring rules.</li><li>Keep the CAN high and CAN low conductors correctly connected and consistent throughout the bus.</li><li>Follow the device and roboRIO documentation for bus termination requirements.</li><li>Use the recommended wire type, connectors, and strain relief.</li></ul><h2>Troubleshooting approach</h2><p>When a device is not communicating, check its power, wiring continuity, connector seating, device configuration, and diagnostic software. Change one thing at a time and document what you test.</p>`},
  {id:"pid",title:"PID Control",category:"Programming",summary:"A beginner-friendly explanation of proportional, integral, and derivative feedback control.",tags:["PID","control","feedback","programming"],updated:"Starter guide",body:`<h2>What is PID?</h2><p>A PID controller is a feedback control method that uses the difference between a desired value (the setpoint) and a measured value (the process variable) to calculate a control response.</p><h2>The three terms</h2><ul><li><b>Proportional (P):</b> responds to the current error. A larger error generally produces a larger correction.</li><li><b>Integral (I):</b> accumulates error over time and can help address persistent offset.</li><li><b>Derivative (D):</b> responds to how quickly the error is changing and can help damp motion.</li></ul><h2>Using PID on a robot</h2><p>FRC teams may use feedback controllers for mechanisms such as arms, elevators, flywheels, and drivetrain motion. The sensor, units, gains, output limits, and mechanism behavior all matter.</p><p>Start with a safe test setup, understand the mechanism's limits, and tune according to the library and hardware documentation being used.</p>`},
  {id:"wpilib",title:"WPILib",category:"Documentation",summary:"The open-source software library and tools commonly used by FRC teams to program robots.",tags:["WPILib","Java","C++","robot code"],updated:"Reference overview",body:`<h2>What is WPILib?</h2><p>WPILib is the software library and set of tools maintained for FRC robot programming. It provides APIs and utilities for common robot tasks, including motor and sensor interfaces, command-based programming, and driver-station communication.</p><h2>Common areas</h2><ul><li><b>Robot project:</b> the main program deployed to the roboRIO.</li><li><b>Command-based framework:</b> a way to organize robot behavior into subsystems and commands.</li><li><b>Hardware APIs:</b> interfaces for supported control hardware.</li><li><b>Simulation:</b> tools that help teams test portions of robot code without the physical robot.</li></ul><div class="source-box">Official reference: <a href="https://docs.wpilib.org/" target="_blank" rel="noopener">WPILib Documentation ↗</a></div>`},
  {id:"talon",title:"Talon FX",category:"Hardware",summary:"A brushless motor controller family used in FRC. Learn what to check when selecting and configuring one.",tags:["Talon FX","CTRE","motor controller","hardware"],updated:"Reference overview",body:`<h2>What is a Talon FX?</h2><p>Talon FX is a motor controller product family from CTR Electronics (CTRE). It is used with compatible motors and control systems in FRC applications.</p><h2>Before configuring</h2><ul><li>Confirm the exact controller and motor model.</li><li>Use the documentation matching the installed firmware and software library version.</li><li>Verify wiring, power, CAN configuration, and mechanical mounting.</li><li>Set appropriate current limits and other protective configuration for the mechanism.</li></ul><div class="source-box">Manufacturer resources: <a href="https://v6.docs.ctr-electronics.com/" target="_blank" rel="noopener">Phoenix 6 Documentation ↗</a> · <a href="https://store.ctr-electronics.com/" target="_blank" rel="noopener">CTRE Store ↗</a></div>`},
  {id:"rules",title:"FRC Game Manuals & Rules",category:"Competition",summary:"Where to find official season game manuals, competition rules, and updates.",tags:["rules","game manual","competition","FIRST"],updated:"Official resources",body:`<h2>Where official rules live</h2><p>FIRST publishes the official game manual and related competition resources for each season. Always use the current season's official documents when making rule decisions.</p><h2>Good rule-reading habits</h2><ul><li>Check the document title and revision date.</li><li>Read the definitions and referenced rules surrounding a rule, not just one sentence.</li><li>Check official updates, team updates, and Q&amp;A responses where applicable.</li><li>Ask an event's official question process when a rule interpretation needs clarification.</li></ul><div class="source-box">Official starting point: <a href="https://www.firstinspires.org/resource-library/frc/competition-manual" target="_blank" rel="noopener">FIRST Robotics Competition resources ↗</a></div>`},
  {id:"gear",title:"Gear Ratios",category:"Mechanical",summary:"Learn what a gear ratio represents and how it affects speed and torque in a robot mechanism.",tags:["gearing","gear ratio","mechanical","speed","torque"],updated:"Starter guide",body:`<h2>What is a gear ratio?</h2><p>A gear ratio describes the relationship between the rotational speeds of the input and output of a gear train. For a simple reduction, the output turns more slowly than the input while ideal output torque increases.</p><h2>Why it matters</h2><p>Choosing a ratio affects mechanism speed, available torque, motor loading, and how the mechanism feels to control. Real systems also have losses from friction and other factors.</p><h2>When choosing a ratio</h2><ul><li>Estimate the required mechanism speed.</li><li>Estimate the load and torque needed.</li><li>Check motor operating limits and current draw.</li><li>Consider wheel diameter, sprocket size, or linkage geometry where relevant.</li><li>Validate calculations with careful testing.</li></ul>`}
];

const enrichment = {
  swerve: {
    overview: "A swerve drivetrain uses independently steerable wheel modules. Each module can point its wheel in a chosen direction while driving it, allowing the robot to translate in different directions and rotate without first turning its chassis.",
    points: ["Each module combines a drive system and a steering system.", "The robot code calculates wheel speeds and angles from the requested chassis motion.", "Steering sensors, module geometry, calibration, and odometry are important for consistent control."],
    sources: [
      ["WPILib — Swerve Drive Kinematics", "https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-kinematics.html"],
      ["WPILib — Swerve Drive Odometry", "https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-odometry.html"],
      ["Chief Delphi — Swerve discussions", "https://www.chiefdelphi.com/search?q=swerve%20drive"]
    ]
  },
  can: {
    overview: "CAN (Controller Area Network) is a shared communication bus used by many FRC control devices. Devices communicate over a common CAN high/CAN low pair, while each device is identified and configured on the network.",
    points: ["Check device power and wiring as well as CAN communication.", "Use the wiring topology and termination requirements specified by the hardware manufacturer and current FRC documentation.", "Use vendor diagnostic tools and change one variable at a time when troubleshooting."],
    sources: [
      ["REV Robotics — Hardware documentation", "https://docs.revrobotics.com/"],
      ["CTRE — Phoenix 6 documentation", "https://v6.docs.ctr-electronics.com/"],
      ["FIRST — Robot rules and resources", "https://www.firstinspires.org/resource-library/frc/competition-manual"]
    ]
  },
  pid: {
    overview: "PID is a feedback-control method that compares a target (setpoint) with a sensor measurement and calculates a control output from the error. The proportional, integral, and derivative terms respond to present error, accumulated error, and changing error.",
    points: ["P responds to the current error.", "I accumulates error over time and can reduce steady-state offset.", "D responds to the rate of change and can help reduce overshoot; noisy measurements can make derivative action difficult."],
    sources: [
      ["WPILib — PID Control", "https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/pidcontroller.html"],
      ["WPILib — Introduction to Command-Based Programming", "https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html"]
    ]
  },
  wpilib: {
    overview: "WPILib is the open-source software library and toolchain used by many FRC teams. It provides robot-programming APIs, the command-based framework, simulation tools, and documentation for building and deploying robot code.",
    points: ["Use the documentation version that matches the season and installed tools.", "The command-based framework organizes robot code around subsystems and commands.", "WPILib includes simulation and testing support for parts of a robot program."],
    sources: [
      ["WPILib Documentation", "https://docs.wpilib.org/"],
      ["WPILib GitHub organization", "https://github.com/wpilibsuite"]
    ]
  },
  talon: {
    overview: "Talon FX is a motor-controller family from CTR Electronics (CTRE) used in FRC. Configuration depends on the exact controller, motor, firmware, and software-library versions, so the matching manufacturer documentation should be the primary reference.",
    points: ["Confirm the exact hardware and firmware versions before using configuration examples.", "Review wiring, CAN setup, current limits, and other protective settings.", "Use CTRE's Phoenix documentation for supported APIs and configuration details."],
    sources: [
      ["CTRE — Phoenix 6 Documentation", "https://v6.docs.ctr-electronics.com/"],
      ["CTRE — Official website", "https://www.ctr-electronics.com/"]
    ]
  },
  rules: {
    overview: "FIRST publishes the official FRC game manual, competition rules, and season updates. For rule decisions, use the current season's official documents and updates rather than relying on summaries or older discussions.",
    points: ["Check the manual's season and revision date.", "Read definitions and related rules together; context can change how a rule applies.", "Check official updates and the official Q&A process for clarifications."],
    sources: [
      ["FIRST — FRC Competition Manual and resources", "https://www.firstinspires.org/resource-library/frc/competition-manual"],
      ["FIRST — FRC home", "https://www.firstinspires.org/robotics/frc"]
    ]
  },
  gear: {
    overview: "A gear ratio describes how input rotation relates to output rotation. A reduction makes the output turn more slowly and, ideally, increases output torque by a corresponding ratio; real mechanisms also have friction and other losses.",
    points: ["A larger reduction generally trades speed for torque.", "Choose ratios based on required speed, load, motor limits, and mechanism geometry.", "Check the motor's operating region and validate calculations with measured performance."],
    sources: [
      ["REV Robotics — Documentation and resources", "https://docs.revrobotics.com/"],
      ["WPILib — Motor Controller and simulation documentation", "https://docs.wpilib.org/en/stable/docs/software/hardware-apis/index.html"]
    ]
  }
};
articles.forEach(article => Object.assign(article, enrichment[article.id] || {}));

const homeView=document.getElementById("homeView"), exploreSection=document.getElementById("exploreSection"), resultsView=document.getElementById("resultsView"), articleView=document.getElementById("articleView"), aboutView=document.getElementById("aboutView");
const searchInput=document.getElementById("searchInput"), resultsList=document.getElementById("resultsList");
let currentQuery="", currentFilter="All";

function show(view){
  [homeView,exploreSection,resultsView,articleView,aboutView].forEach(el=>el.classList.add("hidden"));
  if(view==="home"){homeView.classList.remove("hidden");exploreSection.classList.remove("hidden");}
  if(view==="results")resultsView.classList.remove("hidden");
  if(view==="article")articleView.classList.remove("hidden");
  if(view==="about")aboutView.classList.remove("hidden");
}
function scoreArticle(a,q){
  const terms=q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const title=a.title.toLowerCase(),summary=a.summary.toLowerCase(),tags=a.tags.join(" ").toLowerCase(),body=a.body.replace(/<[^>]*>/g," ").toLowerCase();
  return terms.reduce((score,term)=>score+(title.includes(term)?7:0)+(tags.includes(term)?5:0)+(summary.includes(term)?3:0)+(body.includes(term)?1:0),0);
}
function makeSourceLink(label,url){
  const a=document.createElement("a");a.className="overview-source";a.href=url;a.target="_blank";a.rel="noopener noreferrer";
  const name=document.createElement("span");name.textContent=label;
  const host=document.createElement("small");try{host.textContent=new URL(url).hostname.replace(/^www\./,"");}catch{host.textContent="Source";}
  a.append(name,host);return a;
}
function renderOverview(matches,q){
  const section=document.createElement("section");section.className="knowledge-overview";
  const head=document.createElement("div");head.className="overview-head";
  const title=document.createElement("div");title.className="overview-kicker";title.textContent="KNOWLEDGE OVERVIEW";
  const badge=document.createElement("span");badge.className="overview-badge";badge.textContent="CURATED · FREE";head.append(title,badge);section.append(head);
  if(matches.length){
    const best=matches[0];
    const answer=document.createElement("p");answer.className="overview-answer";answer.textContent=best.overview || best.summary;section.append(answer);
    const keyTitle=document.createElement("div");keyTitle.className="overview-subtitle";keyTitle.textContent="KEY POINTS";section.append(keyTitle);
    const ul=document.createElement("ul");ul.className="overview-points";(best.points||[best.summary]).forEach(point=>{const li=document.createElement("li");li.textContent=point;ul.append(li);});section.append(ul);
    const details=document.createElement("details");details.className="overview-details";
    const summary=document.createElement("summary");summary.textContent="Read the detailed explanation";details.append(summary);
    const body=document.createElement("div");body.className="article-body overview-detail-body";body.innerHTML=best.body;details.append(body);section.append(details);
    const sourceTitle=document.createElement("div");sourceTitle.className="overview-subtitle";sourceTitle.textContent="SOURCES & FURTHER READING";section.append(sourceTitle);
    const sources=document.createElement("div");sources.className="overview-source-list";(best.sources||[]).forEach(([label,url])=>sources.append(makeSourceLink(label,url)));section.append(sources);
    const note=document.createElement("p");note.className="overview-note";note.textContent="This overview is a curated explanation stored in FRC Knowledge, not a live AI summary or a live copy of these websites. Open the original sources to verify details and check for updates.";section.append(note);
  } else {
    const answer=document.createElement("p");answer.className="overview-answer";answer.textContent=`We don't have a matching explanation for “${q}” in the FRC Knowledge library yet. Use the external source searches below to find relevant documentation, or explore a related topic.`;section.append(answer);
    const note=document.createElement("p");note.className="overview-note";note.textContent="External links open search results; they do not automatically import or summarize those pages.";section.append(note);
  }
  resultsList.append(section);
}
function addExternalSearches(q){
  const section=document.createElement("section");section.className="external-search-section";
  const title=document.createElement("div");title.className="overview-subtitle";title.textContent="SEARCH MORE SOURCES";section.append(title);
  const intro=document.createElement("p");intro.className="external-intro";intro.textContent="These free searches open relevant public results. FRC-specific sources are listed first.";section.append(intro);
  const list=document.createElement("div");list.className="overview-source-list";
  const targets=[
    ["FIRST — Official FRC resources",`site:firstinspires.org/resource-library/frc ${q}`],
    ["WPILib Documentation",`site:docs.wpilib.org ${q}`],
    ["REV Robotics Documentation",`site:docs.revrobotics.com ${q}`],
    ["CTRE / Phoenix Documentation",`site:v6.docs.ctr-electronics.com ${q}`],
    ["Chief Delphi Community",`site:chiefdelphi.com ${q}`],
    ["FRC projects on GitHub",`site:github.com ${q} FRC robotics`],
    ["Broader robotics and engineering",`robotics engineering ${q}`]
  ];
  targets.forEach(([label,term])=>list.append(makeSourceLink(label,"https://www.google.com/search?q="+encodeURIComponent(term))));
  section.append(list);resultsList.append(section);
}
function renderLocalResults(matches){
  const q=currentQuery.trim();
  const label=document.createElement("div");label.className="local-results-label";label.textContent=q?"RELATED FRC KNOWLEDGE ENTRIES":"BROWSE THE LIBRARY";resultsList.append(label);
  if(!matches.length){const empty=document.createElement("div");empty.className="empty-state";empty.textContent=q?"No matching local articles yet. Try the external source searches above.":"No entries in this category yet.";resultsList.append(empty);return;}
  matches.forEach(a=>{
    const card=document.createElement("article");card.className="result-card";card.tabIndex=0;
    const h=document.createElement("h3");h.textContent=a.title;
    const p=document.createElement("p");p.textContent=a.summary;
    const meta=document.createElement("div");meta.className="result-meta";
    const tag=document.createElement("span");tag.className="tag";tag.textContent=a.category;
    const updated=document.createElement("span");updated.textContent=a.updated;
    meta.append(tag,updated);card.append(h,p,meta);
    card.addEventListener("click",()=>openArticle(a));card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openArticle(a);}});resultsList.append(card);
  });
}
function search(q){
  currentQuery=q;currentFilter="All";
  document.querySelectorAll(".filter-option").forEach(b=>b.classList.toggle("active",b.dataset.filter==="All"));
  const matches=articles.map(a=>({...a,score:scoreArticle(a,q)})).filter(a=>(!q||a.score>0)&&(currentFilter==="All"||a.category===currentFilter)).sort((a,b)=>b.score-a.score);
  show("results");document.getElementById("resultsTitle").textContent=`Results for “${q}”`;document.getElementById("resultCount").textContent="FREE KNOWLEDGE SEARCH";resultsList.innerHTML="";
  renderOverview(matches,q);addExternalSearches(q);renderLocalResults(matches);window.scrollTo({top:0,behavior:"smooth"});
}
function openArticle(a){
  document.getElementById("articleContent").innerHTML="";
  const header=document.createElement("div");header.className="article-header";
  const tag=document.createElement("span");tag.className="tag";tag.textContent=a.category;
  const h=document.createElement("h1");h.textContent=a.title;
  const summary=document.createElement("div");summary.className="article-summary";summary.textContent=a.summary;
  const meta=document.createElement("div");meta.className="article-meta";meta.textContent=`FRC KNOWLEDGE / ${a.updated.toUpperCase()}`;header.append(tag,h,summary,meta);
  const body=document.createElement("div");body.className="article-body";body.innerHTML=a.body;
  const sources=document.createElement("div");sources.className="source-box";const strong=document.createElement("b");strong.textContent="Sources and further reading";sources.append(strong);
  (a.sources||[]).forEach(([label,url])=>{const row=document.createElement("div");row.style.marginTop="8px";row.append(makeSourceLink(label,url));sources.append(row);});
  const disclaimer=document.createElement("p");disclaimer.className="overview-note";disclaimer.textContent="This is a curated introductory explanation. Check the original documentation for current hardware, software, and competition details.";sources.append(disclaimer);
  document.getElementById("articleContent").append(header,body,sources);show("article");window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();if(searchInput.value.trim())search(searchInput.value.trim());});
document.querySelectorAll(".suggestion").forEach(b=>b.addEventListener("click",()=>{searchInput.value=b.dataset.query;search(b.dataset.query);}));
document.querySelectorAll(".category-card").forEach(b=>b.addEventListener("click",()=>{currentQuery="";currentFilter=b.dataset.category;document.querySelectorAll(".filter-option").forEach(x=>x.classList.toggle("active",x.dataset.filter===currentFilter));show("results");resultsList.innerHTML="";const matches=articles.filter(a=>a.category===currentFilter);renderLocalResults(matches);}));
document.querySelectorAll(".filter-option").forEach(b=>b.addEventListener("click",()=>{currentFilter=b.dataset.filter;document.querySelectorAll(".filter-option").forEach(x=>x.classList.toggle("active",x===b));resultsList.innerHTML="";const matches=articles.filter(a=>currentFilter==="All"||a.category===currentFilter);renderLocalResults(matches);}));
document.getElementById("backButton").addEventListener("click",()=>show("home"));
document.getElementById("articleBack").addEventListener("click",()=>show("results"));
document.getElementById("aboutButton").addEventListener("click",()=>show("about"));
document.getElementById("aboutBack").addEventListener("click",()=>show("home"));
document.getElementById("homeLink").addEventListener("click",e=>{e.preventDefault();show("home");window.scrollTo({top:0,behavior:"smooth"});});
document.getElementById("themeButton").addEventListener("click",()=>document.body.classList.toggle("light"));
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement!==searchInput){e.preventDefault();searchInput.focus();}if(e.key==="Escape"){searchInput.blur();show("home");}});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
