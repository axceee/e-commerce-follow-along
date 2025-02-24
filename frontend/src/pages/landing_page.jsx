

function Landing_page() {


  return (
    <>
    <div className="flex h-screen">
      <div className="relative flex flex-col w-1/3 h-screen border items-center justify-center ">
        <img src="logo.png" alt="Small Gremlin" className="absolute top-2 h-3/10 w-full5/10" />
        <div id="login-set" className="flex flex-col items-center mt-28 border-2 p-10 rounded-[20px]">
            <label className="w-full">Username</label>
            <input type="text" className="border-2 text-center rounded-md mb-2" />
            <label className="w-full">Password</label>
            <input type="password" className="border-2 text-center rounded-md mb-2" />
            <a href="/" className="text-[10px] mb-2">Already logged in?</a>
          <button className="border-2 rounded-md px-4 py-1">Submit</button>
        </div>
      </div>
      <div className="relative w-2/3 h-screen">
          <img src="/gremlin.jpg" alt="Big Gremlin" className="w-full h-full object-cover" />
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md text-lg font-bold text-center">
            {"Buy to make sure your wife doesn't leave you"}
          </div>
        </div>
    </div>
  </>
  )
}

export default Landing_page
