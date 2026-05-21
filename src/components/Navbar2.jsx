
export default function Navbar2() {
    return (
      <>
        <br />
        <ul className="flex">
          <li className="mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="http://www.msn.com"
            >
              {/* Active Msn */}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="http://www.msn.com"
            >
              Active Msn
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <br />
      </>
    );
}