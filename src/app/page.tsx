import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Intro from './components/introduction/page';
import Education from './components/education/page';
import ProfessionalServices from './components/professionalservices/page';
import Experience from './components/experience/page';
import Memberships from './components/memberships/page';
import Publications from './components/publications/page';
import Link from 'next/link';
import Menu from './menu';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>


<Intro/>
<Experience/>
<Education/>
<ProfessionalServices/>
<Memberships/>
<Publications></Publications>
    </div>
  );
}