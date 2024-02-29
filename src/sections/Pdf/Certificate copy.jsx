import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css'
import { Button } from '@mui/material';
function Certificate({
  college,
  studentName,
  studentId,
  branch,
  sem,
  hrName,
  companyName,
  companyLocation,
  internship_staring_date,
  internship_ending_date,
  applicationApprove
}) {

  const certificateRef = useRef(null);
  const generatePdf = () => {
    const certificate = certificateRef.current;

    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('certificate.pdf');
    });
  };
  return (

    <>
    
    <div style={{ display: 'flex', justifyContent: 'right', margin: "10px" }}>
        <Button variant='contained' color='primary' onClick={generatePdf}>Download</Button>
      </div>
      <div ref={certificateRef} className="certificate">
        <div className="college_header_data">
          <div className="college_logo">
            <img src="charusat_logo.png" alt="Charusat Logo" />
          </div>
          <div className="college_name">
            <h3>
              <span>CHARUSAT</span>
              <br />
              CSPIT <br />
              Smt. Kundanben Dinsha Patel Department of <br />
              Information Technology
            </h3>
          </div>
          <div className="college_logo">
            <img src="cspit_logo.png" alt="CSPIT Logo" />
          </div>
        </div>
        <div className="college_data">
          <div className="student_data">CSPIT/IT/TOP/4-<span>INT-2024-25/20IT052</span></div>
          <div className="application_date">Date : 01-01-2024</div>
        </div>
        <div className="letter_content">
          <p className="hr_information">
            <span>To,</span><br />
            Praveen Chandran V<br />
            Academic Relationship Manager<br />
            Tata Consultancy Services<br />
            Karnataka
          </p>
          <div className="noc_subject">
            <p className="noc_subject_data">
              <span>Subject :</span>
              <u> NOC 4th / 6th Sem Summer Internship at your Organization</u>
            </p>
          </div>
          <div className="noc_main_data_section">
            <div className="noc_data">
              <p><strong>Dear Sir/Madam,</strong></p>
              <p className="noc_content">
                Chandubhai.S.Patel Institute of Technology, Changa [CSPIT] is a graduate degree engineering college
                affiliated to Charotar University of Science and Technology (CHARUSAT). We run full time Degree
                &amp;
                Post graduate programs in Electronics &amp; Communication Engineering, Computer Engineering,
                Information
                Technology Electrical engineering, Mechanical and Civil Engineering.
              </p>
              <p className="noc_content">
                The students of semester 4th / 6th of Smt. KundanbenDinsha Patel Department of Information
                Technology of our Institute are required to undergo industrial training as a part of their
                academic course content
                of the University.
              </p>
              <p className="noc_content">
                This is to certify that the Institute does not have any objection, if our student Aditxalalwani
                (18IT052) of Information Technology Department undergoes project internship at your Organization
                from 15/05/2022 to 15/06/2022.
              </p>
              <p className="noc_content">
                In case any issue arises, it should be immediately brought to the notice of the
                Training &amp; Placement Officer in the department.
              </p>
              <p>
                Thanks and Regards..!
              </p>
              <p className="college_contact_details">
                Training &amp; Placement Officer. <br />
                CHARUSAT, Changa <br />
                Tel: 02697265213 <br />
                Email: <span>tnp@charusat.ac.in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certificate