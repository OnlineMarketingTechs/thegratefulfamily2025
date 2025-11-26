import BandEventForm from "../components/band-event-form";

export default function AddEventPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-custom-bg">
            <main className="w-full max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Add New Event</h1>
                <BandEventForm typeDefault="Event" />
            </main>
        </div>
    );
}
