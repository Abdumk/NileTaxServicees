import React from 'react'
import './Home.css';
import banner from '../../assets/images/aa3.jpg'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function Home() {
  return (
    <>
        {/* <div className="home">
            <h1>Welcome to Nile Tax Service</h1>
            <p>Get your taxes done with us</p>
        </div> */}

        <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and offerings.</p>
      </div>
 <section id="featured-services" className="featured-services section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-activity icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Lorem Ipsum</a>
            </h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Sed ut perspici</a>
            </h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Magni Dolores</a>
            </h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast icon"></i>
            </div>
            <h4>
              <a href="" className="stretched-link">Nemo Enim</a>
            </h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div className="container">
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque consequuntur provident culpa, quam cupiditate autem distinctio sed iusto iste laudantium aperiam voluptates inventore deserunt perferendis ex reprehenderit suscipit omnis.
    Explicabo, veritatis aliquam veniam odio ducimus distinctio eos consectetur quod error esse, beatae dolor accusamus. Aliquam saepe ut ad repudiandae reprehenderit voluptas quo quidem, tempore autem, distinctio laudantium, nam rerum.
    Commodi veniam exercitationem perferendis consequatur molestias quae aliquam accusamus eaque soluta tempora deleniti totam aut pariatur obcaecati, ipsum nam, delectus distinctio officia quia? Vitae excepturi eius provident commodi aut consectetur?
    Possimus eum delectus quod distinctio tempore illum natus, ea, corporis magnam dolorum est. Placeat laudantium eveniet pariatur nobis facere perspiciatis vitae, magnam, libero est quae quod. Accusamus aperiam deleniti impedit?
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum cupiditate dolorem architecto voluptate modi atque sit in facilis nemo, nobis consectetur culpa minus blanditiis quas! Accusantium reprehenderit fugit cum!
Voluptatum exercitationem id minus voluptatibus et facere distinctio ratione numquam excepturi magnam amet quod saepe fugit dolorum, cum voluptatem, repudiandae esse quisquam eius repellendus molestiae minima explicabo animi nesciunt. Praesentium.</p>

</div>
<section id="why-work-with-us" className="why-work-with-us section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Why Work With Us?</h2>
          <p>Discover the reasons to choose us as your trusted partner</p>
        </div>
        <div className="points-list" data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li>
              <i className="bi bi-check-circle"></i> We deliver high-quality solutions tailored to your needs.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Our team has extensive experience across industries.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> We prioritize customer satisfaction and long-term relationships.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Innovative and cost-effective services to ensure value.
            </li>
            <li>
              <i className="bi bi-check-circle"></i> Dedicated support and fast response times.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home