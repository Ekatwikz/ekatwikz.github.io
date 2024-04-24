import { useEffect, useState } from 'react';
import { skeleton } from '../../utils';

import { useInView } from 'react-intersection-observer';

// NB: this component needs the platform script to "fill in" the div,
// so make sure that's loaded up

const LinkedinRecommendationsCard = ({
  widgetid,
  header,
}: {
  widgetid: string;
  header: string;
}) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [hasBeenInView, setHasBeenInView] = useState(inView);

  // we only want to trigger the heavy update once it comes into view
  // for the first time, no need to unmount it b/c that'd be quite a waste
  const hasBeenInViewUpdate = inView || hasBeenInView;

  useEffect(() => {
    setHasBeenInView(hasBeenInViewUpdate);

    // add hakked elfsight script once the component comes into view
    if (hasBeenInViewUpdate) {
      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/gh/Ekatwikz/linkedInFiesta/platform.min.js';
      script.async = true;

      document.head.appendChild(script);
    }
  }, [hasBeenInViewUpdate]);

  return (
    <>
      {hasBeenInView ? (
        <div className="col-span-1 lg:col-span-2" ref={ref}>
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
      ) : (
        <div className="col-span-1 lg:col-span-2" ref={ref}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {skeleton({
                        widthCls: 'w-64',
                        heightCls: 'h-8',
                        className: 'mx-auto',
                      })}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid card shadow-lg bg-base-100 gap-1 p-3">
                      {[32, 96, 64, 96].map((val, i) => (
                        <div key={i}>
                          {skeleton({
                            widthCls: `w-${val}`,
                            heightCls: 'h-5',
                            className: 'mx-auto rounded-none m-1',
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkedinRecommendationsCard;
