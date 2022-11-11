import { bandsFirst, bandsSecond, udg, vojtano } from '../../../data/bands';
import VerticalBandSocial from '../../atoms/social/VerticalBandSocial';
import LineupBand from '../../moleculs/LineupBand';

const BandList = () => {
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
          classNames="lg:w-4/12"
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
