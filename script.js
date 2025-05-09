const colleges = [
  {
    name: "Anna University",
    departments: [
      { name: "CSE", cutoff: 190 },
      { name: "ECE", cutoff: 188 },
      { name: "MECH", cutoff: 180 }
    ]
  },
  {
    name: "PSG College of Technology",
    departments: [
      { name: "CSE", cutoff: 195 },
      { name: "EEE", cutoff: 185 }
    ]
  },
  {
    name: "Coimbatore Institute of Technology",
    departments: [
      { name: "CIVIL", cutoff: 175 },
      { name: "ECE", cutoff: 180 }
    ]
  },
  {
    name: "VIT University",
    departments: [
      { name: "CSE", cutoff: 110 },
      { name: "ECE", cutoff: 120 },
      { name: "MECH", cutoff: 195 }
    ]
  },
  {
    name: "SRM Institute of Science and Technology",
    departments: [
      { name: "CSE", cutoff: 155 },
      { name: "EEE", cutoff: 190 },
      { name: "CIVIL", cutoff: 175 }
    ]
  },
  {
    name: "Hindustan Institute of Technology and Science",
    departments: [
      { name: "CSE", cutoff: 185 },
      { name: "ECE", cutoff: 180 },
      { name: "AERO", cutoff: 170 }
    ]
  },
  {
    name: "Amity University",
    departments: [
      { name: "CSE", cutoff: 180 },
      { name: "ECE", cutoff: 175 },
      { name: "IT", cutoff: 170 }
    ]
  },
  {
    name: "Bharath University",
    departments: [
      { name: "CSE", cutoff: 170 },
      { name: "ECE", cutoff: 160 },
      { name: "MECH", cutoff: 155 }
    ]
  },
  {
    name: "University of Madras",
    departments: [
      { name: "CSE", cutoff: 180 },
      { name: "EEE", cutoff: 175 },
      { name: "ECE", cutoff: 170 }
    ]
  },
  {
    name: "Kalinga Institute of Industrial Technology (KIIT)",
    departments: [
      { name: "CSE", cutoff: 195 },
      { name: "IT", cutoff: 195 },
      { name: "ECE", cutoff: 190 }
    ]
  },
];

function findEligibleColleges() {
  const input = parseFloat(document.getElementById("cutoffInput").value);

  // Add cutoff validation to restrict input to 200 or below
  if (input > 200) {
    document.getElementById("result").innerHTML = "Cutoff must be 200 or below.";
    return; // Exit the function if the input is invalid
  }

  let resultHTML = "";

  colleges.forEach(college => {
    const eligibleDepts = college.departments.filter(dept => input >= dept.cutoff);
    if (eligibleDepts.length > 0) {
      resultHTML += `<strong>${college.name}</strong><ul>`;
      eligibleDepts.forEach(dept => {
        resultHTML += `<li>${dept.name} (Cutoff: ${dept.cutoff})</li>`;
      });
      resultHTML += "</ul>";
    }
  });

  document.getElementById("result").innerHTML = resultHTML || "No colleges found.";
}
