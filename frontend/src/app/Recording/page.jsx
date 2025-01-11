
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Play, Download } from 'lucide-react';
import Nav from "@/components/Nav";

const Recording = () => {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const token = localStorage.getItem('Usertoken');
        if (!token) throw new Error("User not authenticated");

        const response = await axios.get('http://localhost:5000/video/api/recordings', {
          headers: { 'x-auth-token': token },
        });
        setRecordings(response.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load recordings");
      } finally {
        setLoading(false);
      }
    };
    fetchRecordings();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (

    <div className="container mx-auto px-4 py-8">
      <Nav/>
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Your Recordings</h1>
      {recordings.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No recordings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordings.map((recording) => (
            <div key={recording._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <video className="w-full h-48 object-cover" controls>
                <source src={recording.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 truncate">{recording.name}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(recording.createdAt).toLocaleDateString()}
                </p>
                <div className="flex justify-between">
                  <a
                    href={recording.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 flex items-center"
                  >
                    <Play className="mr-2 h-4 w-4" /> Play
                  </a>
                  <a
                    href={recording.url}
                    download
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recording;

  