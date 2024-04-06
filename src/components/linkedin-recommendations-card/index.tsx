import { Fragment } from 'react';

// NB: this component needs the platform script to "fill in" the div,
// so make sure that's loaded up

const LinkedinRecommendationsCard = ({
  widgetid,
  header,
}: {
  widgetid: string;
  header: string;
}) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      {header}
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid gap-6">
                    <div
                      className={`elfsight-app-${widgetid}`}
                      data-elfsight-app-lazy
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LinkedinRecommendationsCard;
