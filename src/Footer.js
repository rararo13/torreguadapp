import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {

  const handleEmailButtonClick = () => {
    const destinatario = 'cyftorreguada@gmail.com';
    const mailtoLink = `mailto:${destinatario}`;
    window.location.href = mailtoLink;
  };

 const redirectToFacebookProfile =
  () => {
      const facebookProfileURL = `https://www.facebook.com/torreguada.cubiertasyfachadas`;
      window.location.href = facebookProfileURL;
    };

  const redirectToInstagramProfile =
  () => {
      const instagramProfileURL = `https://www.instagram.com/juanantoniojimenezz/`;
      window.location.href = instagramProfileURL;
    };

    const redirectToLinkedinProfile =
    () => {
        const linkedinProfileURL = `https://www.linkedin.com/in/rafael-ramírez-román-691701223/`;
        window.location.href = linkedinProfileURL;
      };
 
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            onClick={redirectToFacebookProfile}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>


          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            onClick={handleEmailButtonClick}
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            onClick={redirectToInstagramProfile}
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            onClick={redirectToLinkedinProfile}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://torreguada.com/'>
          torreguada.com
        </a>
      </div>
    </MDBFooter>
  );
}

