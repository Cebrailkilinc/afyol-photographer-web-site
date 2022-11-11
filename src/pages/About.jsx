import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='max-w-6xl mx-auto flex items-center space-x-5 font-display4'>      

      <div className='w-4/6'>
        <h1 className='text-7xl    p-10'>Biz Kimiz ?</h1>
        <p data-aos = "fade-right"  className=' p-10 text-sm'>
          Futbola henüz 8 yaşındayken, doğup büyüdüğü Bayrampaşa'nın Altıntepsi mahallesindeki amatör bir takım olan Altıntepsi Makelspor'da başladı. 1997'den 2000'e kadar futbol yaşamını Altıntepsi Makelspor'da sürdürdü. 2000 yılında 12 yaşındayken, Galatasaray'a transfer oldu. 2000'den 2005 yılına kadar Galatasaray altyapısında futbol oynadı.
          Galatasaray forması ile ilk resmî maçına, 22 Ocak 2005 tarihinde Bursaspor ile oynanan Türkiye Kupası maçında çıktı. Profesyonel olduktan sonra da bir süre Galatasaray altyapısında forma giyen Turan, 2005-06 sezonunun ikinci yarısında Manisaspor'a kiralandı. Bu takımdaki ilk resmî maçına Ankaragücü ile deplasmanda oynanan maçta çıktı ve 2-0 kazanılan karşılaşmada, hem kulüp kariyerindeki hem de Süper Lig'deki ilk golünü attı.
          Manisaspor'da geçirdiği yarım sezonun ardından Galatasaray'a döndü. Galatasaray'ın 9 Ağustos 2006 tarihinde, Şampiyonlar Ligi 3. ön eleme turu'nda Mladá Boleslav karşısında 5-2 kazandığı karşılaşmada 2 gol atıp 1 asist yaptı. Böylece Galatasaray forması altında ilk resmî golünü attı. 13 Ağustos 2006 tarihinde, Galatasaray'ın Kayserispor'u 4-0 mağlup ettiği karşılaşmada Galatasaray forması ile Süper Lig'deki ilk golünü attı. 2009-10 sezonunda, henüz 22 yaşındayken Galatasaray A takımının kaptanlığına getirildi ve 10 numaralı forma kendisine verildi.
          Arda Turan, Galatasaray forması ile birer Süper Lig, Türkiye Kupası ve Türkiye Süper Kupası şampiyonluğu yaşadı. 2011 yılının Ağustos ayında, €12.000.000 bonservis ücreti karşılığında İspanyol kulübü Atlético Madrid'e transfer oldu. Ödenen bu bonservis bedeliyle birlikte Türkiye'den yurt dışına transfer olan en pahalı Türk futbolcu oldu.[5] Madrid ekibindeki ilk resmî maçına 28 Ağustos 2011'de, Osasuna ile oynanan La Liga maçında çıktı. Atlético Madrid'de oynadığı sezonlarda birer La Liga, UEFA Süper Kupası, Copa del Rey, Supercopa de España ile 1 UEFA Avrupa Ligi şampiyonluğu yaşarken, 2014 yılında, Şampiyonlar Ligi yarı finalinde attığı gol ile takımının finale yükselmesinde etkin rol oynadı. 2015-16 sezonu öncesinde €34 milyon (€7 milyon başarı bonusları) bonservis bedeli karşılığında bir başka İspanyol takımı Barcelona'ya transfer oldu ve en pahalı Türk futbolcu unvanını elde etti. Barcelona ile ilk resmî maçına 6 Ocak 2016 tarihinde Espanyol ile oynanan Copa del Rey maçında çıktı. Barcelona formasıyla ilk La Liga maçına ise 9 Ocak 2016 tarihinde Granada ile oynanan karşılaşmada çıktı. Turan, Barcelona ile La Liga, Copa del Rey, Supercopa de España, UEFA Süper Kupası ve FIFA Kulüpler Dünya Kupası şampiyonluğu yaşadı.
          Türkiye forması da giyen Arda Turan, Türkiye millî takımında oynamadan önce, Türkiye 16 Yaş Altı, Türkiye 17 Yaş Altı, Türkiye 18 Yaş Altı, Türkiye 19 Yaş Altı, Türkiye 20 Yaş Altı ve Türkiye 21 Yaş Altı takımlarında forma giydi. Türkiye millî futbol takımı ile ilk maçına 16 Ağustos 2006 tarihinde Lüksemburg ile oynanan hazırlık maçında çıktı. Arda Türkiye ile 2008 Avrupa Futbol Şampiyonası'nda mücadele etti ve takımı adına turnuvada 2 gol attı.
          Milliyet Spor Ödülü'nü, 2008 ve 2009 yıllarında Yılın Futbolcusu, 2013 yılında Yılın Sporcusu kategorilerinde kazandı. 2010 yılında Yılın Futbolcusu ve 2012 ile 2013 yıllarında ise Avrupa'da Yılın Türk Futbolcusu kategorilerinde Futbol Plus Dergisi Yılın Futbol Oscarları ödülünün sahibi oldu. 2014 yılında 13. Uluslararası Türkiye Spor Adamları Ödülleri kapsamında; Avrupa'da Yılın Futbolcusu ödülünü kazandı. 2008 yılında İspanyol spor dergisi Don Balón tarafından, 1987 ve üstü doğumlu 100 yıldız futbolcu arasında en iyi 8. futbolcu seçildi. Uluslararası Futbol Tarihi ve İstatistikleri Federasyonu tarafından 2009 yılının en popüler aktif futbolcusu olarak gösterildi. 2015 yılında GQ dergisi tarafından Yılın Adamı seçildi.[6]
          6 Haziran 2017 Makedonya maçından dönerken uçakta gazeteci Bilal Meşe'ye küfredip boğazını sıkarak saldırdığı için eleştirilere uğrayan Turan,[7][8] millî takım kariyerini sonlandırdı.[9]
        </p>
      </div>
      <img data-aos = "fade-left" className='w-2/6 object-cover' src="https://picsum.photos/200/300 " />

    </div>

  )
}

export default About