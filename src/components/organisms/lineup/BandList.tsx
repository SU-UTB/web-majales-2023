import VerticalBandSocial from '../../atoms/social/VerticalBandSocial';
import LineupBand from '../../moleculs/LineupBand';

import udgImgDesktop from '../../../assets/lineup/band1.png';
import udgImgMobile from '../../../assets/lineup/m_band1.png';

import vojtanoImgDesktop from '../../../assets/lineup/band2.png';
import vojtanoImgMobile from '../../../assets/lineup/m_band2.png';

import circusImgDesktop from '../../../assets/lineup/band3.png';
import circusImgMobile from '../../../assets/lineup/m_band3.png';

import maniakImgDesktop from '../../../assets/lineup/band4.png';
import maniakImgMobile from '../../../assets/lineup/m_band4.png';

import dekanImgDesktop from '../../../assets/lineup/band5.png';
import dekanImgMobile from '../../../assets/lineup/m_band5.png';

import klidImgDesktop from '../../../assets/lineup/band7.png';
import klidImgMobile from '../../../assets/lineup/m_band7.png';

const BandList = () => {
  const udg = {
    imgSrc: udgImgDesktop,
    imgSrcM: udgImgMobile,
    bandName: 'UDG',
    bandType: 'CZ POP/ROCK',
    spotify:
      'https://open.spotify.com/artist/142qig5MMgVIqfwDf1pFae?si=NLE_m8H-QCirpgxPNY7nvg',
    ig: 'https://instagram.com/udg_official?utm_medium=copy_link',
    width: 950,
    height: 350,
  };

  const vojtano = {
    imgSrc: vojtanoImgDesktop,
    imgSrcM: vojtanoImgMobile,
    bandName: 'VOJTAANO',
    bandType: 'CZ FOLK POP, FOLK RAP',
    spotify:
      'https://open.spotify.com/artist/2wHicAG4gMIseKmYuPUcIw?si=B5o_gAELQLqQx7XJTl3GFw',
    ig: 'https://instagram.com/vojtaano.zavesky?utm_medium=copy_link',
    width: 626,
    height: 650,
  };

  const bandsFirst = [
    {
      imgSrc: circusImgDesktop,
      imgSrcM: circusImgMobile,
      bandName: 'CIRCUS PROBLEM',
      bandType: 'CZ/EN BALKAN BRASS',
      spotify:
        'https://open.spotify.com/artist/4qdvQfgXPe8YPr8neLX4Ld?si=G7ofv1wESfCdiNAbCpkB-g',
      ig: 'https://instagram.com/circusproblemband?utm_medium=copy_link',
      width: 465,
      height: 280,
    },
    {
      imgSrc: maniakImgDesktop,
      imgSrcM: maniakImgMobile,
      bandName: 'MANIAK',
      bandType: 'CZ RAP',
      spotify:
        'https://open.spotify.com/artist/5j8tFACNcARCZifgjtUJa2?si=_lVcArZRTtS7DSH9NxyKLQ',
      ig: 'https://instagram.com/moneyjak?utm_medium=copy_link',
      width: 465,
      height: 280,
    },
  ];

  const bandsSecond = [
    {
      imgSrc: dekanImgDesktop,
      imgSrcM: dekanImgMobile,
      bandName: 'JAKUB DĚKAN',
      subName: '& BAND',
      bandType: 'CZ ACOUSTIC POP',
      spotify:
        'https://open.spotify.com/artist/2pwjkmMQFMGyCn2oD6ON7Q?si=AWIZk56QRmySx-aGYGgIyQ',
      ig: 'https://instagram.com/jakubdekanband_official?utm_medium=copy_link',
      width: 788,
      height: 420,
    },
    {
      imgSrc: klidImgDesktop,
      imgSrcM: klidImgMobile,
      bandName: 'TROCHA KLIDU',
      bandType: 'CZ POP/ROCK',
      spotify:
        'https://open.spotify.com/artist/4tof5QydIwHaXAilgL1HFA?si=dFAn8PcHT_Gsd56iO6RPaw',
      ig: 'https://instagram.com/trochaklidu?utm_medium=copy_link',
      width: 787,
      height: 420,
    },
  ];

  return (
    <div
      id="band-list"
      className="w-full px-4 py-20 mx-auto overflow-hidden md:px-0 md:w-4/5"
    >
      <div className="flex flex-wrap band-list-first">
        <div className="w-full lg:grid lg:w-8/12 grid-cols-2 lg:grid-rows-2 lg:gap-2 lg:px-2">
          <LineupBand
            band={udg}
            classNames="col-span-2"
            bandDescription={
              <div className="absolute bottom-2 md:bottom-4 left-4 sm:left-8">
                <h3 className="text-2xl text-white sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">
                  {udg.bandName}
                </h3>
                <p className="text-sm text-white sm:text-lg">{udg.bandType}</p>
              </div>
            }
            bandSocials={
              <VerticalBandSocial
                spotifyLink={udg.spotify}
                igLink={udg.ig}
                classNames="bottom-4 md:bottom-8 lg:top-14 right-4 sm:right-8 lg:left-8"
              />
            }
          ></LineupBand>
          {bandsFirst.map((band) => (
            <LineupBand
              key={band.bandName}
              band={band}
              bandDescription={
                <div className="absolute bottom-2 md:bottom-4 left-4 sm:left-8">
                  <h3 className="text-2xl text-white sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">
                    {band.bandName}
                  </h3>
                  <p className="text-sm text-white sm:text-lg">
                    {band.bandType}
                  </p>
                </div>
              }
              bandSocials={
                <VerticalBandSocial
                  spotifyLink={band.spotify}
                  igLink={band.ig}
                  classNames="bottom-4 md:bottom-8 lg:top-14 right-4 sm:right-8 lg:left-8"
                />
              }
            ></LineupBand>
          ))}
        </div>
        <LineupBand
          band={vojtano}
          bandDescription={
            <div className="absolute bottom-2 md:bottom-4 left-4 sm:left-8 lg:right-8">
              <h3 className="text-2xl text-white sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">
                {vojtano.bandName}
              </h3>
              <p className="text-sm text-white sm:text-lg">
                {vojtano.bandType}
              </p>
            </div>
          }
          bandSocials={
            <VerticalBandSocial
              spotifyLink={vojtano.spotify}
              igLink={vojtano.ig}
              classNames="bottom-4 md:bottom-8 lg:bottom-48 right-4 sm:right-8"
            />
          }
        ></LineupBand>
      </div>
      <div className="flex band-list-second lg:py-2 lg:pl-2">
        <div className="w-full lg:grid grid-cols-2 lg:grid-rows-1 lg:gap-2">
          {bandsSecond.map((band) => (
            <LineupBand
              key={band.bandName}
              band={band}
              bandDescription={
                <div className="absolute bottom-2 md:bottom-4 left-4 sm:left-8">
                  <h3 className="text-2xl text-white sm:text-3xl lg:text-2xl 2xl:text-4xl txt-extrabold">
                    {band.bandName}
                    {band.subName && (
                      <sup className="text-lg text-white">{band.subName}</sup>
                    )}
                  </h3>
                  <p className="text-sm text-white sm:text-lg">
                    {band.bandType}
                  </p>
                </div>
              }
              bandSocials={
                <VerticalBandSocial
                  spotifyLink={band.spotify}
                  igLink={band.ig}
                  classNames="bottom-4 md:bottom-8 lg:bottom-12 right-8"
                />
              }
            ></LineupBand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BandList;
