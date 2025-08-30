document.getElementById("myForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = e.target.message.value;

  let res = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  let data = await res.json();
  alert(data.success ? "Message sent!" : "Failed to send message.");
});