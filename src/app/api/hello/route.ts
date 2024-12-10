// create a new next js GET api request 

import { Postpone } from "next/dist/server/app-render/dynamic-rendering";

 

export async function GET() {
 return new Response("Hello from the API",{status:200} );
}

 export async function POST() {
    return new Response("Hello from the POST Handler",{status:200} );
 }



