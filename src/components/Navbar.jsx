import { Dayjs } from "dayjs";
import {navIcons, navLinks} from "../constants";

export const Navbar = () => {
  return <nav>
    <div className="div">
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">My Portfolio</p>

        <ul>
          {navLinks.map(({id, name}) =>(
            <li key={id}>
              <p>{name}</p>
            </li>
          )
          )}
        </ul>
    </div>

    <div>
      <ul>
        {navIcons.map(({id, img}) =>(
          <li key={id}>
            <img src={img} className="icon-hover" alt={`Icon-${id}`} />
          </li>
        )
        )}
      </ul>

      <time className="text-sm text-black0-500">{new Date().toLocaleTimeString()}</time>
    </div>
  </nav>
}
