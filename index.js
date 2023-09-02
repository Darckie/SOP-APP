const formsubmit = document.getElementById("sopform");
const clearform = document.getElementById("clear");
const submitbtn = document.getElementById("submit");

formsubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const heducation = document.getElementById("higest-education").value;
  const Hinstitute = document.getElementById("H-institute").value;
  const study = document.getElementById("study").value;
  const experience = document.getElementById("experience").value;
  const canada_inst = document.getElementById("can-inst").value;
  const can_prog = document.getElementById("can-prog").value;
  const country = document.getElementById("country-name").value;
  const goal = document.getElementById("goal").value;
  const eng_list = document.getElementById("eng-list").value;
  const eng_read = document.getElementById("eng-read").value;
  const eng_speak = document.getElementById("eng-speak").value;
  // const answertuition = document.querySelector(".answer:checked").value;
  const fee = document.getElementById("tfees").value;
  // const ans = document.querySelector(".ans:checked").value;
  const gic_pay = document.getElementById("gic-pay").value;

  const sound = new Audio("msg.mp3");

  //fetch the post req_________________

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => {
      if (response.ok) {
        // return response.json();

        sound.play();
        alert(
          `Mr ${name} ,you have successfully submitted your form. We will contact you soon at ${email}`
        );
        formsubmit.reset();
      } else {
        throw new Error("Failed to submit the form");
      }
    })
    .then((data) => {
      console.log(data);
      // You can do something with the response data here
    })
    .catch((error) => {
      console.log(error);
    });
});

//clear the form
clearform.addEventListener("click", () => {
  // Clear the form fields
  formsubmit.reset();
});
