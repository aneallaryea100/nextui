import styles from "@styles/meetAdvisor.module.css";

function MeetAdvisor() {
  return (
    <div className="meetAdvisorWrapper mt-4">
      <div className="meetAdvisorContainer w-full h-96 grid grid-rows-2 md:grid-cols-2">
        <div className="advisorBox1 bg-orange-300 h-96 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="block">
              <h4 className="advisorBox1Text block font-semibold text-2xl md:text-4xl">
                Meet your new art advisor.
              </h4>
            </div>
            <div>
              <button className="advisorBtnDiscover text-center border-1 rounded-lg px-3 py-2 text-2xl hover:bg-black hover:text-white">
                Discover Tribals
              </button>
            </div>
          </div>
        </div>
        <div className="advisorBox2 bg-advisorFooter w-full h-96 bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}

export default MeetAdvisor;
