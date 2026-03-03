let input = document.querySelector("input");
let answer = document.querySelector(".answer");
let footnotes = document.querySelector(".footnote-wrapper");

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        validateForm();
    }
});

const data = [
    {
    "item": "human",
    "number": 73.2,
    "unit": "years",
    "source": "https://ourworldindata.org/life-expectancy"
  },
  {
    "item": "mayfly",
    "number": 24,
    "unit": "hours",
    "source": "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Invertebrates/Mayflies"
  },
  {
    "item": "dog",
    "number": 12,
    "unit": "years",
    "source": "https://www.akc.org/expert-advice/health/how-long-do-dogs-live/"
  },
  {
    "item": "tortoise",
    "number": 100,
    "unit": "years",
    "source": "https://www.petmd.com/reptile/how-long-do-turtles-and-tortoises-live"
  },
  {
    "item": "ginkgo tree",
    "number": 1000,
    "unit": "years",
    "source": "https://www.bbc.com/news/science-environment-51063469"
  },
  {
    "item": "sun",
    "number": 10,
    "unit": "billion years",
    "source": "https://science.nasa.gov/sun/facts/"
  }
];

// data.forEach((entry, i) => {
//     const index = i + 1;

//     // Update folio number
//     let folioClone = querySelector('.footnote-folio').cloneNode(true);
//     folioClone.textContent = index;
//     folioClone.id = `footnote-${index}`;

// });


function validateForm() {
    if (input.value == null || input.value == "" || input.value > 123 || input.value < 1) {
        alert("Please enter a valid age.");
    } else {
        inputSubmitted();
    }
}

function inputSubmitted() {
    input.style.display = "none";
    document.querySelector("#age").innerHTML = input.value;

    let percentage = input.value / data[0].number;

    document.querySelector("#source-0").href = data[0].source;

    document.querySelector("#age-mayfly").innerHTML = Math.round(percentage * data[1].number * 10) / 10;
    document.querySelector("#unit-mayfly").innerHTML = data[1].unit;
    document.querySelector("#source-1").href = data[1].source;

    document.querySelector("#age-dog").innerHTML = Math.round(percentage * data[2].number * 10) / 10;
    document.querySelector("#unit-dog").innerHTML = data[2].unit;
    document.querySelector("#source-2").href = data[2].source;

    document.querySelector("#age-tortoise").innerHTML = Math.round(percentage * data[3].number * 10) / 10;
    document.querySelector("#unit-tortoise").innerHTML = data[3].unit;
    document.querySelector("#source-3").href = data[3].source;

    document.querySelector("#age-ginkgo").innerHTML = Math.round(percentage * data[4].number * 10) / 10;
    document.querySelector("#unit-ginkgo").innerHTML = data[4].unit;
    document.querySelector("#source-4").href = data[4].source;

    document.querySelector("#age-sun").innerHTML = Math.round(percentage * data[5].number * 10) / 10;
    document.querySelector("#unit-sun").innerHTML = data[5].unit;
    document.querySelector("#source-5").href = data[5].source;

    answer.style.display = "block";
    footnotes.style.display = "grid";
}
