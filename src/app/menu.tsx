import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Intro from './components/introduction/page';
import Education from './components/education/page';
import ProfessionalServices from './components/professionalservices/page';
import Experience from './components/experience/page';
import Memberships from './components/memberships/page';
import Publications from './components/publications/page';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Menu() {
  return (
    <div className='menu'>
            <Link href="/">Home</Link>

      <Link href="/components/introduction/">Introduction</Link>
      <Link href="/components/experience">Experience</Link>
      <Link href="/components/education">Education</Link>
      <Link href="/components/professionalservices">Professional Services</Link>
      <Link href="/components/memberships">Memberships</Link>
      <Link href="/components/publications">Publications</Link>



   </div>
  );
}