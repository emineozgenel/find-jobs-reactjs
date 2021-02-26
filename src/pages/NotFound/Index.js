import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => (
  <div className="page-404 relative">
    <div>
      <aside>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404"/>
      </aside>
      <main>
        <h1>Üzgünüz!</h1>
        <p>
        Aradığınız sayfayı maalesef bulamadık,  <em>yanlış bir bağlantıya yönlenmiş olabilirsiniz</em> veya daha önce var olan bir içerik sitemizden kaldırılmış olabilir.
        </p>
        <Link to="/" className="px-4 py-1 btn btn-primary">Anasayfa</Link>
      </main>
    </div>
  </div>
);

export default NotFound;
