/* 내 블로그 홍보 설정 — 이 파일만 고치면 모든 페이지에 반영돼요.
   url 이 비어 있으면 아무것도 표시되지 않아요. */
window.PROMO = {
  url: "https://onmoari.blogspot.com",            // 블로그 주소 (예: "https://blog.naver.com/내아이디")
  img: "/promo/onmoari-banner.png",            // 배너 이미지 주소 (예: "promo/banner.png"). 비우면 글자 버튼으로 표시
  text: "온모아리 블로그 바로가기", // 이미지가 없을 때 / 이미지 설명(alt)
  banner: true        // 페이지 본문 아래와 왼쪽 메뉴 아래에 배너 표시
};
(function(){
  var P=window.PROMO; if(!P||!P.url) return;
  var css=document.createElement('style');
  css.textContent='.promo{display:block;margin:24px 0;text-align:center}.promo img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line,#ddd)}'
  +'.promo .pb{display:inline-block;padding:14px 22px;border-radius:10px;background:var(--bar,#1D4F9F);color:#fff;font-weight:700;text-decoration:none}'
  +'aside .promo{margin:16px 0 0}';
  document.head.appendChild(css);
  function inner(){return P.img?'<img src="'+P.img+'" alt="'+(P.text||'')+'" loading="lazy">':'<span class="pb">'+(P.text||'바로가기')+'</span>'}
  function link(){var a=document.createElement('a');a.className='promo';a.href=P.url;a.target='_blank';a.rel='noopener';a.innerHTML=inner();return a}
  function init(){
    if(P.banner!==false){
      var m=document.querySelector('main'),s=document.getElementById('side');
      if(m)m.appendChild(link());
      if(s)s.appendChild(link());
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
