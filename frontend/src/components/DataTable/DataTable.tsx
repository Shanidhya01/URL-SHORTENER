import { UrlData } from '../../interface/UrlData';
import api from '../../helpers/api';
import { backendUrl } from '../../helpers/Constants';
import { FunctionComponent } from 'react';
import { useState } from 'react';
// Icons imports
import CopyIcon from '../Icons/CopyIcon'
import DeleteIcon from '../Icons/DeleteIcon'

interface IDataTableProps {
  data: UrlData[];
  refreshShortenedLinks: ()=> void
}

const DataTable: FunctionComponent<IDataTableProps> = ({ data, refreshShortenedLinks })=> {

  const [deletedUrl, setDeletedUrl] = useState<string | null>(null)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  const renderTableData = ()=> {
    return data.map((item)=> (
      <tr
        key={item._id}
        className="border-b text-white bg-gray-700 hover:bg-blue-50 hover:text-gray-900 transition-colors duration-200"
      >
        {/* Full URL */}
        <td className="px-6 py-3 break-words max-w-xs">
          <a
            href={item.fullUrl}
            target="_blank"
            rel="noreferrer nonopener"
            className="underline decoration-blue-400 hover:text-blue-600 transition-colors duration-200"
          >
            {item.fullUrl}
          </a>
        </td>
        {/* Short URL */}
        <td className="px-6 py-3 break-words max-w-xs">
          <a
            href={`${backendUrl}/api/shortUrl/${item.shortUrl}`}
            target="_blank"
            rel="noreferrer nonopener"
            className="font-semibold text-blue-400 hover:text-blue-600 transition-colors duration-200"
          >
            {item.shortUrl}
          </a>
        </td>
        {/* Clicks number */}
        <td className="px-6 py-3 text-center font-mono font-bold">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg">{item.clicks}</span>
        </td>
        {/* Actions */}
        <td className="px-6 py-3 break-words">
          <div className="flex items-center gap-3">
            {/* Copy icon */}
            <button
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-100 transition-colors duration-200"
              title="Copy short URL"
              onClick={()=> copyToClipboard(item.shortUrl)}
            >
              <CopyIcon />
            </button>
            {/* Delete icon */}
            <button
              className="p-2 rounded-full bg-gray-800 hover:bg-red-100 transition-colors duration-200"
              title="Delete URL"
              onClick={()=> deleteUrl(item._id, item.shortUrl)}
            >
              <DeleteIcon />
            </button>
          </div>
        </td>
      </tr>
    ))
  } // End of renderTableData

  // Copying the URL to the clipboard
  const copyToClipboard = async (url: string)=> {
    try {
      const fullShortUrl = `${backendUrl}/api/shortUrl/${url}`
      await navigator.clipboard.writeText(fullShortUrl)
      setDeletedUrl(null)
      setCopiedUrl(fullShortUrl)
      setTimeout(()=> setCopiedUrl(null), 3000)
    } catch(error: any) {
      console.error('Error copying URL:', error);
    }
  }

  // Deleting the URL
  const deleteUrl = async (id: string, url: string)=> {
    if(!window.confirm("Are you sure you want to delete this URL?")) return;
    try {
      const urlToDelete = `${backendUrl}/api/shortUrl/${url}`
      setCopiedUrl(null)
      setDeletedUrl(urlToDelete)
      await api.delete(`/shortUrl/${id}`)
      setTimeout(()=> setDeletedUrl(null), 3000)
      refreshShortenedLinks()
    } catch(error: any) {
      console.error('Error deleting URL:', error);
      setDeletedUrl(null);
    }
  }

  return (
    <div className="container mx-auto pt-2 pb-10">
      {/* Copied/Deleted URL feedback */}
      <div className="w-full text-center min-h-10 mb-4">
        {copiedUrl && (
          <p className="inline-block px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold shadow">
            Copied: <span className="underline">{copiedUrl}</span>
          </p>
        )}
        {deletedUrl && (
          <p className="inline-block px-4 py-2 rounded-lg bg-red-100 text-red-700 font-semibold shadow">
            Deleted: <span className="underline">{deletedUrl}</span>
          </p>
        )}
      </div>
      <div className="relative overflow-x-auto shadow-lg rounded-xl border border-blue-900/30">
        <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md uppercase text-gray-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">Full Url</th>
              <th scope="col" className="px-6 py-3 w-3/12">Short Url</th>
              <th scope="col" className="px-6 py-3 text-center">Clicks</th>
              <th scope="col" className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            { renderTableData() }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default DataTable;