(() => {
  const form = document.getElementById("subscribe-form");
  const status = document.getElementById("subscribe-status");

  if (!form || !status) return;

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("is-error", isError);
    status.classList.toggle("is-success", !isError && message.length > 0);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const endpoint = form.getAttribute("data-endpoint");
    const emailInput = form.querySelector('input[name="email"]');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!endpoint || !emailInput || !submitButton) {
      setStatus("Subscription is not configured yet.", true);
      return;
    }

    const email = emailInput.value.trim();
    if (!email) {
      setStatus("Please enter a valid email address.", true);
      return;
    }

    setStatus("Subscribing...");
    submitButton.disabled = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Unable to subscribe right now.");
      }

      setStatus("Success. Please check your inbox for next steps.");
      form.reset();
    } catch (error) {
      setStatus(error.message || "Unable to subscribe right now.", true);
    } finally {
      submitButton.disabled = false;
    }
  });
})();
