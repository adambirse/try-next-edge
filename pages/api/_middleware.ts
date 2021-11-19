import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { auth, get } from "@upstash/redis";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const country = req.geo.country || "US";
  auth(
    process.env.UPSTASH_REDIS_REST_URL,
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
  let result = await get(country);
  let greeting = result.data || "Hello";
  
  const url = req.nextUrl
  url.searchParams.append('greeting', greeting);
  
  return NextResponse.rewrite(url)
}



