import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

const ContactInfo = () => {
  const [openedPhone, setOpenPhone] = useState(false);
  const [openedEmail, setOpenEmail] = useState(false);
  const [openedTwitter, setOpenTwitter] = useState(false);

  return (
    <>
      <Button className={'btn btnPhone'} onClick={() => setOpenPhone((o) => !o)}>
        Phone 
      </Button>
      <Collapse in={openedPhone}>
        <a className='phoneNumber'>
          (316)-226-2223
        </a> 
      </Collapse>

      <Button className={'btn btnEmail'} onClick={() => setOpenEmail((o) => !o)}>
        Email 
      </Button>
      <Collapse in={openedEmail}>
        <a className='btn btnEmail'>
          ballos.michael@gmail.com
        </a> 
      </Collapse>

      <Button className={'btn btnTwitter'} onClick={() => setOpenTwitter((o) => !o)}>
        Twitter 
      </Button>
      <Collapse in={openedTwitter}>
        <a className='btn btnTwitter'>
          @michael_ballos
        </a> 
      </Collapse>
    </>
  );
}

export default ContactInfo;