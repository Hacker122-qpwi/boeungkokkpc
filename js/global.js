document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = e.target.message.value;

    try {
      let res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      let data = await res.json();
      if (data.success) {
        alert("✅ Message sent!");
        form.reset();
      } else {
        alert("❌ Failed: " + data.error);
      }
    } catch (err) {
      alert("⚠️ Error: " + err.message);
    }
  });
});