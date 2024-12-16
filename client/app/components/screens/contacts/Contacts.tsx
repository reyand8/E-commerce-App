import {FC, useState} from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import Image from 'next/image';

import map from '../../../../public/images/map.png';
import styles from './Contacts.module.scss';
import Layout from '@/components/layout/Layout';
import {Heading} from '@/components/ui/heading/Heading';
import {ContactInfo} from '@/components/ui/contacts/ContactInfo';


const Contacts: FC = () => {
    const apiMapKey: string | undefined = process.env.NEXT_APP_GOOGLE_MAPS_API_KEY;

    const [markerLocation, setMarkerLocation] =
        useState<{ lat: number, lng: number }>({
        lat:  40.416775,
        lng: -3.703790,
    });

    if (!apiMapKey) {
        throw new Error('Google Maps API key is not defined in environment variables.');
    }

    return (
        <>
          <Layout title={'Contacts'} description='Contact Us'>
              <Heading className='text-center'>
                  <div className={styles.heading}>
                      <Image className={styles.image} src={map} alt={'Find Us'}/>
                      Visit Our Locations
                  </div>
              </Heading>

              <APIProvider apiKey={apiMapKey}>
                  <div className={styles.contact_info}>
                      <ContactInfo/>
                      <Map
                          className={styles.map}
                          defaultZoom={13}
                          defaultCenter={markerLocation}
                          gestureHandling={"greedy"}
                          disableDefaultUI>
                          <Marker position={markerLocation}/>
                      </Map>
                  </div>
              </APIProvider>

          </Layout>
        </>
  );
};

export default Contacts;