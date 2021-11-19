import type { NextFetchEvent, NextRequest } from 'next/server'
import {auth, get} from '@upstash/redis';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
   const country = req.geo.country || 'GB';
   auth(process.env.UPSTASH_REDIS_REST_URL, process.env.UPSTASH_REDIS_REST_TOKEN);
   let result = await get(country);
   let greeting = result.data || 'Hello World!'
   return new Response(greeting)
}