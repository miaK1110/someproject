const NewProducts = () => {
  return (
    <div className="mb-10 bg-neutral-100">
      <div className="mx-auto w-[80%]">
        <p className="pt-10 text-center font-bold">WHAT'S NEW</p>
        <div className="flex flex-row justify-around pb-10">
          <div>
            <img
              className="xs:w-xs mb-3 max-w-xl pt-10"
              src="/images/new1.jpg"
            />
            <a href="" className="underline-offset-3 underline">
              <p>Spring Lipgloss collenctions</p>
            </a>
            <p className="max-w-[375px]">
              Lorem ipsum dolor sit amet, consectetur adipisci elit.
            </p>
          </div>
          <div>
            <img
              className="xs:w-xs mb-3 h-[500px] max-w-xl pt-10"
              src="/images/new2.jpg"
            />
            <a href="" className="underline-offset-3 underline">
              <p>Liquid glitter eyeshadow collenctions</p>
            </a>
            <p className="max-w-[375px]">
              Lorem ipsum dolor sitamet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
