#  Axios

Axios ve fetch en popüler iki veri çekme kütüphanesidir

Faydaları :

-Özelleştirilebilir
-Axios ,otomatik olarak verilerini işler
- Hata ayıklama özellikleri vardır
- HTTP isteklerini (get,post,delete,put)

 //const [productlist,setproductlist]=useState([])

   useEffect(()=>{

    Verileri çekmek için attığımız istek get() isteğidir..
 
     Verileri APİ tarafına atabilme  POST isteği demektir.

    APİ işlemlerinde veri çekerken mi hata alınıyo yoksa veri alırken mı bulabilmek  için catch hata yakalamyı yazmamız lazım..

    fetch('https://dummyjson.com/products/1').then((response)=>response.json()).then((productlist)=>console.log("2.Dönen yanıt",productlist.products)).catch((error)=>console.log("Hata ayıklandı"))
  },[]);
 


  useEffect(()=>{

axios
.get('https://dummyjson.com/products')
.then((response)=>setproductlist(response?.data?.products))
.catch((error)=>console.log("Axios get Hata yakalandı",error)) 


  });
  console.log("ürünler state",productlist)



Kullanımı :


-Projeye axios kütüphanesini indirip kuruyoruz(npm install axios)
- Kullanmak isteediğimiz  yerlerde axios import ediyoruz.

HTTP İSTEĞİ YAPMA

- Veri alma isteği yapma
- axios.get('endpoint')


- Yeni Veri Ekleme İsteği
-Axios.post('endpoint',{gönderilecekveri})


- veri silme isteği
- axios .delete("endpoint/silinecek elemanın id si")
 
 - veri güncelleme isteği 
 -axios.put('endpoint/id',güncellecek eleman)

   # JSON SERVER

- Sahte bir api olusturmaya yarar.
- Kendi bilgisayarımızda bir APİ olusturur
- Olusturdugu APİ temeli bir json dosyasıdır.



# Sık Kullanılan Javascript Dizi metotları


  - Filter :istenilen parametreye göre bir dizi döndürür( genelde silme işleminde kullanılır)
  

  - Find : istenilen elemanı diziden bulur
  - Slice: istenilen elemanın yerine başka bir eleman koymak için kullanılır
  - Splice : Diziyi 2 ye bölmeye yarar
  - FindIndex : İstenilen elemanın indexini bulur