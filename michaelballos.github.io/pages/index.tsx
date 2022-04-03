import ParallaxPlain from '../components/ParallaxPlain';
import LastName from '../components/LastName';
import FirstName from '../components/FirstName';
import ParallaxTechVaporwave from '../components/ParallaxTechVaporwave';
import ICanWrite from '../components/ICanWrite';
import ContactInfo from '../components/ContactInfo';

const HomePage = () => {
  return (
    <>
    <div className={'container'}>
      <ParallaxPlain  />
      <div className={'info'}>
        <FirstName />  
        <ContactInfo /> 
      </div>
      <ParallaxPlain  />
      <ICanWrite />
      <ParallaxTechVaporwave />
    </div>
    </>
  );
}


export default HomePage;