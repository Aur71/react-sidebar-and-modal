import {
  AiFillHome,
  AiFillFolder,
  AiFillCalendar,
  AiFillFile,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

const links = [
  {
    id: 1,
    name: 'home',
    path: '#',
    icon: <AiFillHome />,
  },

  {
    id: 2,
    name: 'team',
    path: '#',
    icon: <FaUsers />,
  },

  {
    id: 3,
    name: 'projects',
    path: '#',
    icon: <AiFillFolder />,
  },

  {
    id: 4,
    name: 'calendar',
    path: '#',
    icon: <AiFillCalendar />,
  },

  {
    id: 5,
    name: 'documents',
    path: '#',
    icon: <AiFillFile />,
  },
];

const social = [
  {
    id: 1,
    name: 'facebook',
    path: '#',
    icon: <AiFillFacebook />,
  },

  {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: <AiFillTwitterSquare />,
  },

  {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: <AiFillInstagram />,
  },

  {
    id: 4,
    name: 'linkedin',
    path: '#',
    icon: <AiFillLinkedin />,
  },
];

export { links, social };
