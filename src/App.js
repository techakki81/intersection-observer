import LoadImages from './components/LoadImages.jsx';

function App() {

  const arrImgs = [
                  "/img/1.jpg",
                  "/img/2.jpg",
                  "/img/3.jpg"
                ]

 
  //let imgHtml = arrImgs.map( (img,i)=> {return  (<LoadImage key={i} src={img} />) }) 
    
  return (
    <div className="App">
      <div className="large-div">
        The large text
      </div>
      <LoadImages src={arrImgs[0]}/>      
    </div>
  );
}

export default App;
