const ListView = (props) => {
   const list = props.places.map((place, i) => (
      <ul key={i}>
            <li>
               <h4>{place.name}</h4>
               <div><p>{place.description}</p>
               </div>
               <div>
                  <audio
                     type
                     controls
                     autoPlay
                     src={'../../assets/audi/audio1.mpeg'}>
                     Your browser does not support the
                     <code>audio</code> element.
                  </audio>
               </div>
            </li>
         <hr/>
      </ul>
   ))

   return (list)
}

export default ListView;