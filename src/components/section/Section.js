import React from 'react';
import '../header/Header.css';

export default function Section() {
  return (
    <>
    
    {/* sales and banner */}
    <div className="d-flex pt-2 my-3">
          <div className="container-fluid bg-white pb-2 border" style={{height: 'fit-content'}}>
            <div className="row pt-3">
              <div className="col slider-heading">
                <h4>Deals Of the Day</h4>
              </div>
              <div className="col col-sm-4 view-btn">
                <div>
                  <button className="btn btn-primary shadow">View All</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex nowrap justify-content-center">
              <div className="card text-center sales">
                <img className="card-img-top p-2 img-fluid w-100" alt="Logitech C310 HD Webcam" src="https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70 1x" />
                <div className="card-body p-1" title="From ₹490">
                  <h6 className="card-title">Webcams</h6>
                  <a href="#" className="card-link">From ₹490</a>
                  <p className="card-subtitle text-muted">Logitech, Quantum &amp; more</p>
                </div>
              </div>
              <div className="card text-center sales">
                <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="Samsung Galaxy M11 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70 1x" />
                <div className="card-body p-1" title="5000 mAh Battery">
                  <h6 className="card-title">Samsung Galaxy M11</h6>
                  <a href="#" className="card-link">5000 mAh Battery</a>
                  <p className="card-subtitle text-muted">Now ₹10150</p>
                </div>
              </div>
              <div className="card text-center sales">
                <img className="card-img-top p-2 img-fluid w-100" alt="Woodland Men Brown Sports Sandals" src="https://rukminim1.flixcart.com/image/150/150/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70 1x" />
                <div className="card-body p-1" title="Upto 50% Off">
                  <h6 className="card-title">Woodland</h6>
                  <a href="#" className="card-link">Upto 50% Off</a>
                  <p className="card-subtitle text-muted">Sandals and Floaters</p>
                </div>
              </div>
              <div className="card text-center sales">
                <img className="card-img-top p-2 img-fluid w-100" alt="WDS Velvet 3 Seater Inflatable Sofa" src="https://rukminim1.flixcart.com/image/150/150/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70 1x" />
                <div className="card-body p-1" title="Min 50% Off">
                  <h6 className="card-title">Inflatable Sofas</h6>
                  <a href="#" className="card-link">Min 50% Off</a>
                  <p className="card-subtitle text-muted">Furn Central &amp; more</p>
                </div>
              </div>
              <div className="card text-center sales">
                <img className="card-img-top p-2 img-fluid w-100" alt="one click Solid Single Breasted Party, Casual, Wedding Men Blazer" src="https://rukminim1.flixcart.com/image/150/150/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70 1x" />
                <div className="card-body p-1" title="50-80% Off">
                  <h6 className="card-title">Party blazers for men</h6>
                  <a href="#" className="card-link">50-80% Off</a>
                  <p className="card-subtitle text-muted">Hangup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card ml-2 p-2" style={{height: '15%'}}>
            <img className="card-img img-fluid w-100" src="https://rukminim1.flixcart.com/flap/600/358/image/633789f7def60050.jpg?q=70" alt="IKFS" />
          </div>
        </div>
        {/* 3-Card Banner Section */}
        <div className="container-fluid">
          <div className="row row-cols-3">
            <div className="col pl-0 pr-2">
              <img className="img-fluid cur" alt="Furniture Bestsellers" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50" />
            </div>
            <div className="col pl-0 pr-2">
              <img className="img-fluid cur" alt="cv" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/280f4c9921a571d5.png?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/280f4c9921a571d5.png?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/280f4c9921a571d5.png?q=50" />
            </div>
            <div className="col px-0">
              <img className="img-fluid cur" alt="Wash5thFeb" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50" />
            </div>
          </div>
        </div>
        {/* Ease your Daily Chores Slider */}
        <div className="container-fluid bg-white my-1 py-2 border shadow">
          <div className="row pt-3">
            <div className="col">
              <h4>Ease your Daily Chores</h4>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Usha Marvella Electric Sewing Machine" src="https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Shop Now!">
                <h6 className="card-title">Sewing Machines</h6>
                <a href="#" className="card-link">Shop Now!</a>
                <p className="card-subtitle text-muted">Usha, Singer &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Inverters (Shop Now!)" src="https://rukminim1.flixcart.com/image/150/150/k5ihzm80/inverter/v/k/z/zelio-1100-12v-luminous-original-imafz6gnztg3p8fg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k5ihzm80/inverter/v/k/z/zelio-1100-12v-luminous-original-imafz6gnztg3p8fg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k5ihzm80/inverter/v/k/z/zelio-1100-12v-luminous-original-imafz6gnztg3p8fg.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Shop Now!">
                <h6 className="card-title">Inverters</h6>
                <a href="#" className="card-link">Shop Now!</a>
                <p className="card-subtitle text-muted">Luminous, Microtek</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Power Packed TVs for You! (Starting at ₹8,499)" src="https://rukminim1.flixcart.com/image/150/150/keuagsw0/television/y/e/y/panasonic-th-50hx450dx-th-50hx450dx-original-imafvf3sbzgzygu2.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/keuagsw0/television/y/e/y/panasonic-th-50hx450dx-th-50hx450dx-original-imafvf3sbzgzygu2.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/keuagsw0/television/y/e/y/panasonic-th-50hx450dx-th-50hx450dx-original-imafvf3sbzgzygu2.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Starting at ₹8,499">
                <h6 className="card-title">Power Packed TVs</h6>
                <a href="#" className="card-link">Starting at ₹8,499</a>
                <p className="card-subtitle text-muted">Captivating Display Quality</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Philips Vacuum Cleaners (Run Time: 15 min)" src="https://rukminim1.flixcart.com/image/150/150/kg40k280/vacuum-cleaner/n/f/9/philips-fc9352-01-innovation-and-new-original-imafwffhen7zwrzu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kg40k280/vacuum-cleaner/n/f/9/philips-fc9352-01-innovation-and-new-original-imafwffhen7zwrzu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kg40k280/vacuum-cleaner/n/f/9/philips-fc9352-01-innovation-and-new-original-imafwffhen7zwrzu.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Run Time: 15 min">
                <h6 className="card-title">Philips Vacuum Cleaners</h6>
                <a href="#" className="card-link">Run Time: 15 min</a>
                <p className="card-subtitle text-muted">Maximum Sound Level</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Kaff Microwave Oven (Convection & Grill)" src="https://rukminim1.flixcart.com/image/150/150/kdt50nk0/microwave-new/u/f/m/ov-81-gikf-kaff-original-imafumd6khqsa9hv.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kdt50nk0/microwave-new/u/f/m/ov-81-gikf-kaff-original-imafumd6khqsa9hv.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kdt50nk0/microwave-new/u/f/m/ov-81-gikf-kaff-original-imafumd6khqsa9hv.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Convection & Grill">
                <h6 className="card-title">Kaff Microwave Oven</h6>
                <a href="#" className="card-link">Convection &amp; Grill</a>
                <p className="card-subtitle text-muted">81 L &amp; Touch Key Pad</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="The Best of TVs are here! (Just from ₹12999)" src="https://rukminim1.flixcart.com/image/150/150/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Just from ₹12999">
                <h6 className="card-title">The Best of TVs are here!</h6>
                <a href="#" className="card-link">Just from ₹12999</a>
                <p className="card-subtitle text-muted">Trending on Flipkart</p>
              </div>
            </div>
          </div>
        </div>
        {/* Furniture Bestsellers Slider */}
        <div className="container-fluid bg-white my-3 py-2 border shadow-sm">
          <div className="row pt-3">
            <div className="col slider-heading">
              <h4>Furniture Bestsellers</h4>
              <h6 className="text-muted">Furniture Bestsellers</h6>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Swingzy Handmade Cotton Hanging Swing Cotton, Wooden Small Swing" src="https://rukminim1.flixcart.com/image/150/150/kdyus280/hammock-swing/m/5/z/white-hammock-swing-hanging-chair-swingzy-original-imafuqwjpzmgrnnu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kdyus280/hammock-swing/m/5/z/white-hammock-swing-hanging-chair-swingzy-original-imafuqwjpzmgrnnu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kdyus280/hammock-swing/m/5/z/white-hammock-swing-hanging-chair-swingzy-original-imafuqwjpzmgrnnu.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹1,169">
                <h6 className="card-title">Swings</h6>
                <a href="#" className="card-link">From ₹1,169</a>
                <p className="card-subtitle text-muted">Trendy Collection</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="The Furniture Store XXXL Bean Bag Cover  (Without Beans)" src="https://rukminim1.flixcart.com/image/150/150/bean-bag/h/v/b/f8-the-furniture-store-xxxl-original-imae65d3wg7qzpkn.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/bean-bag/h/v/b/f8-the-furniture-store-xxxl-original-imae65d3wg7qzpkn.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/bean-bag/h/v/b/f8-the-furniture-store-xxxl-original-imae65d3wg7qzpkn.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min 80% Off">
                <h6 className="card-title">Bean Bag Covers</h6>
                <a href="#" className="card-link">Min 80% Off</a>
                <p className="card-subtitle text-muted">XL, XXL &amp; More</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Flipkart Perfect Homes Julian Engineered Wood 4 Door Wardrobe" src="https://rukminim1.flixcart.com/image/150/150/jo8xg280/wardrobe-closet/n/h/9/particle-board-w4wal00ed2wmp-flipkart-perfect-homes-american-original-imaf9m4hh8mg5e79.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jo8xg280/wardrobe-closet/n/h/9/particle-board-w4wal00ed2wmp-flipkart-perfect-homes-american-original-imaf9m4hh8mg5e79.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jo8xg280/wardrobe-closet/n/h/9/particle-board-w4wal00ed2wmp-flipkart-perfect-homes-american-original-imaf9m4hh8mg5e79.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹5,999">
                <h6 className="card-title">Wardrobes</h6>
                <a href="#" className="card-link">From ₹5,999</a>
                <p className="card-subtitle text-muted">By Flipkart Perfect Home &amp; More</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Woodness Jenson Solid Wood Bunk Bed" src="https://rukminim1.flixcart.com/image/150/150/jsm3vrk0/bunk-loft-bed/w/b/q/na-rubber-wood-27035-woodness-dark-brown-original-imafe47eukgzsjkr.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jsm3vrk0/bunk-loft-bed/w/b/q/na-rubber-wood-27035-woodness-dark-brown-original-imafe47eukgzsjkr.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jsm3vrk0/bunk-loft-bed/w/b/q/na-rubber-wood-27035-woodness-dark-brown-original-imafe47eukgzsjkr.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Upto 78% off">
                <h6 className="card-title">Furniture Accessories</h6>
                <a href="#" className="card-link">Upto 78% off</a>
                <p className="card-subtitle text-muted">Bunk Beds, Benches ...</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="WDS Velvet 3 Seater Inflatable Sofa" src="https://rukminim1.flixcart.com/image/150/150/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/inflatable-sofa/6/j/s/wsb031a-velvet-wds-original-imaeaphzbkgrz3xp.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min 50% Off">
                <h6 className="card-title">Inflatable Sofas</h6>
                <a href="#" className="card-link">Min 50% Off</a>
                <p className="card-subtitle text-muted">Furn Central &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Marusthalee Designer Temple Solid Wood Home Temple" src="https://rukminim1.flixcart.com/image/150/150/jm6mjrk0/home-temple/k/g/g/designer-tample-marusthalee-original-imaf958ryaufedqj.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jm6mjrk0/home-temple/k/g/g/designer-tample-marusthalee-original-imaf958ryaufedqj.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jm6mjrk0/home-temple/k/g/g/designer-tample-marusthalee-original-imaf958ryaufedqj.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹699">
                <h6 className="card-title">Home Temples</h6>
                <a href="#" className="card-link">From ₹699</a>
                <p className="card-subtitle text-muted">Trendy Made In India Collections</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3-Card Banner Section */}
        <div className="container-fluid">
          <div className="row row-cols-3">
            <div className="col pl-0 pr-2">
              <img className="img-fluid cur" alt="SHA" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/961504bea58924f1.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/961504bea58924f1.jpg?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/961504bea58924f1.jpg?q=50" />
            </div>
            <div className="col pl-0 pr-2">
              <img className="img-fluid cur" alt="DT" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/4224c093ab3f6206.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/4224c093ab3f6206.jpg?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/4224c093ab3f6206.jpg?q=50" />
            </div>
            <div className="col px-0">
              <img className="img-fluid cur" alt="Shirt" srcSet="https://rukminim1.flixcart.com/flap/960/960/image/8cce25a66aceee84.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/8cce25a66aceee84.jpg?q=50 1x" src="https://rukminim1.flixcart.com/flap/480/480/image/8cce25a66aceee84.jpg?q=50" />
            </div>
          </div>
        </div>
        {/* Best of Electronics Slider */}
        <div className="container-fluid bg-white my-3 py-2 border shadow-sm">
          <div className="row pt-3">
            <div className="col slider-heading">
              <h4>Best of Electronics</h4>
              <h6 className="text-muted">Devices and Accessories</h6>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Best Brands (Shop Now)" src="https://rukminim1.flixcart.com/image/150/150/kg15ocw0/cases-covers/back-cover/3/y/n/spigen-acs00565-original-imafwcw8bz2tnzgp.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kg15ocw0/cases-covers/back-cover/3/y/n/spigen-acs00565-original-imafwcw8bz2tnzgp.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kg15ocw0/cases-covers/back-cover/3/y/n/spigen-acs00565-original-imafwcw8bz2tnzgp.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Shop Now!">
                <h6 className="card-title">Best Brands</h6>
                <a href="#" className="card-link">Shop Now!</a>
                <p className="card-subtitle text-muted">For All Phone Models</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="JioFi JMR 541 Data Card" src="https://rukminim1.flixcart.com/image/150/150/k6mibgw0/datacard/r/h/g/jiofi-jmr-541-original-imafpfhandhkptwc.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k6mibgw0/datacard/r/h/g/jiofi-jmr-541-original-imafpfhandhkptwc.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k6mibgw0/datacard/r/h/g/jiofi-jmr-541-original-imafpfhandhkptwc.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Upto 60% off">
                <h6 className="card-title">Data Cards</h6>
                <a href="#" className="card-link">Upto 60% off</a>
                <p className="card-subtitle text-muted">JioFi, Huawei &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Logitech C310 HD Webcam" src="https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹490">
                <h6 className="card-title">Webcams</h6>
                <a href="#" className="card-link">From ₹490</a>
                <p className="card-subtitle text-muted">Logitech, Quantum &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Gaming Headsets (Best Selling)" src="https://rukminim1.flixcart.com/image/150/150/k2w6xe80/headphone/k/m/d/acer-predator-galea-311-phw910-np-hds11-00b-original-imafm58gaeg3hb7x.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k2w6xe80/headphone/k/m/d/acer-predator-galea-311-phw910-np-hds11-00b-original-imafm58gaeg3hb7x.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k2w6xe80/headphone/k/m/d/acer-predator-galea-311-phw910-np-hds11-00b-original-imafm58gaeg3hb7x.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Best Selling">
                <h6 className="card-title">Gaming Headsets</h6>
                <a href="#" className="card-link">Best Selling</a>
                <p className="card-subtitle text-muted">Cosmic Byte, Acer, HyperX &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Best Selling Laptops (Upto 40% off)" src="https://rukminim1.flixcart.com/image/150/150/kctf0cw0/computer/7/j/c/dell-original-imaftuvztweg8kf8.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kctf0cw0/computer/7/j/c/dell-original-imaftuvztweg8kf8.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kctf0cw0/computer/7/j/c/dell-original-imaftuvztweg8kf8.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Upto 40% Off">
                <h6 className="card-title">Best Selling Laptops</h6>
                <a href="#" className="card-link">Upto 40% Off</a>
                <p className="card-subtitle text-muted">Asus, Acer, Dell &amp; More</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="BeFunky Back Cover for Apple iPhone X, Apple iPhone XS" src="https://rukminim1.flixcart.com/image/150/150/jd0jtzk0/cases-covers/back-cover/z/b/f/befunky-isimple-matte-finish-flexible-soft-tpu-skin-support-original-imafyfmje9mvkfea.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jd0jtzk0/cases-covers/back-cover/z/b/f/befunky-isimple-matte-finish-flexible-soft-tpu-skin-support-original-imafyfmje9mvkfea.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jd0jtzk0/cases-covers/back-cover/z/b/f/befunky-isimple-matte-finish-flexible-soft-tpu-skin-support-original-imafyfmje9mvkfea.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Just ₹159">
                <h6 className="card-title">For Vivo</h6>
                <a href="#" className="card-link">Just ₹159</a>
                <p className="card-subtitle text-muted">Plain Case Covers</p>
              </div>
            </div>
          </div>
        </div>
        {/* Best Battery Phones Slider */}
        <div className="container-fluid bg-white my-3 py-2 border shadow-sm">
          <div className="row pt-3">
            <div className="col slider-heading">
              <h4>Best Battery Phones</h4>
              <h6 className="text-muted">More than 4000mAh</h6>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="realme Narzo 10A (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70 1x" />
              <div className="card-body p-1" title="5000 mAh Battery">
                <h6 className="card-title">Realme Narzo 10A (White)</h6>
                <a href="#" className="card-link">5000 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹9999</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="Poco X2 (4500 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70 1x" />
              <div className="card-body p-1" title="4500 mAh Battery">
                <h6 className="card-title">POCO X2 (Atlantis Blue)</h6>
                <a href="#" className="card-link">4500 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹17499</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="Moto Edge Plus (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k9loccw0/mobile/h/f/h/motorola-racer-turbo-edge-xt2061-3-original-imafrcvgpqx23mcq.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k9loccw0/mobile/h/f/h/motorola-racer-turbo-edge-xt2061-3-original-imafrcvgpqx23mcq.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k9loccw0/mobile/h/f/h/motorola-racer-turbo-edge-xt2061-3-original-imafrcvgpqx23mcq.jpeg?q=70 1x" />
              <div className="card-body p-1" title="5000 mAh Battery">
                <h6 className="card-title">Motorola Edge+ (Thunder Grey)</h6>
                <a href="#" className="card-link">5000 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹64999</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="OPPO A9 2020 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/mobile/z/y/h/oppo-a9-2020-cph1937-original-imafkhhxh2vsxnmq.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k51cpe80pkrrdj/mobile/z/y/h/oppo-a9-2020-cph1937-original-imafkhhxh2vsxnmq.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/mobile/z/y/h/oppo-a9-2020-cph1937-original-imafkhhxh2vsxnmq.jpeg?q=70 1x" />
              <div className="card-body p-1" title="5000 mAh Battery">
                <h6 className="card-title">OPPO A9 2020 (Marine Green)</h6>
                <a href="#" className="card-link">5000 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹15990</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="Samsung Galaxy M11 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70 1x" />
              <div className="card-body p-1" title="5000 mAh Battery">
                <h6 className="card-title">Samsung Galaxy M11 (Black)</h6>
                <a href="#" className="card-link">5000 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹10150</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-5 img-fluid w-50" alt="Samsung Galaxy M01 (4000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/d/f/a/samsung-galaxy-m01-sm-m015gzbdins-original-imafscggmdqgt62q.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kavefm80/mobile/d/f/a/samsung-galaxy-m01-sm-m015gzbdins-original-imafscggmdqgt62q.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/d/f/a/samsung-galaxy-m01-sm-m015gzbdins-original-imafscggmdqgt62q.jpeg?q=70 1x" />
              <div className="card-body p-1" title="4000 mAh Battery">
                <h6 className="card-title">Samsung Galaxy M01 (Blue)</h6>
                <a href="#" className="card-link">4000 mAh Battery</a>
                <p className="card-subtitle text-muted">Now ₹8354</p>
              </div>
            </div>
          </div>
        </div>
        {/* Top Deals on Fashion Slider */}
        <div className="container-fluid bg-white my-3 py-2 border shadow-sm">
          <div className="row pt-3">
            <div className="col slider-heading">
              <h4>Top Deals on Fashion</h4>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt=" Pearl Jewellery" src="https://rukminim1.flixcart.com/flap/150/150/image/d1b1c172484ce877.jpg?q=70" srcSet="https://rukminim1.flixcart.com/flap/300/300/image/d1b1c172484ce877.jpg?q=70 2x, https://rukminim1.flixcart.com/flap/150/150/image/d1b1c172484ce877.jpg?q=70 1x" />
              <div className="card-body p-1" title="40-80% Off">
                <h6 className="card-title">Grand Pearl Jewellery</h6>
                <a href="#" className="card-link">40-80% Off</a>
                <p className="card-subtitle text-muted">Zaveri Pearls , Voylla &amp; more</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Ishin Women Embroidered Anarkali Kurta" src="https://rukminim1.flixcart.com/image/150/150/k1pbpu80/kurta/m/q/s/m-kurpram-gb-565-ishin-original-imafh7d8mhxdpveg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k1pbpu80/kurta/m/q/s/m-kurpram-gb-565-ishin-original-imafh7d8mhxdpveg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k1pbpu80/kurta/m/q/s/m-kurpram-gb-565-ishin-original-imafh7d8mhxdpveg.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹299">
                <h6 className="card-title">Ishin</h6>
                <a href="#" className="card-link">From ₹299</a>
                <p className="card-subtitle text-muted">Ethnic Wear</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="one click Solid Single Breasted Party, Casual, Wedding Men Blazer" src="https://rukminim1.flixcart.com/image/150/150/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jcdoscw0/blazer/p/w/e/42-rlblu01-one-click-original-imaffg49ehyycgch.jpeg?q=70 1x" />
              <div className="card-body p-1" title="50-80% Off">
                <h6 className="card-title">Party blazers for men</h6>
                <a href="#" className="card-link">50-80% Off</a>
                <p className="card-subtitle text-muted">Hangup</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Saara Digital Print, Floral Print Semi Stitched Lehenga Choli" src="https://rukminim1.flixcart.com/image/150/150/k7jdg280/lehenga-choli/m/h/f/free-na-102l10171-saara-original-imafprdmenpgbx2n.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k7jdg280/lehenga-choli/m/h/f/free-na-102l10171-saara-original-imafprdmenpgbx2n.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k7jdg280/lehenga-choli/m/h/f/free-na-102l10171-saara-original-imafprdmenpgbx2n.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min 60% Off">
                <h6 className="card-title">Lehenga Cholis</h6>
                <a href="#" className="card-link">Min 60% Off</a>
                <p className="card-subtitle text-muted">Embeoidered</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Woodland Men Brown Sports Sandals" src="https://rukminim1.flixcart.com/image/150/150/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jvv9zm80/sandal/j/g/w/gd-2665117camel-40-woodland-camel-original-imafgztfhjdp6xmg.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Upto 50% Off">
                <h6 className="card-title">Woodland</h6>
                <a href="#" className="card-link">Upto 50% Off</a>
                <p className="card-subtitle text-muted">Sandals and Floaters</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 img-fluid w-100" alt="Puma Jaunt IDP Running Shoes For Men" src="https://rukminim1.flixcart.com/image/150/150/k6s82vk0/shoe/9/q/9/373642-9-puma-peacoat-jaffa-orange-original-imafp64sswgfxt7f.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k6s82vk0/shoe/9/q/9/373642-9-puma-peacoat-jaffa-orange-original-imafp64sswgfxt7f.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k6s82vk0/shoe/9/q/9/373642-9-puma-peacoat-jaffa-orange-original-imafp64sswgfxt7f.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹399">
                <h6 className="card-title">Puma, Asian &amp; more</h6>
                <a href="#" className="card-link">From ₹399</a>
                <p className="card-subtitle text-muted">Sports Shoes &amp; more</p>
              </div>
            </div>
          </div>
        </div>
        {/* Top Picks on Men's Clothing slider */}
        <div className="container-fluid bg-white my-3 py-2 border shadow-sm">
          <div className="row pt-3">
            <div className="col slider-heading">
              <h4>Top Picks On Men's Clothing</h4>
            </div>
            <div className="col col-sm-4 view-btn">
              <div>
                <button className="btn btn-primary shadow">View All</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row slider d-flex nowrap justify-content-center">
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Redwood Solid Single Breasted Party, Formal, Casual, Wedding Men Blazer" src="https://rukminim1.flixcart.com/image/150/150/jbgtnrk0/blazer/a/y/q/44-blkp01-redwood-original-imafyr84ngqzxvqb.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jbgtnrk0/blazer/a/y/q/44-blkp01-redwood-original-imafyr84ngqzxvqb.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jbgtnrk0/blazer/a/y/q/44-blkp01-redwood-original-imafyr84ngqzxvqb.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Under ₹1500">
                <h6 className="card-title">Party blazers for men</h6>
                <a href="#" className="card-link">Under ₹1500</a>
                <p className="card-subtitle text-muted">Best Prices</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Puma Solid Men Hooded Black, Grey T-Shirt" src="https://rukminim1.flixcart.com/image/150/150/jll6xzk0/t-shirt/z/3/h/m-51700902black-puma-original-imaf8zhfvp83rghg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jll6xzk0/t-shirt/z/3/h/m-51700902black-puma-original-imaf8zhfvp83rghg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jll6xzk0/t-shirt/z/3/h/m-51700902black-puma-original-imaf8zhfvp83rghg.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min. 50% Off">
                <h6 className="card-title">T-Shirts</h6>
                <a href="#" className="card-link">Min. 50% Off</a>
                <p className="card-subtitle text-muted">U.S. Polo Assn, Adidas...</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Dennis Lingo Men Solid Casual Multicolor Shirt" src="https://rukminim1.flixcart.com/image/150/150/jpk2z680/shirt/a/y/q/xl-c501-towelblue-dennis-lingo-original-imafbryzzcnw92cw.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jpk2z680/shirt/a/y/q/xl-c501-towelblue-dennis-lingo-original-imafbryzzcnw92cw.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jpk2z680/shirt/a/y/q/xl-c501-towelblue-dennis-lingo-original-imafbryzzcnw92cw.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min 60% off">
                <h6 className="card-title">Denim Shirts</h6>
                <a href="#" className="card-link">Min 60% off</a>
                <p className="card-subtitle text-muted">Not to be Missed!</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="Crease & Clips Men Cargos" src="https://rukminim1.flixcart.com/image/150/150/k5vcya80/cargo/f/3/k/36-k2s-465-10394-maartiza-original-imafcyz5qyjjk2ph.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k5vcya80/cargo/f/3/k/36-k2s-465-10394-maartiza-original-imafcyz5qyjjk2ph.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k5vcya80/cargo/f/3/k/36-k2s-465-10394-maartiza-original-imafcyz5qyjjk2ph.jpeg?q=70 1x" />
              <div className="card-body p-1" title="From ₹599">
                <h6 className="card-title">Popular Cargos</h6>
                <a href="#" className="card-link">From ₹599</a>
                <p className="card-subtitle text-muted">Best Collection</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="KJS Solid Multicolor Lungi" src="https://rukminim1.flixcart.com/image/150/150/dhoti/y/k/u/one-dhoti-fancy-white-pitaliya-free-original-imaeg3y2fgmx8twz.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/dhoti/y/k/u/one-dhoti-fancy-white-pitaliya-free-original-imaeg3y2fgmx8twz.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/dhoti/y/k/u/one-dhoti-fancy-white-pitaliya-free-original-imaeg3y2fgmx8twz.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Min 40% Off">
                <h6 className="card-title">Lungi</h6>
                <a href="#" className="card-link">Min 40% Off</a>
                <p className="card-subtitle text-muted">Handpicked Collection</p>
              </div>
            </div>
            <div className="card text-center sales">
              <img className="card-img-top p-2 ml-3 img-fluid w-75" alt="URBAN LEGENDS Men Cargos" src="https://rukminim1.flixcart.com/image/150/150/kchzhjk0/cargo/m/a/v/34-r20splgreen-urban-legends-original-imaftm3ajnvhgsxh.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/kchzhjk0/cargo/m/a/v/34-r20splgreen-urban-legends-original-imaftm3ajnvhgsxh.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/kchzhjk0/cargo/m/a/v/34-r20splgreen-urban-legends-original-imaftm3ajnvhgsxh.jpeg?q=70 1x" />
              <div className="card-body p-1" title="Under ₹999">
                <h6 className="card-title">Popular Cargos</h6>
                <a href="#" className="card-link">Under ₹999</a>
                <p className="card-subtitle text-muted">Grab or Gone!</p>
              </div>
            </div>
          </div>
        </div>
        {/* information */}
        <div className="container-fluid border information">
          <div className="row">
            <div className="col">
              <h1 className="pt-3">Flipkart: The One-stop Shopping Destination</h1>
              <p className="info">
                E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to
                another in search of the latest phone when you can find it on the Internet in a single click? Not
                only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like
                laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes,
                clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and
                wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder
                juicers and other time-saving kitchen and small appliances; from home furnishings like cushion
                covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name
                it, and you can stay assured about finding them all here. For those of you with erratic working
                hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning.
                This e-commerce never shuts down.
              </p>
              <p className="info">
                What's more, with our year-round shopping festivals and events, our prices are irresistible. We're
                sure you'll find yourself picking up more than what you had in mind. If you are wondering why you
                should shop from Flipkart when there are multiple options available to you, well, the below will
                answer your question.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Flipkart Plus</h2>
              <p className="info">
                A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward
                programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to
                be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4
                supercoins &amp; non-plus members earn 2 supercoins. Free delivery, early access during sales and
                shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart
                Plus member. In short, earn more when you shop more!
              </p>
              <p className="info">
                What's more, you can even use the Flipkart supercoins for a number of exciting services, like:<br />An
                annual Zomato Gold membership<br />An annual Hotstar Premium membership<br />6 months Gaana plus
                subscription<br />Rupees 550 instant discount on flights on ixigo<br />Check out
                https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>No Cost EMI</h2>
              <p className="info">
                In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop
                with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops,
                large and small appliances, furniture, electronics and watches, you can now shop without burning a
                hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a
                no cost EMI. Take a look ASAP! Terms and conditions apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>EMI on Debit Cards</h2>
              <p className="info">
                Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14
                crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online
                shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop
                confidently with us without having to worry about pauses in monthly cash flow. At present, we have
                partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More
                power to all our shoppers! Terms and conditions apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Mobile Exchange Offers</h2>
              <p className="info">
                Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a
                new one after the Flipkart experts calculate the value of your old phone, provided it is in a
                working condition without damage to the screen. If a phone is applicable for an exchange offer, you
                will see the 'Buy with Exchange' option on the product description of the phone. So, be smart,
                always opt for an exchange wherever possible. Terms and conditions apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>What Can You Buy From Flipkart?</h2>
              <h2>Mobile Phones</h2>
              <p className="info">
                From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there.
                Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors,
                beautification apps, high-tech selfie cameras or just large internal space, we take care of all the
                essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and
                Honor to name a few. Rest assured, you're buying from only the most reliable names in the market.
                What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to
                run around service centres. This plan entails you to a number of post-purchase solutions, starting
                at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches,
                and replacements - <b>the Flipkart Complete Mobile Protection</b> covers a comprehensive range of
                post-purchase problems, with door-to-door services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Electronic Devices and Accessories</h2>
              <p className="info">
                When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating
                systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized
                results in a flash. All you students out there, confused about what laptop to get? Our <b>Back To
                  College Store</b> segregates laptops purpose wise (gaming, browsing and research, project work,
                entertainment, design, multitasking) with recommendations from top brands and industry experts,
                facilitating a shopping experience that is quicker and simpler.
              </p>
              <p className="info">
                Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever
                reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for
                adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon,
                Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers,
                you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable
                point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure
                junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon,
                GoPro, Sony, and Fujifilm are some big names you'll find in our store.
              </p>
              <p className="info">
                Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range
                of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.
              </p>
              <p className="info">
                How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile
                accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks
                can prove to be ideal travel companions for you and your phone; never again worry about running out
                of charge or memory on your next vacation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Large Appliances</h2>
              <p className="info">
                Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover
                everything you need to run a house under one roof. Our <b>Dependable TV and Appliance Store</b>
                ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and
                installation as per your convenience and a double warranty (Official Brand Warranty along with an
                extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop
                from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej,
                Sony, Daikin, and Hitachi among many others.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Small Home Appliances</h2>
              <p className="info">
                Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs,
                microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving
                appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances
                at home.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Lifestyle</h2>
              <p className="info">
                Flipkart, <b>'India ka Fashion Capital'</b>, is your one-stop fashion destination for anything and
                everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter
                clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up,
                grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like
                Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of
                other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants,
                traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is
                up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for
                carefully curated designs that are the talk of the town. Get ready to be spoiled for
                choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your
                back each time.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Home and Furniture</h2>
              <p className="info">
                Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets,
                dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds
                of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture
                will stand the test of time? These are questions you must ask before you choose a store. Well, our
                <b>Durability Certified Furniture Store</b> has not only curated a range of furniture keeping in
                mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they
                last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so
                that you receive only the best-quality furniture. <b>Be FurniSure</b>, always. Names to look out for
                are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.
              </p>
              <p className="info">
                You may have your furniture all set up, but they could end up looking flat and incomplete without
                complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps -
                find everything that turns a house to an inviting home under one roof at Flipkart.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Baby and Kids</h2>
              <p className="info">
                Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an
                expecting mother or a new mother, you will find everything you need to set sail on a smooth
                parenting journey with the help of our baby care collection. When it comes to safety, hygiene and
                comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson &amp;
                Johnson: we host only the most-trusted names in the business for your baby.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Books, Sports and Games</h2>
              <p className="info">
                Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction
                books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming
                consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to
                get moving.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Grocery/Supermart</h2>
              <p className="info">
                Launching into the grocery vertical, Flipkart introduces <b>Supermart</b> that is out to bring
                everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast
                essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to
                present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only -
                our <b>1 Rupee Store</b> presents new products every day for a nominal price of 1 Rupee only. Terms
                and conditions apply.
              </p>
            </div>
          </div>
        </div>
    
    
    
    
    
    
    
    
    
    
    </>
  );
}
