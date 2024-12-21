import React, { useState } from 'react';

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editDocument, setEditDocument] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDocument((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditDocument((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDocument = () => {
    if (!newDocument.title.trim() || !newDocument.description.trim()) return;
    setDocuments((prevDocs) => [...prevDocs, newDocument]);
    setNewDocument({ title: '', description: '', imageUrl: '' });
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  const handleEditStart = (index) => {
    setEditIndex(index);
    setEditDocument(documents[index]);
  };

  const handleUpdateDocument = () => {
    if (!editDocument.title.trim() || !editDocument.description.trim()) return;
    const updatedDocuments = documents.map((doc, index) =>
      index === editIndex ? editDocument : doc
    );
    setDocuments(updatedDocuments);
    setEditIndex(null);
    setEditDocument({ title: '', description: '', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">Dashboard</h2>

        {/* Input to add new document */}
        <div className="mb-6">
          <input
            type="text"
            name="title"
            value={newDocument.title}
            onChange={handleChange}
            placeholder="Document Title"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          />
          <textarea
            name="description"
            value={newDocument.description}
            onChange={handleChange}
            placeholder="Document Description"
            rows="4"
            className="w-full p-4 mt-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          />
          <input
            type="url"
            name="imageUrl"
            value={newDocument.imageUrl}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className="w-full p-4 mt-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          />
          <button
            onClick={handleAddDocument}
            className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
          >
            Add Document
          </button>
        </div>

        {/* Grid of documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.length === 0 ? (
            <p className="text-center text-gray-500 col-span-3">No documents added yet.</p>
          ) : (
            documents.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {editIndex === index ? (
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      name="title"
                      value={editDocument.title}
                      onChange={handleEditChange}
                      className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <textarea
                      name="description"
                      value={editDocument.description}
                      onChange={handleEditChange}
                      rows="4"
                      className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <input
                      type="url"
                      name="imageUrl"
                      value={editDocument.imageUrl}
                      onChange={handleEditChange}
                      placeholder="Image URL"
                      className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={handleUpdateDocument}
                        className="text-white bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="text-red-500 py-2 px-4 rounded-lg hover:bg-red-100 transition-all duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">{doc.title}</h3>
                    <p className="text-gray-700">{doc.description}</p>
                    {doc.imageUrl && (
                      <img src={doc.imageUrl} alt="Document" className="w-full h-48 object-cover rounded-md mt-4" />
                    )}
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={() => handleEditStart(index)}
                        className="text-blue-500 hover:text-blue-600 font-semibold transition-all duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemoveDocument(index)}
                        className="text-red-500 hover:text-red-600 font-semibold transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
