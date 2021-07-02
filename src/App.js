import LazyLoadImage from './components/LazyLoadImage.jsx';

function App() {

  const arrImgs = [
                  "/img/1.jpg",
                  "/img/2.jpg",
                  "/img/3.jpg"
                ]  

    arrImgs.map( (p) => {console.log(p); return p} )
    
  return (
    <div className="App">
      <div className="large-div">
        The large text
      </div>     

     { arrImgs.map( (imgSrc,index) =>   <LazyLoadImage key={index}  src={imgSrc} /> ) }
    </div>
  );
}

export default App;
