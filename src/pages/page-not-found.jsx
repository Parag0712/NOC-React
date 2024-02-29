import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css'

const Certificate = () => {
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
    <><div ref={certificateRef} className="certificate">
      <div className="college_header_data">
        <div>
          <img
            src="https://imgs.search.brave.com/38sO-RhrVTS5l6YGyKabRxXt_5Hl3WmxfYhKDMuV7Fw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhcnVzYXQuYWMu/aW4vYWRtaXNzaW9u/L2ltYWdlcy9Mb2dv/LUNJUFMxLmpwZw"
            alt="this is image"
          />
        </div>
        <div>
          <p className="college_name">
            CHARUSAT <br />
            CSPIT <br />
            Smt. Kundanben Dinsha Patel Department of <br /> Information
            Technology
          </p>
        </div>
        <div>
          <img
            src="https://imgs.search.brave.com/38sO-RhrVTS5l6YGyKabRxXt_5Hl3WmxfYhKDMuV7Fw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhcnVzYXQuYWMu/aW4vYWRtaXNzaW9u/L2ltYWdlcy9Mb2dv/LUNJUFMxLmpwZw"
            alt="this is image"
          />
        </div>
      </div>

      <div className="college_data">
        <div className="student_data">CSPIT/IT/TOP/4-INT-2024-25/20IT052</div>
        <div className="application_date">Date : 01-01-2024</div>
      </div>
      <div className="letter_content">
        <p className="hr_information">
          <span>To,</span>
          <br />
          Praveen Chandran V
          <br />
          Academic Relationship Manager
          <br />
          Tata Consultancy Services
          <br />
          Karnataka
        </p>
        <div className="noc_subject">
          <p className="noc_subject_data">
            <span>Subject :</span>
            <u> NOC 4th / 6th Sem Summer Internship at your Organization</u>
          </p>
        </div>

        <div className="noc_main_data_section">
          <p className="noc_data">
            Dear Sir/Madam,
            <br />
            <br />
            Chandubhai.S.Patel Institute of Technology, Changa [CSPIT] is a
            graduate degree engineering college affiliated to Charotar
            University of Science and Technology (CHARUSAT). We run full time
            Degree & Post graduate programs in Electronics & Communication
            Engineering, Computer Engineering, Information Technology
            Electrical engineering, Mechanical and Civil Engineering.
            <br />
            <br />
            The students of semester 4th / 6th of Smt. KundanbenDinsha Patel
            Department of Information Technology of our Institute are required
            to undergo industrial training as a part of their academic course
            content of the University.
            <br />
            <br />
            This is to certify that the Institute does not have any objection,
            if our student Aditxalalwani (18IT052) of Information Technology
            Department undergoes project internship at your Organization from
            15/05/2022 to 15/06/2022.
            <br />
            <br />
            In case any issue arises, it should be immediately brought to the
            notice of the Training & Placement Officer in the department
            <br />
            <br />
            Thanks and Regards..!
          </p>
        </div>
      </div>
    </div>
      <button onClick={generatePdf}>Generate PDF</button>
    </>
  );
};

export default Certificate;
