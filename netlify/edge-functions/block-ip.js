export default (request) => {
  const blockedIps = [
    // IPv6 localhost for testing locally
    "::1",
    // "127.0.0.1",
    // public IPv6 address
    "2001:f70:83e0:6000:1553:6a83:af23:a9b9",
    // public IPv4 address
    "122.219.239.178",
  ];

  // const blockedIps = Deno.env.get("BLOCKED_IPS")?.split(',') || [];

  // Get the user IP address
  const ipAddress = request.headers.get("x-forwarded-for");

  if (blockedIps.includes(ipAddress)) {
    console.log("Access forbidden - " + ipAddress);
    return new Response(null, { status: 403 });
  }

  console.log("Access granted - " + ipAddress);
};
