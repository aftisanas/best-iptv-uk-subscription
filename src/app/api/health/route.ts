import { NextResponse } from "next/server";

/**
 * Public health endpoint for external uptime monitoring (UptimeRobot).
 *
 * Deliberately reports only that the customer-facing application is serving.
 * It must never name, probe or expose stream servers, panel hosts or any
 * backend infrastructure — a public status page is readable by anyone,
 * including rights-holder enforcement and competitors.
 *
 * Returns 200 when healthy. Any non-200 or timeout is what the monitor treats
 * as downtime.
 */

// Never prerendered or cached — a cached health check reports the health of
// the build, not of the running service.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "best-iptv-uk-subscription",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
}

// UptimeRobot's default HTTP(s) monitor issues HEAD before GET on some
// configurations; answering it avoids false "down" alerts.
export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
