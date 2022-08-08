import { useState } from 'react';
import Item from './com/Item';
import Modal from './com/Modal'
function App() {
  
  const arr = ["moha", "ayoub", "1337"]

  const [login, setLogin] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [right1, setRight1] = useState(false);
  const [pass, setPass] = useState("");
  function activateLasers(e)
  {
    e.preventDefault();
    if (login.length)
    {
        if (arr.includes(login.toLowerCase()))
        {
          setPass("طالب ممنوع")
          setRight1(false)
        }
        else
        {
          setPass("طالب غير ممنوع")
          setRight1(true)
        }
        setShowModal(true)
        setLogin("")
    }

    
  }

  const handleChange = event => {
    setLogin(event.target.value);
  };

  return (
    <div className='h-screen'>
      <div className="h-128 overflow-y-auto pt-5">
        <div className="md:w-1/2 block mx-auto">
          { arr.map(item => <Item id={item}/>) }
        </div>
      </div>
      <div>
        <form className="fixed left-0 right-0  bottom-2  px-2  mx-auto sm:w-3/4 md:w-2/4 inset-x-0">
          <div className="flex items-center border-b border-teal-500 py-2 w-full">
            <input onChange={handleChange} value={login} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Login" aria-label="Login" />
            <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                    onClick={activateLasers}
                >
                    Search
            </button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        {
                                          right1 ? <svg width="20" height="20" x="0" y="0" viewBox="0 0 417.81333 317" >
                                            <g>
                                              <path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" fill="#16a34a">
                                              </path>
                                            </g>
                                          </svg> :
                                          <svg
                                              className="w-6 h-6 text-red-600"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                          >
                                              <path
                                                  fillRule="evenodd"
                                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                  clipRule="evenodd"
                                              />
                                          </svg>
                                        }

                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800 text-center">
                                            {pass}
                                        </h4>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                          {
                                            right1 ? 
                                              <button
                                                  className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                  onClick={() =>
                                                      setShowModal(false)
                                                  }
                                              >
                                                  أغلق
                                              </button>
                                            :
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                أغلق
                                            </button>
                                          }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
