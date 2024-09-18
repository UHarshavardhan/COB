import React, { useState, useEffect } from 'react';
import {
  createnewsPost,
  getAllnewsPosts,
  getnewsPostById,
  updatenewsPost,
  deletenewsPost,
} from '../../firebase/news'; // Adjust the path as needed
import ExportToExcel from './ExportToExcel';

const News = () => {
  const [news, setnews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentnews, setCurrentnews] = useState(null);
  const [formData, setFormData] = useState({ name: '', writer: '', date: '', image: '', description: '' });

  useEffect(() => {
    const fetchnews = async () => {
      const newsData = await getAllnewsPosts();
      setnews(newsData);
    };

    fetchnews();
  }, []);

  const filterednews = news.filter(news =>
    news.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filterednews.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatednews = filterednews.slice(startIdx, endIdx);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (news) => {
    setCurrentnews(news);
    setFormData({ ...news });
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = (news) => {
    setCurrentnews(news);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleAddnews = async (event) => {
    event.preventDefault();
    await createnewsPost(formData);
    closeAddModal();
    setFormData({ name: '', writer: '', date: '', image: '', description: '' });
    // Refresh the news list
    const newsData = await getAllnewsPosts();
    setnews(newsData);
  };

  const handleEditnews = async (event) => {
    event.preventDefault();
    if (currentnews) {
      await updatenewsPost(currentnews.id, formData);
      closeEditModal();
      setFormData({ name: '', writer: '', date: '', image: '', description: '' });
      // Refresh the news list
      const newsData = await getAllnewsPosts();
      setnews(newsData);
    }
  };

  const handleDeletenews = async () => {
    if (currentnews) {
      await deletenewsPost(currentnews.id);
      closeDeleteModal();
      // Refresh the news list
      const newsData = await getAllnewsPosts();
      setnews(newsData);
    }
  };

  return (
    <div className="p-4 mt-[4%] bg-white shadow-md rounded-lg">
            <ExportToExcel data={news} fileName="news" />

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">news Management</h1>
          <p className="text-gray-500">Manage your news posts here 👋</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-full"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 material-icons">
            search
          </span>
        </div>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={openAddModal}
        >
          Add news
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">#</th>
            <th className="py-2 px-4 bg-gray-100 border-b">news Name</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Writer</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Date of Publish</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Image</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Description</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatednews.map((news, index) => (
            <tr key={news.id}>
              <td className="py-2 px-4 border-b">{startIdx + index + 1}</td>
              <td className="py-2 px-4 border-b">{news.name}</td>
              <td className="py-2 px-4 border-b">{news.writer}</td>
              <td className="py-2 px-4 border-b">{new Date(news.date).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                <img src={news.image} alt={news.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">{news.description}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="px-4 py-1 bg-orange-500 text-white rounded-md mr-2"
                  onClick={() => openEditModal(news)}
                >
                  Edit
                </button>
                <button
                  className="material-icons text-gray-400"
                  onClick={() => openDeleteModal(news)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">
          {`Page ${currentPage} of ${totalPages}`}
        </span>
        <div className="flex space-x-2">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ❮
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`px-2 py-1 border rounded ${page === currentPage ? 'bg-orange-500 text-white' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ❯
          </button>
        </div>
      </div>
      {/* Add news Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add news</h2>
            <form onSubmit={handleAddnews}>
              <input
                type="text"
                placeholder="news Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Writer Name"
                value={formData.writer}
                onChange={(e) => setFormData({ ...formData, writer: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="date"
                placeholder="Date of Publish"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md mr-2">
                Add news
              </button>
              <button type="button" onClick={closeAddModal} className="px-4 py-2 border rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Edit news Modal */}
      {isEditModalOpen && currentnews && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit news</h2>
            <form onSubmit={handleEditnews}>
              <input
                type="text"
                placeholder="news Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Writer Name"
                value={formData.writer}
                onChange={(e) => setFormData({ ...formData, writer: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="date"
                placeholder="Date of Publish"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
              />
              <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md mr-2">
                Save Changes
              </button>
              <button type="button" onClick={closeEditModal} className="px-4 py-2 border rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Delete news Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Delete news</h2>
            <p>Are you sure you want to delete this news?</p>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                onClick={handleDeletenews}
              >
                Delete
              </button>
              <button type="button" onClick={closeDeleteModal} className="px-4 py-2 border rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
