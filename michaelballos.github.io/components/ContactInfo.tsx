import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

const ContactInfo = () => {
  const [openedPhone, setOpenPhone] = useState(false);
  const [openedEmail, setOpenEmail] = useState(false);
  const [openedTwitter, setOpenTwitter] = useState(false);

  return (
    <>
      <div className={'contactInfo'}>
        <div className={'buttons'}>
      <div className={'phone'}> 
      <Button className={'btn btnPhone'} onClick={() => setOpenPhone((o) => !o)}>
        Phone 
      </Button>
      <Collapse in={openedPhone}>
        <a className='text'>
          (316)-226-2223
        </a> 
      </Collapse>
      </div>
      <div className={'email'}>
      <Button className={'btn btnEmail'} onClick={() => setOpenEmail((o) => !o)}>
        Email 
      </Button>
      <Collapse in={openedEmail}>
        <a className='text'>
          ballos.michael@gmail.com
        </a> 
      </Collapse>
      </div>
      <div className={'twitter'}>
      <Button className={'btn btnTwitter'} onClick={() => setOpenTwitter((o) => !o)}>
        Twitter 
      </Button>
      <Collapse in={openedTwitter}>
        <a className='text'>
          @michael_ballos
        </a> 
      </Collapse>
      </div>
      </div>
      </div>
    </>
  );
}

export default ContactInfo;