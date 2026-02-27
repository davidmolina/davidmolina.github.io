function corsHeaders() {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": process.env.SUBSCRIBE_ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function response(statusCode, body) {
  return {
    statusCode,
    headers: corsHeaders(),
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return response(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed." });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const listId = process.env.SENDGRID_LIST_ID;

  if (!apiKey || !listId) {
    return response(500, { error: "Server is missing SendGrid configuration." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (_) {
    return response(400, { error: "Invalid JSON payload." });
  }

  const email = String(payload.email || "").trim().toLowerCase();
  if (!EMAIL_REGEX.test(email)) {
    return response(400, { error: "A valid email is required." });
  }

  try {
    const sendgridRes = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        list_ids: [listId],
        contacts: [{ email }]
      })
    });

    if (!sendgridRes.ok) {
      const errorBody = await sendgridRes.text();
      return response(502, {
        error: "SendGrid rejected the request.",
        details: errorBody.slice(0, 300)
      });
    }

    return response(200, { ok: true });
  } catch (_) {
    return response(502, { error: "Unable to reach SendGrid." });
  }
};
