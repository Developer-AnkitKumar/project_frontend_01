import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function VerificationPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setUserData(storedData);
    } else {
      setUserData({
        name: 'N/A',
        email: 'N/A',
        faculty: 'N/A',
        roomNo: 'N/A',
        verifyCode: 'N/A',
      });
    }
  }, []);

  const handleDownload = async () => {
    try {
      const element = document.getElementById('verification-content');
      if (!element) {
        alert('Error: Could not find the verification content!');
        return;
      }

      console.log('Generating canvas...');

      const canvas = await html2canvas(element, { logging: true });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('verification-details.pdf');

      alert('Download successful!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while downloading the PDF.');
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div id="verification-content" className="verification-page" style={{ padding: '20px' }}>
      <h2>Verification Pass</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      {/* <p><strong>Faculty:</strong> {userData.faculty}</p> */}
      <p><strong>Room No:</strong> {userData.roomNo || 'N/A'}</p>
      <p><strong>Verify Code:</strong> {userData.verifyCode}</p>

      <button onClick={handleDownload} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Download ID
      </button>
    </div>
  );
}

export default VerificationPage;
