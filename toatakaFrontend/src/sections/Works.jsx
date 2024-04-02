import { storage, wastedumpsite } from "../assets/images";

const Works = () => {
  return (
    <>
      <section className="flex flex-row w-5/5 gap-10 max-container  justify-center flex-wrap">
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img
              className="h-full "
              src={wastedumpsite}
              width={267}
              height={250}
              alt=""
            />
          </div>
          <span className=" px-3 font-bold text-slate-800">
            Medical& Hospital{" "}
          </span>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">
            Industrial waste is produced by industrial activity which includes
            material that is...
          </p>
          <span className="text-[35px] px-3 font-semibold">→</span>
          <span className="font-palanquin text-slate-800">Read more</span>
        </div>

        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img
              className="h-full "
              src={storage}
              width={250}
              height={250}
              alt=""
            />
          </div>
          <span className=" px-3 font-bold text-slate-800">
            Electronic Waste
          </span>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">
            Electronic waste or e-waste describes discarded electronic devices.
            Used...
          </p>
          <span className="text-[35px] px-3 font-bold">→</span>
          <span className="font-palanquin text-slate-800">Read more</span>
        </div>
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img
              className="h-full "
              src={wastedumpsite}
              width={250}
              height={250}
              alt=""
            />
          </div>
          <span className=" px-3 font-bold text-slate-800">Organic Waste</span>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">
            Organic waste is any material that is biodegradable and come...
          </p>
          <span className="text-[35px] px-3 font-bold">→</span>
          <span className="font-palanquin text-slate-800">Read more</span>
        </div>
        <div className="border max-w-[250px]">
          <div className="h-full max-h-[145px]">
            <img
              className="h-full "
              src={wastedumpsite}
              width={250}
              height={250}
              alt=""
            />
          </div>
          <span className=" px-3 font-bold text-slate-800">Garbage Pickup</span>
          <p className=" px-3 pt-3  font-palanquin  text-slate-gray max-w-[250px]">
            Hazardous types wastes may be found in different physical states
            such as....
          </p>
          <span className="text-[35px] px-3 font-bold">→</span>
          <span className="font-palanquin text-slate-800">Read more</span>
        </div>
      </section>
    </>
  );
};

export default Works;
