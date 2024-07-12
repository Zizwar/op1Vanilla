//if deno
//import { Hono } from "npm:hono";

//if nodejs
//import { Hono } from "hono";

import { Hono } from "https://deno.land/x/hono/mod.ts";
import {
  serveStatic
} from "https://deno.land/x/hono/middleware.ts";



const app = new Hono();

app.all("*", serveStatic({ root: "./" }));
//
Deno.serve(app.fetch);