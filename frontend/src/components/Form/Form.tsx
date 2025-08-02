import api from '../../helpers/api';
import { FunctionComponent, FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

interface IFormProps {
  refreshShortenedLinks: ()=> void
}

const Form: FunctionComponent<IFormProps> = ({ refreshShortenedLinks })=> {

  const [fullUrl, setFullUrl] = useState<string>("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    try {
      console.log('Submitting URL for shortening...');
      await api.post('/shortUrl', { fullUrl })
      setFullUrl("")
      refreshShortenedLinks()
    } catch(error: any) {
      let errorMessage = 'Failed to shorten URL';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout - please try again';
      } else if (error.code === 'ERR_NETWORK') {
        errorMessage = 'Network error - please check your connection';
      } else if (error.response) {
        errorMessage = `Server error: ${error.response.status}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      console.error('Error submitting form:', error);
      alert(errorMessage); // Show user-friendly error
    }
  }

  return (
    <div className="container mx-auto py-2">
      <div className="w-full h-full rounded-xl backdrop-brightness-50">
        <div className="form-wrapper bg-banner mt-8 p-8 sm:p-12 md:p-20 rounded-xl bg-cover bg-center shadow-2xl border border-blue-900/30">
          <h2 className="text-white text-shadow text-4xl text-center pb-4 font-bold tracking-wide drop-shadow-lg">
            MERN <span className="text-blue-400">URL Shortener</span>
          </h2>
          <p className="text-white text-shadow text-center pb-2 text-xl font-light">
            Paste your link to shorten it
          </p>
          <p className="text-white text-shadow text-center pb-4 text-base font-light">
            Free software to shorten a URL or reduce a link - Use our URL shortener to create a shortened and neat link to use easily
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="block w-full p-4 pr-32 text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md transition-all duration-200 placeholder:italic placeholder:text-gray-400"
                  placeholder="Add your link here"
                  required
                  value={fullUrl}
                  onChange={(event: ChangeEvent<HTMLInputElement>)=> setFullUrl(event.target.value)}
                />
                <button
                  type="submit"
                  id="submit-btn"
                  className="absolute top-2 right-2 px-6 py-2 text-base font-semibold h-auto rounded-lg text-white bg-gradient-to-r from-blue-700 to-blue-500 border-none shadow hover:scale-105 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-200"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Form;