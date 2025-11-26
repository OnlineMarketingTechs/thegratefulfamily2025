import { NextResponse } from 'next/server';

// Temporary in-memory store (replace with DB for production)
let bandsEvents: any[] = [
    {
        type: "Band",
        name: "DeadPhish Orchestra",
        image: "/images/band1.jpg",
        description: "Colorado's jam band tribute to the Grateful Dead and Phish."
    },
    {
        type: "Event",
        name: "Red Rocks Psychedelic Fest",
        image: "/images/event1.jpg",
        description: "Annual festival celebrating psychedelic music and art at Red Rocks."
    },
    {
        type: "Band",
        name: "Shakedown Street",
        image: "/images/band2.jpg",
        description: "Classic Grateful Dead tribute band from Colorado."
    },
    {
        type: "Event",
        name: "Boulder Jam Nights",
        image: "/images/event2.jpg",
        description: "Monthly jam sessions featuring local bands and artists."
    }
];

export async function GET() {
    return NextResponse.json(bandsEvents);
}

export async function POST(request: Request) {
    const data = await request.json();
    bandsEvents.push(data);
    return NextResponse.json({ success: true });
}
