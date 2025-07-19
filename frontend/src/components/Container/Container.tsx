// React imports
import { FunctionComponent, useState, useEffect } from 'react';
// Components & utils imports
import Form from '../Form/Form';
import DataTable from '../DataTable/DataTable';
import axios from 'axios';
import { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constants';


const Container: FunctionComponent = () => {
  const [data, setData] = useState<UrlData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetching table data from the API
  const fetchTableData = async (controller?: AbortController) => {
    setLoading(true);
    setError(null);
    try {
      const fetchResponse = await axios.get(`${serverUrl}/shortUrl`, { signal: controller?.signal });
      const response = fetchResponse.data.shortUrls;
      setData(response || []);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(`Axios error: ${error.message || error}`);
        console.error(`Axios error while attempting to fetch the URLs list: ${error.message || error}`);
      } else if (error instanceof Error) {
        setError(`Error: ${error.message || error}`);
        console.error(`Error while attempting to fetch the URLs list: ${error.message || error}`);
      } else {
        setError(`Unknown error: ${error}`);
        console.error(`An unknown error occurred while attempting to fetch the URLs list: ${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetching data on component mount
  useEffect(() => {
    const controller = new AbortController();
    fetchTableData(controller);
    return () => controller.abort(); // Clean up when component unmounts
  }, []); // Runs only once

  const refreshShortenedLinks = async (): Promise<void> => {
    await fetchTableData();
  };

  return (
    <div id="main-wrapper" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-10">
      <Form refreshShortenedLinks={refreshShortenedLinks} />
      {loading && (
        <div className="flex justify-center items-center py-8">
          <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></span>
          <span className="ml-3 text-blue-400 font-semibold">Loading links...</span>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center py-4">
          <span className="text-red-400 font-semibold bg-red-100 px-4 py-2 rounded-lg shadow">{error}</span>
        </div>
      )}
      {!loading && !error && (
        <DataTable refreshShortenedLinks={refreshShortenedLinks} data={data} />
      )}
    </div>
  );
};

export default Container;