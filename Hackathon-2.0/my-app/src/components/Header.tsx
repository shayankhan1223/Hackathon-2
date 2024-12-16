export default function Header({profilePic}: HeaderProps) {
    return (
      <nav className="bg-white p-4 shadow-md flex justify-between items-center z-20 py-4 relative">
        <div className="flex gap-4">
        <h1 className="text-blue-600 text-2xl font-bold ml-11 ">MORENT</h1>
          <input
            type="text"
            placeholder="Search something here"
            className="border rounded-full p-2 w-80 h-9 border-gray-200 ml-14 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-gray-600 border px-2 py-1 rounded-full">❤</button>
            <button className="text-red-600 border px-2 py-1 rounded-full">❤</button>
            <button className="text-red-600 border px-2 py-1 rounded-full">❤</button>
            <button className="rounded-full">{profilePic}</button>
            
        </div>
      </nav>
    );
  }