import { nanoid } from 'nanoid';
import { AiOutlineHome } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';

const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    icon: AiOutlineHome,
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
    icon: RiMovie2Line,
  },
];

export default items;
