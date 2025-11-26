"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type BandEventFormProps = {
    typeDefault?: "Band" | "Event";
};

export default function BandEventForm({ typeDefault = "Band" }: BandEventFormProps) {
    const [type, setType] = useState(typeDefault);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const router = useRouter();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let imageUrl = imagePreview || "";
        // For demo, just use preview URL. For production, upload image to storage and use its URL.
        const newItem = { type, name, description, image: imageUrl };
        const res = await fetch("/api/bands-events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem)
        });
        if (res.ok) {
            router.push("/thank-you");
        } else {
            alert("Error submitting. Please try again.");
        }
    };

    return (
        <form className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-md mx-auto my-8" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-2">Add New Band or Event</h2>
            <label className="font-semibold">Type:</label>
            <select value={type} onChange={e => setType(e.target.value as "Band" | "Event")} className="p-2 rounded border">
                <option value="Band">Band</option>
                <option value="Event">Event</option>
            </select>
            <label className="font-semibold">Name:</label>
            <input value={name} onChange={e => setName(e.target.value)} className="p-2 rounded border" required />
            <label className="font-semibold">Description:</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="p-2 rounded border" required />
            <label className="font-semibold">Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="p-2" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="rounded-lg w-32 h-32 object-cover mx-auto" />}
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700">Submit</button>
        </form>
    );
}
