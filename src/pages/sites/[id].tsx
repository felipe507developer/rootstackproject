import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { SiteDetails } from '../../components/details/SiteDetails';
import { AplicationWrapper } from '../../components/layout/AplicationWrapper';
import { Isites } from '../../components/PlaceList/PlaceList';


interface Tprops{
  site: Isites;
}

const SiteDetail: NextPage<Tprops> = ({ site }) => {
  return (
    <meta name="google-site-verification" content="Hkj9zXK4-B6OcavW1dme-Pc13NjrVb8_i2cxjL7fBns" />
    <AplicationWrapper title='VTours' description='avdenture tour'>
        <SiteDetails
          title={site.Title} 
          img={site.img} 
          description={site.Descripion}
         />
    </AplicationWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL +"/posts/" + context.params?.id);
  
  const site = await data.json();
 
  return {
      props: {
          site,
      },
  };
}


export default SiteDetail
