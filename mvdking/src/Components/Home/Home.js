import React from "react";

import "./Home.css";

function Home() {
  return (
    <div className="container Home">
      <section className="homebg">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="homeMain">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => window.my_modal_4.showModal()}
              >
                open modal
              </button>
            </div>
          </div>
        </div>

        {/*================================= You can open the modal using ID.showModal() method =========================*/}
        <dialog id="my_modal_4" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            
          <div className="carousel w-small">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              {/*==================== if there is a button, it will close the modal ====================*/}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>



        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/a/d/add6620b-adidas--adv-hw-grxt-m-black-iq5325-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.side-step.co.za/media/catalog/product/cache/60023b40f56fdff39b9c495b8e044aef/p/m/pma4769gr-puma-ts-graphics-legacy-tee-green-62487743-v1_jpg_1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
