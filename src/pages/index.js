export default function Home() {
  return (
    <div className="main-wrapper">
      <div className="hero-section">
        <div className="img">
          <img src="/assests/profile.png" alt="profilepic" />
        </div>
        <div className="text">
          <h2>GHILLANI TV</h2>
          <p>جیو تو علی ع کی طرح اور مرو تو حسین ع کی طرح</p>
        </div>
        <div className="likefoloow">
          <div className="folllowers">
            <img src="/assests/follower.svg" alt="follow Icon" />
            <p>6k+ Followers</p>
          </div>
          <div className="likes">
            <img src="/assests/likes.svg" alt="likes Icon" />
            <p>41k+ Likes</p>
          </div>
        </div>
        <div className="button">
          <a href="https://www.facebook.com/profile.php?id=100060867362078">
            <button>Open Profile</button>
          </a>
        </div>
      </div>
      <p className="feature-heading">What we Share</p>
      <div className="feature-section">
        <div className="feature">
          <img src="/assests/jashan.png" alt="" />
          <p>Jahsan e Ahle Bait</p>
        </div>
        <a href="">
          <div className="feature">
            <img src="/assests/majlis.png" alt="" />
            <p>Majalis Videos</p>
          </div>
        </a>
        <a href="">
          {" "}
          <div className="feature">
            <img src="/assests/meme.png" alt="" />
            <p>Memes</p>
          </div>
        </a>
        <a href="">
          <div className="feature">
            <img src="/assests/life.png" alt="" />
            <p>Life Activites</p>
          </div>
        </a>
      </div>
      <div className="contact-section">
        <p>Contact Me</p>
        <a href="tel:03009835201">
          <div className="c-line">
            <img src="/assests/call.svg" alt="" />
            <span>0300 9835201</span>
          </div>
        </a>
        <a href="mailto:ahsangillani1214@gmail.com">
          <div className="c-line">
            <img src="/assests/mail.svg" alt="" />
            <span>ahsangillani1214@gmail.com</span>
          </div>
        </a>
        <a href="https://www.tiktok.com/@ahsangillani740?_t=ZS-8u2jISvmZnE&_r=1">
          <div className="c-line">
            <img src="/assests/tiktok.svg" alt="" />
            <span>@ahsangillani741</span>
          </div>
        </a>
      </div>
    </div>
  );
}
