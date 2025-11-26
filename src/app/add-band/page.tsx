import BandEventForm from "../components/band-event-form";

export default function AddBandPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-custom-bg">
            <main className="w-full max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Add New Band</h1>
                <BandEventForm typeDefault="Band" />
            </main>
        </div>
    );
}
