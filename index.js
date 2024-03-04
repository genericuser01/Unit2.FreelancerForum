// Array to store freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
  ];
  
  // Function to update the freelancers list and average starting price
  function updateList() {
    const freelancersContainer = document.getElementById("freelancers");
    const averagePriceElement = document.getElementById("averagePrice");
  
    // Clear the existing content
    freelancersContainer.innerHTML = "";
  
    // Calculate the average starting price
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averageStartingPrice = freelancers.length ? totalStartingPrice / freelancers.length : 0;
    averagePriceElement.textContent = averageStartingPrice.toFixed(2);
  
    // Update the freelancers list
    freelancers.forEach(freelancer => {
      const div = document.createElement("div");
      div.classList.add("freelancer");
      div.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation}, starting at $${freelancer.startingPrice}`;
      freelancersContainer.appendChild(div);
    });
  }
  
  // Function to generate a random freelancer
  function generateRandomFreelancer() {
    const names = ["Alice", "Bob", "Carol", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
    const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist", "Chef", "Musician", "Photographer", "Consultant", "Engineer"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $119
    return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
  }
  
  // Function to add a new freelancer
  function addFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    updateList();
  }
  
  // Initial rendering of freelancers
  window.addEventListener("load", updateList);
  
  // Set interval to add new freelancer and rerender
  setInterval(addFreelancer, 5000); // Add a new freelancer every 5 seconds