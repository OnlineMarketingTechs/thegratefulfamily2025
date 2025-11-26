export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-bg">
      <main className="w-full max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl mb-4">Your band or event has been submitted successfully.</p>
        <a href="/" className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700">Return to Home</a>
      </main>
    </div>
  );
}
