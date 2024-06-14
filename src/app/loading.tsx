import Image from "next/image";

const Spinner = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src="spinner.svg" alt="loading..." width={200} height={200} />
    </div>
  );
};

export default Spinner;
