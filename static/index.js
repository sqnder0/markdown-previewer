const textarea = document.querySelector("textarea");
const content = document.querySelector("#content");

textarea.addEventListener("input", () => {
  const text = textarea.value;

  fetch("/convert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        content.innerHTML = data.html;
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});
