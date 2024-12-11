import Swap from "./Swap";
const Home = () => {
  return (
    <div className="bg">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-full py-8 sm:py-10 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
                Swap the tokens with best prices
              </h1>
              <Swap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
