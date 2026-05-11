import React, { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import { Sparkles, BrainCircuit } from "lucide-react";
import toast from "react-hot-toast";

const AIAssistant = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [formData, setFormData] = useState({
    topic: "openings",
    level: "Beginner",
    rating: 1200,
  });

  const handleRecommend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendations([]); // ✅ Clear previous results
    try {
      const res = await fetch(
        "https://checkshelf-server.vercel.app/aiRecommendation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (res.status === 429) {
        toast.error(
          "The Grandmaster is busy. Please try again in 30 seconds!",
          {
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          },
        );
        setLoading(false);
        return;
      }

      if (res.status === 404) {
        // ✅ New
        toast.error(
          "No books found for your criteria. Try a different topic or level!",
          {
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          },
        );
        setLoading(false);
        return;
      }

      if (res.status === 500) {
        toast.error("Failed to process request", {
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
        });
        setLoading(false);
        return;
      }

      const data = await res.json();
      setRecommendations(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong with the connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-11/12 mx-auto px-4 pt-28 pb-20 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <Sparkles className="text-accent h-10 w-10" />
          Grandmaster Assistant
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Personalized chess book recommendations based on your skill level.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: The Form */}
        <div className="lg:col-span-1">
          <div className="card bg-white shadow-xl border border-accent/20 p-6">
            <form onSubmit={handleRecommend} className="space-y-6">
              {/* Topic Selection */}
              <div className="form-control">
                <label className="label text-xl py-1 font-bold text-gray-700">
                  Topic Focus
                </label>
                <select
                  className="select select-bordered w-full"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                >
                  <option value="openings">Openings</option>
                  <option value="tactics">Tactics & Calculation</option>
                  <option value="strategy">Strategy & Middlegame</option>
                  <option value="endgame">Endgame</option>
                </select>
              </div>

              {/* Expertise Level */}
              <div className="form-control">
                <label className="label text-xl font-bold text-gray-700">
                  Skill Level
                </label>
                <div className="flex gap-2">
                  {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setFormData({ ...formData, level: lvl })}
                      className={`btn btn-sm flex-1 ${
                        formData.level === lvl ? "btn-accent" : "btn-outline"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Slider */}
              <div className="form-control">
                <label className="label font-bold text-gray-700">
                  Rapid Rating:{" "}
                  <span className="text-accent">{formData.rating}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  className="range range-accent range-sm"
                />
                <div className="flex justify-between text-xs px-2 mt-2 text-gray-400">
                  <span>0</span>
                  <span>1500</span>
                  <span>3000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-block rounded-xl bg-accent border-none hover:bg-black hover:text-accent font-bold"
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Get Recommendations"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right: The Results */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <BrainCircuit className="h-16 w-16 text-accent animate-pulse" />
              <p className="text-xl font-medium text-gray-500 italic">
                Scanning the shelves for your perfect match...
              </p>
            </div>
          ) : recommendations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {recommendations.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl p-10">
              <p className="text-gray-400 text-center">
                Select your details and click the button to see AI-curated
                books.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
