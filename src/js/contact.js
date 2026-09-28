document.addEventListener("submit", async (event) => {
  if (event.target.id !== "contact-form") {
    return;
  }

  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    information: formData.get("information"),
  };

  console.log("Sending data:", data);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("Server response:", result);

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert(result.message || "Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Could not connect to the server.");
  }
});
