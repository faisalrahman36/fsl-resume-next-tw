import Image from "next/image";
import fslpic from "../../../../public/assets/fsl_pic.jpeg"
import linkedinlogo from "../../../../public/assets/linkedinlogo.png"
import gitlogo from "../../../../public/assets/githublogo.png"


import Menu from '../../menu';

export default function Intro (){

    return (

<div className="wrapper">
<div className="image flex justify-center">
    <Image src={fslpic} alt="Faisal's pic" width={300} height={400}/>
</div>
<h1 className="heading">SYED FAISAL UR RAHMAN</h1>
	<div className="heading">
		<p>E-mail : faisalrahman36@hotmail.com</p>
		<p>Phone : +92(0)3352107453</p>
	</div>
	<br />
	<div className="wrapper">
		
	<Image src={linkedinlogo} alt="linkedin profile" width={300} height={40}>
	<a href="https://www.linkedin.com/in/syed-faisal-9aa29b2a/" className="flex justify-start">LinkedIn</a>
	</Image>
	<Image src={gitlogo} alt="git profile" width={300} height={40}>
	
	<a href="https://github.com/faisalrahman36/" className="flex justify-start">Git</a></Image>
	</div>
	<h2 className="heading">Permanent Address</h2>
	<p>B-58, Central Government Society, Block 10-A, Gulshan-e-Iqbal, 75300, Karachi, Pakistan</p>
	<h2 className="heading">Current Address</h2>
	<p>464, Sector CC, DHA Phase 4, Lahore, Pakistan</p>
	<h2 className="heading">SUMMARY</h2>
	<p>More than 15 years of experience in Data Science, Software Development, Project Management, Algorithm Design, Teaching &amp; Research. Worked with Fortune 500 clients, SMEs, large banks and leading academic institutions. Led teams with 2-35 members in multiple locations and worked with 2-300+ members teams for local and international projects.</p>
</div>

    )

}