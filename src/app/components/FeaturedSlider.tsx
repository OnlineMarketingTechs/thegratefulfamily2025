"use client";
import React, { useState } from "react";
import Link from "next/link";



export default function FeaturedSlider() {
    const [items, setItems] = useState<any[]>([]);
    const [current, setCurrent] = useState(0);

    React.useEffect(() => {
        fetch("/api/bands-events")
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const total = items.length;
    const prev = () => setCurrent((current - 1 + total) % total);
    const next = () => setCurrent((current + 1) % total);
    const item = items[current];

    if (!item) return null;

    return (
        <div className="w-full flex flex-col items-center my-6">
            <div className="flex items-center justify-center gap-4">
                <button onClick={prev} className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300">&#8592;</button>
                <Link href={`/${item.type.toLowerCase()}/${encodeURIComponent(item.name.replace(/\s+/g, "-"))}`}
                    className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-4 min-w-[260px] max-w-[340px] hover:bg-blue-50 transition cursor-pointer"
                >
                    <div className="mb-2">
                        <img src={item.image} alt={item.name} className="rounded-lg w-32 h-32 object-cover shadow" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wide mb-1 text-gray-500">{item.type}</div>
                    <div className="text-lg font-bold mb-1 text-purple-900">{item.name}</div>
                    <div className="text-sm text-gray-700 text-center mb-2">{item.description}</div>
                </Link>
                <button onClick={next} className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300">&#8594;</button>
            </div>
            <div className="mt-2 text-xs text-gray-500">{current + 1} / {total}</div>
        </div>
    );
}
