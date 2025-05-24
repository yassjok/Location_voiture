function changeImage(el) {   // el Refer To Clicked Thumbnail image 
    document.getElementById("mainImage").src = el.src;
  }

       // Rebuild containers with 3 cars per row
    let currentContainer = document.createElement('div');   
    currentContainer.className = 'container';   // create new div with class 'Container' 
    carSection.appendChild(currentContainer);   // Add Them To Car Section (main area where cars are shown)

    allCards.forEach((card, index) => {    // Loop goes through each car card one by one.
        if (index % 3 === 0 && index !== 0) {   //Index is The Position Of Each Card
                    //Every 3 cards, create a new container index % 3 === 0 happens at 3, 6 . !=0 not creating at The Begining
            currentContainer = document.createElement('div');
            currentContainer.className = 'container';
            carSection.appendChild(currentContainer);  // new container is created and added to the page.
        }
        currentContainer.appendChild(card);   //  Add the card to the current container
      });   

      
    function scrollToTarget() {  //Scroll To Section
      const element = document.getElementById("target-section");
      element.scrollIntoView({ behavior: "smooth" });
    }

      function scrollToAboutus() {  //Scroll To Section
      const element = document.getElementById("About");
      element.scrollIntoView({ behavior: "smooth" });
    }
  
  function goToThankYou() {
    // Optional: You can validate fields before redirecting
    window.location.href = "Thank_You_Page.html";
  }

